const express = require("express");
const db = require("../data/knexConfig");


const router = express.Router();

//Get Cars
router.get("/", (req, res) => {
    db('cars')
      .then(cars => {
      res.json(cars);
      })
      .catch(err => {
      res.status(500).json({ message: "Failed to GET cars"});
      });
});

//Get Cars by ID
router.get("/:id", (req, res) => {
    const { id } = req.params
    db('cars')
      .where({ id })
      .first()
      .then((car) => {
      res.json(car)
      })
      .catch((err) => {
      res.status(500).json({ message: "Failed GET car by ID" })
      });
});

//POST a Car
router.post("/", (req, res) => {
    const newCar = req.body;
      db('cars')
        .insert(newCar)
        .then((car) => {
        res.status(201).json(car);
        })
        .catch((error) => {
        console.log(error);
        res.status(400).json({ errorMessage: "Failed to POST car" });
        });
  });


module.exports = router;