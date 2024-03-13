const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    index: true,

  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const ServiceType = mongoose.model("ServiceType", userSchema)
module.exports = ServiceType;