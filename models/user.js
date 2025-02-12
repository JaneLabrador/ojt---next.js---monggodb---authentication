import mongoose from "mongoose";

const userSchema = new mongoose.Schema(  // ✅ Fixed `mongoose.Schema`
  {
    name: { type: String, required: true },
    email: { type: String, required: true }, 
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Fixed `models.User`
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
