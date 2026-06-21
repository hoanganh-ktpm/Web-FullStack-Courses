const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        imgUrl: { type: String, required: true },
        price: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', CourseSchema);
