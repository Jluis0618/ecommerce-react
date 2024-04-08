import mongoose from "mongoose";
import validator from "validator";
import Product from "../models/products.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Minimum of 8 characters"],
    validate(value) {
      if (value.includes("12345678")) {
        throw new Error("Password not safe");
      }
    },
  },
  cartProduct: [Product.schema],
});

userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Error de login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Error de login");
  }

  return user;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "PhP_Cloths");

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.virtual('cart', {
  ref: 'cartProduct',
  localField: '_id',
  foreignField: 'owner'
})


const User = mongoose.model("User", userSchema);

export default User;
