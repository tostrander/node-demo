const express = require('express');
const app = express();
const PORT = 3000;

// Define the default route
app.get('/', (req, res) => {
    res.send('hello world');
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});