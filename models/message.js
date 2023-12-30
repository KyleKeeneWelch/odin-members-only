const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true, maxLength: 2000 },
  createdAt: { type: Date, imumutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
});

userSchema.virtual("url").get(function () {
  return `/members/user/${this._id}`;
});

userSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = mongoose.model("User", userSchema);
