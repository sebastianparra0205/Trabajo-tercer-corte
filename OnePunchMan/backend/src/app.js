const express = require('express');
const cors = require('cors');

const app = express();


//Configuración
app.set('port', 4000);

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/heroes', require('./routes/heroes'));
app.use('/api/monstruos', require('./routes/monstruos'));
app.use('/api/patrocinadores', require('./routes/patrocinadores'));
app.use('/api/saitama', require('./routes/saitama'));
app.use('/api/comida', require('./routes/comida'));


module.exports = app;