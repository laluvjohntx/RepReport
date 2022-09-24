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

const url = 'mongodb://root:example@127.0.0.1:27017';


const start = async () => {
  try {
    await mongoose.connect(
      url,
      {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
    );
    console.log(`MongoDB Connected: ${url}`);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
