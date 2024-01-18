const express = require("express");
const app = express();
const port = (4200)

const fs = require("fs");

app.get('/',(req, res) => {
    res.send('Hi')
})

app.listen(4200)
