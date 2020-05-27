const patrocinadoresCtrl = {};

const Patrocinador = require('../models/patrocinador');


patrocinadoresCtrl.getPatrocinadores = async (req, res) => {
    const patrocinadores = await Patrocinador.find();
    res.json(patrocinadores);
};

patrocinadoresCtrl.createPatrocinador = async (req, res) => {
    const { nombre, categoria, presenciaMedios } = req.body;

    const newPatrocinador = new Patrocinador({
        nombre,
        categoria,
        presenciaMedios
    });

    await newPatrocinador.save();
    res.json('Patrocinador Creado');
};

patrocinadoresCtrl.getPatrocinador = async (req, res) =>{
    const patrocinador = await Patrocinador.findById(req.params.id);
    res.json(patrocinador);
};

patrocinadoresCtrl.updatePatrocinador = async (req, res) => {
    const {nombre, categoria, presenciaMedios} = req.body;

    await Patrocinador.findOneAndUpdate(req.params.id,{
        nombre, 
        categoria,
        presenciaMedios
    });
    res.json('Patrocinador actualizado');
};

patrocinadoresCtrl.deletePatrocinador = async (req, res) => {
    await Patrocinador.findOneAndDelete(req.params.id)
    res.json('Patrocinador eliminado');
}

module.exports = patrocinadoresCtrl;