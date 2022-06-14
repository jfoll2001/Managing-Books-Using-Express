var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('pages/index', {
        Books: dataFile
    });
});

module.exports = router;