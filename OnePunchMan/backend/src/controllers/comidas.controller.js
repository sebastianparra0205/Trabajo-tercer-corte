const comidasCtrl = {};

const Comida = require('../models/comida');


comidasCtrl.getComidas = async (req, res) => {
    const comidas = await Comida.find();
    res.json(comidas);
};

comidasCtrl.createComida = async (req, res) => {
    const {nombre, path} = req.body;

    const newComida = new Comida({
        nombre,
        path
    });

    await newComida.save();
    res.json('Comida Creado');
};

comidasCtrl.getComida = async (req, res) =>{
    const comida = await Comida.findById(req.params.id);
    res.json(comida);
};

comidasCtrl.updateComida = async (req, res) => {
    const {nombre, path} = req.body;

    await Comida.findByIdAndUpdate(req.params.id,{
        nombre,
        path
    });
    res.json('Comida actualizado');
};

comidasCtrl.deleteComida = async (req, res) => {
    await Comida.findByIdAndDelete(req.params.id)
    res.json('Comida eliminado');
}

module.exports = comidasCtrl;