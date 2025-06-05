const express = require('express');
const auth = require('../middleware/authMiddleware');
const { getBurnRate } = require('../controllers/burnRateController');

const router = express.Router();

router.get('/', auth, getBurnRate);

module.exports = router;
