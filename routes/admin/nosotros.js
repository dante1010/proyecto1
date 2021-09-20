var express = require('express');
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel');

router.get('/', async function (req, res, next) {
    var nosotros = await nosotrosModel.getNosotros();

    res.render('admin/nosotros', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        nosotros
    });
}); // cierra get


router.get('eliminar/id', async (req, res, next) => {
    var id = req.params.id;
    await nosotrosModel.deleteNosotrosById(id);
    res.redirect('/admin/novedades')
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.proyecto != "" && req.body.descripción != "" && req.body.responsable != "") {
            await nosotrosModel.insertProyecto(req.body);
            res.redirect('/admin/nosotros')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo el proyecto'
        });
    }
});


    module.exports = router;