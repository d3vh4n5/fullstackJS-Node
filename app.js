require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const expressLayouts = require('express-ejs-layouts')


//middlware para establecer una carpeta con el contenido estatico
app.use(express.static(__dirname + '/public'))

// seteo el motor para las vistas y los layouts
app.set('view engine', 'ejs')
app.use(expressLayouts);

app.use(require('./router'))

// El next pasa hacia la siguiente capa
app.use((req, res, next)=>{
    res.status(404).send('No se encontro el archivo')
})

app.listen(port, () => console.log(`http://localhost:${port}`));