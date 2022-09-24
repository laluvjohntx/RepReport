const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  id: {
    type: Integer,
    required: true,
  },
  staffId: {
    type: Integer,
    required: true,
  },
  patients: {
    type: Array,
    required: true
  }
  },
  { collection : 'patient' }
);

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
