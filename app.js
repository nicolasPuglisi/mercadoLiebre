const express = require("express");

const app = express()

const path = require("path");

app.use(express.static(path.resolve(__dirname, './public')));

const port = process.env.PORT || 3000

app.listen(port, () => {
    (console.log("El servidor va flama"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
})

