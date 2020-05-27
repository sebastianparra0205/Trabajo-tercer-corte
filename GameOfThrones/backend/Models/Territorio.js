const { Schema, model} = require('mongoose');

const territorioSchema = new Schema({
    nombreTerritorio: {
        type: String,
        unique: true
    },
    mapaRegion: {
        type: String,
        trim: true,
        required: true
    },
    caracteristicas: {
        type: String,
        trim: true,
        required: true
    },
    nombreRegion: {
        type:String,
        trim: true,
        required: true
    },
    clima: {
        type:String,
        trim: true,
        required: true
    },
    principalesProductos: {
        type:String,
        trim: true,
        required: true
    },
    nSubditosConseguidos: {
        type:String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

module.exports = model('Territorio', territorioSchema);