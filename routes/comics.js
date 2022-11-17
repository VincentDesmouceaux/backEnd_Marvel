const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    let { limit, skip, title } = req.query;

    if (!limit) {
      limit = 100;
    }

    if (!skip) {
      skip = 0;
    }

    if (!title) {
      title = "";
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&title=${title}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  console.log("coucou");

  try {
    let id = req.params.id;

    if (!id) {
      id = "";
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.API_KEY}
`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
