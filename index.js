const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//import des routers
const charRouter = require("./routes/characters");
const comicsRouter = require("./routes/comics");
//-----------//
const app = express();
app.use(cors());
app.use(express.json());

//Utilisation des routes

// mongoose.connect(process.env.MONGO_URI)

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome on HomePage" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use(charRouter);
app.use(comicsRouter);

app.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Page not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is on 🔥");
});
