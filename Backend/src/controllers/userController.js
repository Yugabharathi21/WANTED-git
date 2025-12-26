const db = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserByGithubId = async (req, res) => {
    const { github_id } = req.params;
    try {
        const { rows } = await db.query('SELECT * FROM users WHERE github_id = $1', [github_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    const { github_id, username } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO users (github_id, username) VALUES ($1, $2) RETURNING *',
            [github_id, username]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
