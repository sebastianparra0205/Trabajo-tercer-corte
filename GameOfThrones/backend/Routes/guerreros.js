const { Router } = require('express');
const router = Router();

const { getGuerreros, getGuerrero, createGuerrero, deleteGuerrero, updateGuerrero} = require('../Controllers/guerreros.controllers');

router.route('/')
    .get(getGuerreros)
    .post(createGuerrero);
router.route('/:id')
    .get(getGuerrero)
    .put(updateGuerrero)
    .delete(deleteGuerrero);

module.exports = router;