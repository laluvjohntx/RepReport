const express = require('express')
const mongoose = require('mongoose')

const staffRoutes = require('./routes/staffRoutes.js')
const patientRoutes = require('./routes/patientRoutes.js')
const inventoryRoutes = require('./routes/inventoryRoutes.js')

const app=express()
app.use(express.json())
app.use("/staff", staffRoutes)
app.use("/patient", patientRoutes)
app.use("/inventory", inventoryRoutes)

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:example@mongo:27017/"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
