var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('admin/nosotros', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    });
}); // cierra get


module.exports = router; 