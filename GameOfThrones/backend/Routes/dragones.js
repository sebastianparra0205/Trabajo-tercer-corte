const { Router } = require('express');
const router = Router();

const { getDragones, getDragon, createDragon, deleteDragon, updateDragon} = require('../Controllers/dragones.controllers');

router.route('/')
    .get(getDragones)
    .post(createDragon);
router.route('/:id')
    .get(getDragon)
    .put(updateDragon)
    .delete(deleteDragon);

module.exports = router;