var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('admin/nosotros', {
        layout: 'admin/layout'
    });
}); // cierra get


module.exports = router; 