var express = require('express');
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel');

router.get('/', async function (req, res, next) {
    var nosotros= await nosotrosModel.getNosotros();

    res.render('admin/nosotros', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        nosotros
    });
}); // cierra get


module.exports = router; 