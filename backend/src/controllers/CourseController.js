const Course = require('../models/Course');

class CourseController {
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Error in reading courses' });
        }
    }
    async store(req, res) {
        try {
            const newCourse = new Course(req.body);
            await newCourse.save();
            res.json({ message: 'Congractulation, adding course successfully!!!' });
        } catch (error) {
            res.status(500).json({ error: 'Error, cannot save course!!!' });
        }
    }
}

module.exports = new CourseController();
