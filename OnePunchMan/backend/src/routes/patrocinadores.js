const {Router} = require('express');
const router = Router();

const { getPatrocinadores, createPatrocinador, getPatrocinador, deletePatrocinador, updatePatrocinador} = require('../controllers/patrocinadores.controller');

router.route('/')
    .get(getPatrocinadores)
    .post(createPatrocinador)

router.route('/:id')
    .get(getPatrocinador)
    .put(updatePatrocinador)
    .delete(deletePatrocinador)

module.exports = router;