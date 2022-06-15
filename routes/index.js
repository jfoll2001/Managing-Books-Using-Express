var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('pages/index', {
        Books: dataFile
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    dataFile.Books.splice(id, 1);
    console.log(dataFile.Books.length)
    res.redirect('/index');
});

module.exports = router;