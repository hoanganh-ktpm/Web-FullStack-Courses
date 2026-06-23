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

    async delete(req, res) {
        try {
            const courseId = req.params.id;
            await Course.delete({ _id: courseId });
            res.json({ message: `Congractulation, deleting this course successfully!!!` });
        } catch (error) {
            res.status(500).json({ error: `Error, cannot delete!!!` });
        }
    }
}

module.exports = new CourseController();
