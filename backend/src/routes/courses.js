const express = require('express');
const router = express.Router();

const courseController = require('../controllers/CourseController');

router.post('/store', courseController.store);

router.get('/', courseController.index);

router.delete('/:id', courseController.delete);

router.patch('/restore/:id', courseController.restore);

router.get('/deleted-courses', courseController.getDeletedCourses);

module.exports = router;
