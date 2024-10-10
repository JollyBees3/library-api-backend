import bcrypt from 'bcryptjs';
import { signUpModel } from "../models/userModels.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Use findOne to check if the user exists
    const userExist = await signUpModel.findOne({ name });

    if (userExist) {
      return res.status(400).json("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new signUpModel({ name, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).json("User successfully registered");
  } catch (error) {
    next(error);
  }
};

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await signUpModel.findOne({ email });
    if (!user) {
      return res.status(400).json("User Not Found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(200).json("Invalid Password");
    }

    const token = jwt.sign({ id: user._id, name: user.name }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "Logout successful, token invalidated on the client" });
};
