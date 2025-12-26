const db = require('../config/db');

exports.getAllBounties = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM bounties');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBounty = async (req, res) => {
    const { issue_id, sponsor_id, amount, currency } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO bounties (issue_id, sponsor_id, amount, currency) VALUES ($1, $2, $3, $4) RETURNING *',
            [issue_id, sponsor_id, amount, currency || 'USD']
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
