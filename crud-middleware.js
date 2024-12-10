const express = require('express');
const app = express();

app.use(express.json()); // Middleware to handle JSON data
app.use(express.urlencoded({ extended: true }));

// Sample library
let books = [
    { id: 1, title: 'The Alchemist' },
    { id: 2, title: '1984' },
];

// Custom Middleware: Logger
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// GET: Show all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST: Add a new book
app.post('/books', (req, res) => {
    const newBook = { id: books.length + 1, title: req.body.title };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT: Update a book's title by ID
app.put('/books/:id', (req, res, next) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (book) {
        book.title = req.body.title;
        res.json(book);
    } else {
        next(new Error('Book not found')); // Pass error to the error-handling middleware
    }
});

// DELETE: Remove a book by ID
app.delete('/books/:id', (req, res, next) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex((b) => b.id === bookId);

    if (index !== -1) {
        books.splice(index, 1);
        res.send('Book removed!');
    } else {
        next(new Error('Book not found')); // Pass error to the error-handling middleware
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.message); // Log the error for debugging
    res.status(500).send(err.message); // Send a user-friendly error message
});

// Start the server
app.listen(3000, () => {
    console.log('Library app running at http://localhost:3000');
});
