const express = require('express');
const path = require('path');
const fs = require('fs');
const { response } = require('express');

const app = express();
const PORT = 3001;

// Creating HTML Routes

// GET /notes should return notes.html file
app.get("/notes", (req, res) =>
    response.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET * should return index.html
app.get('*', (req, res) =>
    response.sendFile(path.join(__dirname, '../index.html'))
);