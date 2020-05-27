const { Schema, model} = require('mongoose');

const guerreroSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    especialidad: {
        type: String,
        trim: true,
        required: true
    },
    cargo: {
        type: String,
        trim: true,
        required: true
    },
    nPersonasAsesinadas: {
        type:String,
        trim: true,
        required: true
    },
    interesReina: {
        type:String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

module.exports = model('Guerrero', guerreroSchema);