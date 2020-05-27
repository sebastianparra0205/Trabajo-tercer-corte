const {Router} = require('express');
const router = Router();

const { getSaitamas, createSaitama, getSaitama, deleteSaitama, updateSaitama} = require('../controllers/saitama.controller');

router.route('/')
    .get(getSaitamas)
    .post(createSaitama)

router.route('/:id')
    .get(getSaitama)
    .put(updateSaitama)
    .delete(deleteSaitama)

module.exports = router;