const db = require("../Database/config");
const BusinessType = require("../Models/BusinessTypeModel");

// CREATE BUSINESS TYPE
module.exports.CreateType = async (req, res) => {
  const { name, description, is_active } = req.body;
  try {
    const Type = await new BusinessType({ name, description, is_active });
    await Type.save();
    res.status(201).json(Type);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL BUSINESS TYPE
module.exports.GetAllList = async (req, res) => {
  try {
    const allData = await BusinessType.find();
    res.status(201).json(allData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE BUSINESS TYPE

module.exports.UpdateBusinessList = async (req, res, next) => {
  try {
    const { name, description, is_active } = req.body;
    const taskId = req.query._id;
    const result = await BusinessType.updateOne(
      { _id: taskId },
      { $set: { name, description, is_active } },
      { new: true }
    );

    if (result) {
      res.status(200).send({ message: "Task updated successfully" });
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Internal Server Error");
  }
};

// GET USER CLICK BUSINESS TYPE

module.exports.GetUserType = async (req, res) => {
  try {
    const id = req.query._id;
    if (!id) {
      return res.status(400).send("Missing id parameter");
    }
    const trimmedId = id.trim();
    const busType = await BusinessType.findById(trimmedId);
    if (!busType) {
      return res.status(404).send("Business type not found");
    }
    res.status(200).json(busType);
  } catch (error) {
    console.error("Error fetching business type:", error);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE BUSINESS TYPE

module.exports.DeleteType = async (req, res) => {
  try {
    const Id = req.query._id;
    const result = await BusinessType.deleteOne({ _id: Id }, { new: true });
    if (result.deletedCount === 1) {
      res.status(200).send("Task deleted successfully");
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Internal Server Error");
  }
};
