const saitamaCtrl = {};

const Saitama = require('../models/saitama');


saitamaCtrl.getSaitamas = async (req, res) => {
    const saitamas = await Saitama.find();
    res.json(saitamas);
};

saitamaCtrl.createSaitama = async (req, res) => {
    const {nombreJuego, ganador, invitado, comiendoJugando} = req.body;

    const newSaitama = new Saitama({
        nombreJuego, 
        ganador, 
        invitado, 
        comiendoJugando
    });

    await newSaitama.save();
    res.json('Saitama Creado');
};

saitamaCtrl.getSaitama = async (req, res) =>{
    const saitama = await Saitama.findById(req.params.id);
    res.json(saitama);
};

saitamaCtrl.updateSaitama = async (req, res) => {
    const {nombreJuego, ganador, invitado, comiendoJugando} = req.body;

    await Saitama.findOneAndUpdate(req.params.id,{
        nombreJuego, 
        ganador, 
        invitado, 
        comiendoJugando
    });
    res.json('Saitama actualizado');
};

saitamaCtrl.deleteSaitama = async (req, res) => {
    await Saitama.findByIdAndDelete(req.params.id)
    res.json('Saitama eliminado');
}

module.exports = saitamaCtrl;