const express = require('express');
const {
  addIncome,
  getIncome,
  updateIncome,
  deleteIncome
} = require('../controllers/incomeController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, addIncome);
router.get('/', auth, getIncome);
router.put('/:id', auth, updateIncome);
router.delete('/:id', auth, deleteIncome);

module.exports = router;
