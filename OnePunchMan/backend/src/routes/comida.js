const {Router} = require('express');
const router = Router();

const { getComidas, createComida, getComida, deleteComida, updateComida} = require('../controllers/comidas.controller');

router.route('/')
    .get(getComidas)
    .post(createComida);

router.route('/:id')
    .get(getComida)
    .put(updateComida)
    .delete(deleteComida);

module.exports = router;