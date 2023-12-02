// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/dbConnection");
const cors = require('cors');

const app = express();
// Enable CORS for all routes
app.use(cors());

// routes
const reminderroutes = require("./routes/API"); // added

// connect database
connectDB();


app.use(cors(
    {
        origin: ["https://reminder-mern.vercel.app"],
        methods: [],
        credentials: true
    }
));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/reminder", reminderroutes); // added

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});