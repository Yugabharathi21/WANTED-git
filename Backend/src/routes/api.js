const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const issueController = require('../controllers/issueController');
const bountyController = require('../controllers/bountyController');

// User Routes
router.get('/users', userController.getAllUsers);
router.get('/users/:github_id', userController.getUserByGithubId);
router.post('/users', userController.createUser);

// Issue Routes
router.get('/issues', issueController.getAllIssues);
router.post('/issues', issueController.createIssue);

// Bounty Routes
router.get('/bounties', bountyController.getAllBounties);
router.post('/bounties', bountyController.createBounty);

module.exports = router;
