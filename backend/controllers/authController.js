import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({ message: "All fields are required" });
    }

    // Check if email is valid
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in registration" });
    console.log(error.message);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("jwt", token);

    res.status(200).json({
      message: "User logged in successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error in login" });
    console.log(error.message);
  }
};

// export const getAuthUser = (req, res) => {
//   try {
//     const token = req.cookies.jwt;
//     if (!token) {
//       return res.status(401).json({ message: "Not authenticated" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     res.json({ user: { id: decoded.id, role: decoded.role } });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user" });
//   }
// };


export const getAuthUser = (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user from DB to get name
    User.findById(decoded.id)
      .select("name email role")
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ user });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
      });

  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};


export const logoutController = (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: false });
  return res.status(200).json({ message: "User logged out successfully" });
};
