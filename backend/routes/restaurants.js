const express = require("express");
const router = express.Router();
let restaurants = require("../database");

router.get("/all", async (req, res) => {
  try {
    res.status(200).json({
      data: restaurants
    });
  } catch (err) {
    res.status(400).json({
      message: "Can't get data",
      err
    });
  }
});

router.get("all/SortedByName", async (req, res) => {
  try {
    let restaurant = restaurants.sort(function(a,b){
      return a.name.localeCompare(b.name);
    });
    res.status(200).json({
      data: restaurant
    });
  } catch (err) {
    res.status(400).json({
      message: "Can't get data",
      err
    });
  }
});

router.get("/SortedByCuisine", async (req, res) => {
  try {
    let restaurant = restaurants.sort(function(a,b){
      return a.cuisine.localeCompare(b.cuisine);
    });
    res.status(200).json({
      data: restaurant
    });
  } catch (err) {
    res.status(400).json({
      message: "Can't get data",
      err
    });
  }
});

router.get("/SortedByRating", async (req, res) => {
  try {
    let restaurant = restaurants.sort(function(a,b){
      return b.rating - a.rating;
    });
    res.status(200).json({
      data: restaurant
    });
  } catch (err) {
    res.status(400).json({
      message: "Can't get data",
      err
    });
  }
});

router.get("/:cuisine", async (req, res) => {
  let { cuisine } = req.params;
  try {
    let restaurant = restaurants.find(restaurant => restaurant.cuisine === cuisine);
    res.status(200).json({
      data: restaurant
    });
  } catch (err) {
    res.status(400).json({
      message: "Can't get data",
      err
    });
  }
});

module.exports = router;