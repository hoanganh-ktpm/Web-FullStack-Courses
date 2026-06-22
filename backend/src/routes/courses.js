const express = require('express');
const router = express.Router();

const courseController = require('../controllers/CourseController');

router.post('/store', courseController.store);

router.get('/', courseController.index);

router.delete('/:id', courseController.delete)

module.exports = router;
