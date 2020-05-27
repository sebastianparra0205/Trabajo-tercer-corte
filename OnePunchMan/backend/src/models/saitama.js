const { Schema, model} = require('mongoose');

const saitamaSchema = new Schema({
    nombreJuego: String,
    ganador: String,
    invitado: String,
    comiendoJugando: String
},{
    timestamps: true
});

module.exports = model('Saitama', saitamaSchema);