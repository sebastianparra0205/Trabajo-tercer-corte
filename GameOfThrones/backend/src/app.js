const express = require('express');
const cors = require ('cors');
const app = express();


//Configuraciones
app.set('port', 5000 || 3000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/amorios', require('../Routes/amorios'));
app.use('/api/dragones', require('../Routes/dragones'));
app.use('/api/subditos', require('../Routes/subditos'));
app.use('/api/territorios', require('../Routes/territorios'));
app.use('/api/guerreros', require('../Routes/guerreros'));




module.exports = app;
