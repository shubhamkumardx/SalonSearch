const db = require("../Database/config");
const ServiceType = require("../Models/ServiceTypeModal");

// CREATE SERVICE TYPE
module.exports.CreateServiceType = async (req, res) => {
    const { name, description, is_active } = req.body;

    try {
      const Type = await new ServiceType({ name, description, is_active });
      await Type.save();
      res.status(201).json({message: "service Created Successfully", data: Type});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  // GET ALL SERVICE TYPE
module.exports.ServiceList = async (req, res) => {
  try {
    const allData = await ServiceType.find();
    res.status(201).json(allData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};


// UPDATE SERVICE TYPE

module.exports.UpdateServiceList = async (req, res, next) => {
  try {
    const { name, description, is_active } = req.body;
    const taskId = req.query._id;
    const result = await ServiceType.updateOne(
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


// GET USER CLICK SERVICE TYPE

module.exports.GetServiceUserType = async (req, res) => {
  try {
    const id = req.query._id;
    if (!id) {
      return res.status(400).send("Missing id parameter");
    }
    const trimmedId = id.trim();
    const busType = await ServiceType.findById(trimmedId);
    if (!busType) {
      return res.status(404).send("Service type not found");
    }
    res.status(200).json(busType);
  } catch (error) {
    console.error("Error fetching business type:", error);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE BUSINESS TYPE

module.exports.DeleteServiceType = async (req, res) => {
  try {
    const Id = req.query._id;
    const result = await ServiceType.deleteOne({ _id: Id }, { new: true });
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
