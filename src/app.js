const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/home');
const contactRoutes = require('./routes/contact');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes);
app.use('/contact', contactRoutes);
app.use('/product', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});