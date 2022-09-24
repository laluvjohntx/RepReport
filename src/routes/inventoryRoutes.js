const express = require('express')
const InventoryModel = require("../models/inventory.model");
const app = express();

app.get("/", async (req, res, next) => {
  const inventory = await InventoryModel.find({})
  try{
    res.send(inventory)
  } catch(e) {
    res.status(500).send(error)
  }
})

module.exports = app; 
