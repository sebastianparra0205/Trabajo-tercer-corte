const guerrerosCtrl = {};

const Guerrero = require('../Models/Guerrero');

guerrerosCtrl.getGuerreros = async (req, res) => {
    //console.log();
    const guerreros = await Guerrero.find();
    res.json(guerreros);
}

guerrerosCtrl.createGuerrero = async (req, res) => {
    //console.log(req.body)

    const {nombre, especialidad, cargo, nPersonasAsesinadas, interesReina}= req.body;
    const newGuerrero = new Guerrero({
        nombre, 
        especialidad, 
        cargo, 
        nPersonasAsesinadas, 
        interesReina
    });
    //console.log(newAmorio);
    await newGuerrero.save();
    res.json({message: 'Guerrero Guardado'});
}

guerrerosCtrl.updateGuerrero = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { nombre, especialidad, cargo, nPersonasAsesinadas, interesReina }= req.body;
    await Guerrero.findOneAndUpdate({_id: req.params.id}, {
        nombre, 
        especialidad, 
        cargo, 
        nPersonasAsesinadas, 
        interesReina
    });
    res.json({message: 'Guerrero actualizado'});
}

guerrerosCtrl.getGuerrero = async (req, res) => {
    //console.log(req.params.id);

    const guerrero = await Guerrero.findById(req.params.id);
    //console.log(amorio);
    res.json(guerrero);
}

guerrerosCtrl.deleteGuerrero = async (req, res) => {
    await Guerrero.findByIdAndDelete(req.params.id);
    res.json({message: 'Guerrero eliminado'});

}

module.exports = guerrerosCtrl;