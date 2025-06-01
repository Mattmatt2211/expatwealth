
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/add-salary', require('./api/add-salary'));
app.use('/api/add-expense', require('./api/add-expense'));
app.use('/api/expenses', require('./api/expenses'));
app.use('/api/convert', require('./api/convert'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
