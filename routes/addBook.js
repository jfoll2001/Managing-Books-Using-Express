var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('pages/addBook');
});

router.post('/save', (req, res) => {
    let books = req.body;
    dataFile.Books.push(books);
    res.redirect('/index');
});

module.exports = router;