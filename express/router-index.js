const express = require('express');
const app = express();

const userRoutes = require('./users');
const bookRoutes = require('./books');

app.use('/users', userRoutes); // Routes for users
app.use('/books', bookRoutes); // Routes for books

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
