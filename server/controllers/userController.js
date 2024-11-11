import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Please fill all the details",
        success: false,
      });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        message: "User already exists!",
        success: false,
      });
    }
    const hashedpassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      password: hashedpassword,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "Please fill all the details",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log(user);
      return res.status(401).json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const matchedPassword = await bcryptjs.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(401).json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `LoggedIn as ${user.fullName}`,
        success: true,
        user,
        token,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logged out successfully",
      success: true,
    });
};
