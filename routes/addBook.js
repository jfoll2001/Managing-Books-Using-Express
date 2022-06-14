var express = require('express');
var router = express.Router();

router.get('/addBook', (req, res) => {
    res.render('pages/addBook');
});

module.exports = router;