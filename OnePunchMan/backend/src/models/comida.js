const { Schema, model} = require('mongoose');

const comidaSchema = new Schema({
    nombre: String,
    path: String
},{
    timestamps: true
});

module.exports = model('Comida', comidaSchema);