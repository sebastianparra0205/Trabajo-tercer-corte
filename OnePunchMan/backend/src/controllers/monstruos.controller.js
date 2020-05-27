const monstruosCtrl = {};

const Monstruo = require('../models/monstruo');


monstruosCtrl.getMonstruos = async (req, res) => {
    const monstruos = await Monstruo.find();
    res.json(monstruos);
};

monstruosCtrl.createMonstruo = async (req, res) => {
    const {nombre, nivelAmenaza, lucha, heroeInvolucrado, celulasM, patrocinador} = req.body;

    const newMonstruo = new Monstruo({
        nombre, 
        nivelAmenaza, 
        lucha, 
        heroeInvolucrado, 
        celulasM,
        patrocinador
    });

    await newMonstruo.save();
    res.json('Monstruo Creado');
};

monstruosCtrl.getMonstruo = async (req, res) =>{
    const monstruo = await Monstruo.findById(req.params.id);
    res.json(monstruo);
};

monstruosCtrl.updateMonstruo = async (req, res) => {
    const {nombre, nivelAmenaza, lucha, heroeInvolucrado, celulasM, patrocinador} = req.body;

    await Monstruo.findOneAndUpdate(req.params.id,{
        nombre, 
        nivelAmenaza, 
        lucha, 
        heroeInvolucrado, 
        celulasM,
        patrocinador
    });
    res.json('Monstruo actualizado');
};

monstruosCtrl.deleteMonstruo = async (req, res) => {
    await Monstruo.findOneAndDelete(req.params.id)
    res.json('Monstruo eliminado');
}

module.exports = monstruosCtrl;