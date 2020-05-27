const { Schema, model} = require('mongoose');

const monstruoSchema = new Schema({
    nombre: String, 
    nivelAmenaza: String,
    lucha: String,
    heroeInvolucrado: String,
    celulasM: String,
    patrocinador: String
},{
    timestamps: true
});

module.exports = model('Monstruo', monstruoSchema);