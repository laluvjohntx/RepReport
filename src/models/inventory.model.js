const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  id: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  }
  },
  { collection : 'inventory' }
);

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
