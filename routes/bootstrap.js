const express = require('express');
const router = express.Router();

const bsController= require('../controllers/bootstrap');

// GETS
router.get('/', bsController.getIndex);
router.get('/layout', bsController.getLayouts);
router.get('/content', bsController.getContent);
router.get('/form', bsController.getForms);
router.get('/comp', bsController.getComponents);


module.exports = router;