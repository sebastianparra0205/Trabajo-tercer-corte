const { Schema, model} = require('mongoose');

const dragonSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    edad: {
        type: String,
        trim: true,
        required: true
    },
    fuerza: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type:String,
        trim: true,
        required: true
    },
    comidaFav: {
        type:String,
        trim: true,
        required: true
    },
    numeroAsesinatos:{
        type: String,
        trim: true
    }

}, {
    timestamps: true
})

module.exports = model('Dragon', dragonSchema);