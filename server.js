const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./routes/routes")(app);


// turns server on and connects to port 3001
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

