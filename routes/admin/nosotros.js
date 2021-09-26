var express = require('express');
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/', async function (req, res, next) {
    var nosotros = await nosotrosModel.getNosotros();

    res.render('admin/nosotros', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        nosotros
    });
}); // cierra get


router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await nosotrosModel.deleteNosotrosById(id);
    res.redirect('/admin/nosotros')
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.proyecto != "" && req.body.descripcion != "" && req.body.responsable != "") {
            // await nosotrosModel.insertNosotros(req.body); 
            await nosotrosModel.insertNosotros({
                ...req.body,
                img_id
            });



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


router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var nosotros = await nosotrosModel.getNosotrosById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        nosotros
    });
});

router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
} else {
    if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
    }
}
if (borrar_img_vieja && req.body.img_original) {
    await (destroy(req.body.img_original));
}
    

var obj = {
    proyecto: req.body.proyecto,
    descripcion: req.body.descripcion,
    responsable: req.body.responsable,
    img_id
}

console.log(obj)
await nosotrosModel.modificarNosotrosById(obj, req.body.id);
res.redirect('/admin/nosotros');
    } catch (error) {
    console.log(error)
    res.render('admin/nosotros', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico el proyecyo'
    })
}
});


module.exports = router;