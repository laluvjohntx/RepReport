const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
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
  Staffs: {
    type: Array,
    required: true
  }
  },
  { collection : 'staff' }
);

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
