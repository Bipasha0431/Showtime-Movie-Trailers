import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: "String",
      required: [true, "Please enter fullname"],
    },
    email: {
      type: "String",
      unique: true,
      required: [true, "Please enter email"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: "String",
      required: [true, "Please enter password"],
    },
  },
  { timestaps: true }
);

export const User = mongoose.model("User", userSchema);
