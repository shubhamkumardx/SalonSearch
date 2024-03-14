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