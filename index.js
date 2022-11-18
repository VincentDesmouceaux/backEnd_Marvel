require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use(charactersRoutes);
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
