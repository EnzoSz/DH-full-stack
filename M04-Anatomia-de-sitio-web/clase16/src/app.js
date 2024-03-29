const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3016, () => console.log('Servidor corriendo http://localhost:3016'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
  });

app.get("/babbage", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/babbage.html'));
});
app.get("/berners-lee", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/berners-lee.html'));
});
app.get("/clarke", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/clarke.html'));
});
app.get("/hamilton", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'));
});
app.get("/hopper", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hopper.html'));
});
app.get("/lovelace", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/lovelace.html')); 
});
app.get("/turing", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/turing.html'));
});