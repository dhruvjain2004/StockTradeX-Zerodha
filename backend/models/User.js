const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // ✅ Add this if missing


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

 userSchema.pre("save", async function(next){
        if(!this.isModified("password")) return next();
    this.password =  await bcrypt.hash(this.password, 12);
  });

const User = mongoose.model('User', userSchema);

module.exports = User;