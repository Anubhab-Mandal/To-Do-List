const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/todolist")
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting DB', error);
        process.exit(1);
    }
}


module.exports=connectDB;