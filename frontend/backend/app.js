const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/projects', (req, res) => {
    fs.readFile(path.join(__dirname, 'data/projects.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Server error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle contact form submission (e.g., send an email)
    res.json({ success: true, message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
