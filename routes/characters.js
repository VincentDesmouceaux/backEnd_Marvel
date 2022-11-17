const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    let { limit, skip, name } = req.query;

    if (!limit) {
      limit = 100;
    }

    if (!skip) {
      skip = 0;
    }

    if (!name) {
      name = "";
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=${process.env.API_KEY}
      `
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
