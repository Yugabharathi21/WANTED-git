const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const ingestionRoutes = require('./routes/ingestion');
const apiRoutes = require('./routes/api');
const db = require('./config/db');
const { createTables } = require('./models/init');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize DB
createTables();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(morgan('dev'));

// Routes
app.use('/ingest', ingestionRoutes);
app.use('/api', apiRoutes);

// Health Check
app.get('/health', async (req, res) => {
    try {
        await db.query('SELECT 1');
        res.status(200).json({ status: 'OK', database: 'Connected' });
    } catch (err) {
        console.error('Health check failed', err);
        res.status(500).json({ status: 'ERROR', database: 'Disconnected', error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
