const express = require('express');

const app = express();
const port = 3900;

// Middleware to log incoming requests and headers
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    console.log('----------------------------------------------');
    next();
});

// Route to handle the root endpoint
app.get('/', (req, res) => {
    const response = {
        message: 'Welcome to the Express app!',
    };
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
