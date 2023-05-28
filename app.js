require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


//middlware para establecer una carpeta con el contenido estatico
// qpp.use(express.static(__dirname + '/public'))


app.use(require('./router'))

// El next pasa hacia la siguiente capa
app.use((req, res, next)=>{
    res.atatus(404).send('No se encontro el archivo')
})

app.listen(port, () => console.log(`http://localhost:${port}`));