const heroesCtrl = {};

const Heroe = require('../models/heroe');


heroesCtrl.getHeroes = async (req, res) => {
    const heroes = await Heroe.find();
    res.json(heroes);
};

heroesCtrl.createHeroe = async (req, res) => {
    const {nombre, rango, habilidad, mCombatidos, fans, patrocinadores, residencia, telefono, celulasM} = req.body;

    const newHeroe = new Heroe({
        nombre, 
        rango, 
        habilidad, 
        mCombatidos, 
        fans, 
        patrocinadores, 
        residencia, 
        telefono,
        celulasM
    });

    await newHeroe.save();
    res.json('Héroe Creado');
};

heroesCtrl.getHeroe = async (req, res) =>{
    const heroe = await Heroe.findById(req.params.id);
    res.json(heroe);
};

heroesCtrl.updateHeroe = async (req, res) => {
    const {nombre, rango, habilidad, mCombatidos, fans, patrocinadores, residencia, telefono, celulasM} = req.body;

    await Heroe.findOneAndUpdate(req.params.id,{
        nombre, 
        rango, 
        habilidad, 
        mCombatidos, 
        fans, 
        patrocinadores, 
        residencia, 
        telefono,
        celulasM    
    });
    res.json('Heroe actualizado');
};

heroesCtrl.deleteHeroe = async (req, res) => {
    await Heroe.findOneAndDelete(req.params.id)
    res.json('Heroe eliminado');
}

module.exports = heroesCtrl;