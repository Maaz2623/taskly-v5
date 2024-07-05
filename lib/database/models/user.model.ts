import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  photo: {
    type: String,
  }
});

const User = models?.User || model("User", userSchema);

export default User;