const express = require('express');
const Vigenere = require("caesar-salad").Vigenere;
const app = express();
const port = 8000;
const password = 'password';

app.get('/encode/:text', (req, res) => {
    res.send(
        Vigenere.Cipher(password).crypt(req.params.text)
    );
});

app.get('/decode/:text', (req, res) => {
    res.send(
        Vigenere.Decipher(password).crypt(req.params.text)
    );
});

app.get('/encode', (req, res) => {
    res.send(
        req.params.text
    );
});

app.get('/decode', (req, res) => {
    res.send(
        req.params.text
    );
});

app.listen(port, () => {
    console.log(`Server running at ${port} port`);
});
