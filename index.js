const express = require('express');
const mongoose = require('mongoose');
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('./booksController');

// Set up Express.js server
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });

// Define API routes
app.get('/books', getAllBooks);
app.get('/books/:id', getBookById);
app.post('/books', createBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
