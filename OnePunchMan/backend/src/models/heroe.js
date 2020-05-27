const { Schema, model} = require('mongoose');

const heroeSchema = new Schema({
    nombre: String, 
    rango: String, 
    habilidad: String, 
    mCombatidos: String, 
    fans: String, 
    patrocinadores: String, 
    residencia: String, 
    telefono: String,
    celulasM: String
},{
    timestamps: true
});

module.exports = model('Heroe', heroeSchema);