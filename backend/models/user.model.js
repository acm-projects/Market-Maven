
//require mongoose schema modelling
const Schema = require('mongoose').Schema;

//define schema for users
const userSchema = new Schema({
    email: { type: String },
    password: { type: String }

})

//export User
const User = mongoose.model('User', userSchema);
module.exports = Exercise;