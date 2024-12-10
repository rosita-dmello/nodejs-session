const express = require('express');
const app = express();

app.use(express.json()); // To handle JSON data

// Sample library
let books = [
    { id: 1, title: 'The Alchemist' },
    { id: 2, title: '1984' },
];

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
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (book) {
        book.title = req.body.title; // Update the title
        res.json(book);
    } else {
        res.status(404).send('Book not found'); // If book ID doesn't exist
    }
});

// DELETE: Remove a book by ID
app.delete('/books/:id', (req, res) => {
    books = books.filter((book) => book.id !== parseInt(req.params.id));
    res.send('Book removed!');
});

// Start the server
app.listen(3000, () => {
    console.log('Library app running at http://localhost:3000');
});
