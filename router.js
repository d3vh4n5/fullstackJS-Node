const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.send('Funcona! este sería el index')
})

router.get('/productos', (req, res)=>{
    res.send('Lista de productos')
})

router.get('/productos/:id', (req, res)=>{
    res.send('Producto: ' + req.params.id)
})




module.exports = router;