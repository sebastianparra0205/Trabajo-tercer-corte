const dragonesCtrl = {};

const Dragon = require('../Models/Dragon');

dragonesCtrl.getDragones = async (req, res) => {
    //console.log();
    const dragones = await Dragon.find();
    res.json(dragones);
}

dragonesCtrl.createDragon = async (req, res) => {
    //console.log(req.body)

    const {nombre, edad, fuerza, color, comidaFav, numeroAsesinatos}= req.body;
    const newDragon = new Dragon({
        nombre,
        edad,
        fuerza,
        color,
        comidaFav,
        numeroAsesinatos
    });
    //console.log(newAmorio);
    await newDragon.save();
    res.json({message: 'Dragón Guardado'});
}

dragonesCtrl.updateDragon = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { nombre, edad, fuerza, color, comidaFav, numeroAsesinatos }= req.body;
    await Dragon.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        edad,
        fuerza,
        color,
        comidaFav,
        numeroAsesinatos
    });
    res.json({message: 'Dragon actualizado'});
}

dragonesCtrl.getDragon = async (req, res) => {
    //console.log(req.params.id);

    const dragon = await Dragon.findById(req.params.id);
    //console.log(amorio);
    res.json(dragon);
}

dragonesCtrl.deleteDragon = async (req, res) => {
    await Dragon.findByIdAndDelete(req.params.id);
    res.json({message: 'Dragón eliminado'});

}

module.exports = dragonesCtrl;