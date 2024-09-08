const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//import des routers
const charRouter = require("./routes/characters");
const comicsRouter = require("./routes/comics");
//-----------//

// mongoose.connect(process.env.MONGO_URI)

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome on HomePage" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Utilisation des routes

app.use(charRouter);
app.use(comicsRouter);

// app.get("/characters", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
//     );
//     // console.log(response.data);
//     res.json(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.get("/comics/:characterId", async (req, res) => {
//   try {
//     // console.log(req.params);
//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.get("/comics", async (req, res) => {
//   const title = req.query.title;
//   console.log(title);
//   try {
//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}`
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.get("*", (req, res) => {
//   try {
//     res.status(404).json({ message: "Page not found" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is on 🔥 on port =>" + process.env.PORT || 3000);
});
