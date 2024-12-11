const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('List of books'));
router.post('/', (req, res) => res.send('Add a book'));

module.exports = router;
