const territoriosCtrl = {};

const Territorio = require('../Models/Territorio');

territoriosCtrl.getTerritorios = async (req, res) => {
    //console.log();
    const territorios = await Territorio.find();
    res.json(territorios);
}

territoriosCtrl.createTerritorio = async (req, res) => {
    //console.log(req.body)

    const {nombreTerritorio, mapaRegion, caracteristicas, nombreRegion, clima, principalesProductos, nSubditosConseguidos}= req.body;
    const newTerritorio = new Territorio({
        nombreTerritorio, 
        mapaRegion, 
        caracteristicas, 
        nombreRegion, 
        clima, 
        principalesProductos, 
        nSubditosConseguidos
    });
    //console.log(newAmorio);
    await newTerritorio.save();
    res.json({message: 'Territorio Guardado'});
}

territoriosCtrl.updateTerritorio = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { nombreTerritorio, mapaRegion, caracteristicas, nombreRegion, clima, principalesProductos, nSubditosConseguidos }= req.body;
    await Territorio.findOneAndUpdate({_id: req.params.id}, {
        nombreTerritorio, 
        mapaRegion, 
        caracteristicas, 
        nombreRegion, 
        clima, 
        principalesProductos, 
        nSubditosConseguidos
    });
    res.json({message: 'Territorio actualizado'});
}

territoriosCtrl.getTerritorio = async (req, res) => {
    //console.log(req.params.id);

    const territorio = await Territorio.findById(req.params.id);
    //console.log(amorio);
    res.json(territorio);
}

territoriosCtrl.deleteTerritorio = async (req, res) => {
    await Territorio.findByIdAndDelete(req.params.id);
    res.json({message: 'Territorio eliminado'});

}

module.exports = territoriosCtrl;