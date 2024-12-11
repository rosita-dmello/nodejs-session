const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('List of users'));
router.post('/', (req, res) => res.send('Add a user'));

module.exports = router;
