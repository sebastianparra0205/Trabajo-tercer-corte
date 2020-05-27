const { Schema, model} = require('mongoose');

const patrocinadorSchema = new Schema({
    nombre: String, 
    categoria: String,
    presenciaMedios: String
},{
    timestamps: true
});

module.exports = model('Patrocinador', patrocinadorSchema);