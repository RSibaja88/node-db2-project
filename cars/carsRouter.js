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
    const { id } = req.params;

    db('cars').where({ id }).car()
    .then(car => {
        res.json(car);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get car by id"});
    });
});

//POST a Car
router.post("/", (req, res) => {
    const carSpecs = req.body;
    db('cars').insert(carSpecs)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCar => {
            res.status(201).json(newCar)
        });        
    })
    .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Couldnt add car" });
    });
});


module.exports = router;