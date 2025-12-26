const express = require('express');
const router = express.Router();

// Placeholder for GitHub Webhook
router.post('/webhook', (req, res) => {
    const event = req.headers['x-github-event'];
    const payload = req.body;

    console.log(`Received GitHub event: ${event}`);
    // TODO: Add logic to process specific events (issues, pull_request)

    res.status(200).send({ message: 'Webhook received' });
});

module.exports = router;
