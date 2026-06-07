const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const todoRouter = require('./routes/todoRoutes');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 1121;

const app = express();


// Database
connectDB();


// MiddleWare
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})