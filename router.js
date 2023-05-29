const express = require('express')
const router = express.Router()

const productos = require('./productos')

router.get('/', (req, res)=>{
    console.log('Consulta al index');
    res.render('index')
})

router.get('/productos', (req, res)=>{
    res.render('views/productos', {productos: productos.all() })
})

router.get('/productos/:id', (req, res)=>{
    let contexto = { producto: productos.find(req.params.id) }
    console.log(`Ruta coon parametros id del id: ${req.params.id}`);
    res.render('views/show', contexto)
})


module.exports = router;