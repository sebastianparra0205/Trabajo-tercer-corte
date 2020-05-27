const {Router} = require('express');
const router = Router();

const { getMonstruos, createMonstruo, getMonstruo, deleteMonstruo, updateMonstruo} = require('../controllers/monstruos.controller');

router.route('/')
    .get(getMonstruos)
    .post(createMonstruo)

router.route('/:id')
    .get(getMonstruo)
    .put(updateMonstruo)
    .delete(deleteMonstruo)

module.exports = router;