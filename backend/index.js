const express = require('express');
const cors = require('cors');

const route = require('./src/routes');

require('dotenv').config();
const database = require('./src/config/db');
database.connectToDatabase();

const app = express();

app.use(cors());

app.use(express.json());

route(app);

app.get('/', (req, res) => {
    res.send('Hello world, server is living');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running successfully at http://localhost:${PORT} `);
});
