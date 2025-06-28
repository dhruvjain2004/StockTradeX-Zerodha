const mongoose =  require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UsersSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = UsersSchema; // ✅ Export the schema directly
