const subditosCtrl = {};

const Subdito = require('../Models/Subdito');

subditosCtrl.getSubditos = async (req, res) => {
    //console.log();
    const subditos = await Subdito.find();
    res.json(subditos);
}

subditosCtrl.createSubdito = async (req, res) => {
    //console.log(req.body)

    const {nombre, numeroHijos, nombreHijos, problema}= req.body;
    const newSubdito = new Subdito({
        nombre, 
        numeroHijos, 
        nombreHijos, 
        problema
    });
    //console.log(newAmorio);
    await newSubdito.save();
    res.json({message: 'Súbdito Guardado'});
}

subditosCtrl.updateSubdito = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { nombre, numeroHijos, nombreHijos, problema }= req.body;
    await Subdito.findOneAndUpdate({_id: req.params.id}, {
        nombre, 
        numeroHijos, 
        nombreHijos, 
        problema
    });
    res.json({message: 'Subdito actualizado'});
}

subditosCtrl.getSubdito = async (req, res) => {
    //console.log(req.params.id);

    const subdito = await Subdito.findById(req.params.id);
    //console.log(amorio);
    res.json(subdito);
}

subditosCtrl.deleteSubdito = async (req, res) => {
    await Subdito.findByIdAndDelete(req.params.id);
    res.json({message: 'Súbdito eliminado'});

}

module.exports = subditosCtrl;