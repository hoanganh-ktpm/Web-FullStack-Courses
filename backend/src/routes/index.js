const coursesRouter = require('./courses');

function route(app) {
    app.use('/api/courses', coursesRouter);
}

module.exports = route;
