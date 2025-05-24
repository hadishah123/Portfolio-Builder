import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: { type: String, unique: true },
  image: String,
  role: { type: String, enum: ["Designer", "Developer", "Writer"], default: "Developer" },
  theme: { type: String, default: "theme1" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);