import * as dotenv from 'dotenv';
const express = require('express');

dotenv.config();

const app = express();

const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.render("index.html");
});

app.listen(3000);
