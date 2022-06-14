var express = require('express');
var router = express.Router();

router.get('/addBooks', (req, res) => {
    res.render('pages/addBooks');
});

module.exports = router;