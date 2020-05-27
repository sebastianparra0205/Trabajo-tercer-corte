const { Schema, model} = require('mongoose');

const subditoSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    numeroHijos: {
        type: String,
        trim: true,
        required: true
    },
    nombreHijos: {
        type: String,
        trim: true,
        required: true
    },
    problema: {
        type:String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

module.exports = model('Subdito', subditoSchema);