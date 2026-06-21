const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const url = process.env.MONGODB_URL;

        await mongoose.connect(url);

        console.log('>>> MONGODB connected successfully <<<');
    } catch (err) {
        console.log('>>> Error to connect to MONGODB!!!!!!! <<<', err);
    }
}

module.exports = { connectToDatabase };
