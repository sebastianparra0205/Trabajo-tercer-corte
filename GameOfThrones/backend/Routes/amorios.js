const { Router } = require('express');
const router = Router();

const { getAmorios, getAmorio, createAmorio, deleteAmorio, updateAmorio} = require('../Controllers/amorios.controllers');

router.route('/')
    .get(getAmorios)
    .post(createAmorio);
router.route('/:id')
    .get(getAmorio)
    .put(updateAmorio)
    .delete(deleteAmorio);

module.exports = router;
