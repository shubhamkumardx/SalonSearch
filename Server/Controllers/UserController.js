const db = require("../Database/config");
const User = require("../Models/UserModel");
const secretkey = "SECRETKEY";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// LOGIN USER
module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, secretkey, {
      expiresIn: "700",
    });
    res.json({ token, message: "Login Successfully..!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE USER
module.exports.UpdateUser = async (req, res, next) => {
  const { name, phone  } = req.body;
  try {
    const Newuser = await User.findOneAndUpdate(
      { _id: req.params._id },
      {
        $set: {
          name: name,
          phone: phone,
        },
      },
      { new: true }
    );
    res.json({ message: "User Updated Succesfully", Newuser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
