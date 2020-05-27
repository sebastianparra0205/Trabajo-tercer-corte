const { Router } = require('express');
const router = Router();

const { getSubditos, getSubdito, createSubdito, deleteSubdito, updateSubdito} = require('../Controllers/subditos.controllers');

router.route('/')
    .get(getSubditos)
    .post(createSubdito);
router.route('/:id')
    .get(getSubdito)
    .put(updateSubdito)
    .delete(deleteSubdito);

module.exports = router;