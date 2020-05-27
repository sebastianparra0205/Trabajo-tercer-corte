const { Schema, model} = require('mongoose');

const amorioSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    categoria: {
        type: String,
        trim: true,
        required: true
    },
    ejecutado: {
        type: String,
        trim: true
    },
    dignoPrincesa:{
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = model('Amorio', amorioSchema);