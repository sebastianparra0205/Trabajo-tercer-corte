const {Router} = require('express');
const router = Router();

const { getHeroes, createHeroe, getHeroe, deleteHeroe, updateHeroe} = require('../controllers/heroes.controller');

router.route('/')
    .get(getHeroes)
    .post(createHeroe);

router.route('/:id')
    .get(getHeroe)
    .put(updateHeroe)
    .delete(deleteHeroe);

module.exports = router;
