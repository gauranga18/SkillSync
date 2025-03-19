const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// // Connect MongoDB
// console.log("MongoDB URI:", process.env.MONGO_URI);
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected! ✅"))
//     .catch(err => console.error("MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
    res.send("SkillSync Backend is Running! 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
