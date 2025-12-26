const db = require('../config/db');

exports.getAllIssues = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM issues');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createIssue = async (req, res) => {
    const { repo_id, issue_number, title, difficulty } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO issues (repo_id, issue_number, title, difficulty) VALUES ($1, $2, $3, $4) RETURNING *',
            [repo_id, issue_number, title, difficulty]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
