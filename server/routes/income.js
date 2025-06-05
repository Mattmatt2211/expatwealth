const express = require('express');
const { addIncome, getIncome } = require('../controllers/incomeController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, addIncome);
router.get('/', auth, getIncome);

module.exports = router;
