const { Router } = require('express');
const router = Router();

const { getTerritorios, getTerritorio, createTerritorio, deleteTerritorio, updateTerritorio} = require('../Controllers/territorios.controllers');

router.route('/')
    .get(getTerritorios)
    .post(createTerritorio);
router.route('/:id')
    .get(getTerritorio)
    .put(updateTerritorio)
    .delete(deleteTerritorio);

module.exports = router;