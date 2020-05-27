const amoriosCtrl = {};

const Amorio = require('../Models/Amorio');

amoriosCtrl.getAmorios = async (req, res) => {
    //console.log();
    const amorios = await Amorio.find();
    res.json(amorios);
}

amoriosCtrl.createAmorio = async (req, res) => {
    //console.log(req.body)

    const {nombre, categoria, ejecutado, dignoPrincesa}= req.body;
    //console.log(nombre, ' es ', categoria);
    const newAmorio = new Amorio({
        nombre,
        categoria,
        ejecutado,
        dignoPrincesa
    });
    //console.log(newAmorio);
    await newAmorio.save();
    res.json({message: 'Amorio Guardado'});
}

amoriosCtrl.updateAmorio = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { nombre, categoria, ejecutado, dignoPrincesa }= req.body;
    await Amorio.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        categoria,
        ejecutado,
        dignoPrincesa
    });
    res.json({message: 'Amorio actualizado'});
}

amoriosCtrl.getAmorio = async (req, res) => {
    //console.log(req.params.id);

    const amorio = await Amorio.findById(req.params.id);
    //console.log(amorio);
    res.json(amorio);
}

amoriosCtrl.deleteAmorio = async (req, res) => {
    await Amorio.findByIdAndDelete(req.params.id);
    res.json({message: 'Amorío eliminado'});

}

module.exports = amoriosCtrl;