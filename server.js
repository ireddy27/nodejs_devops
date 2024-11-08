const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/status', (req, res) => {
    res.json({ status: 'API is running' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
