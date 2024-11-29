import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required."],
        unique: true,
    }, 
    password: {
        type: String,
        required: [true, "Password is Required."],
        unique: true,
    }, 
    firstName: {
        type: String,
        required: false,
    }, 
    lastName: {
        type: String,
        required: false,
    }, 
    image: {
        type: String,
        required: false,
    }, 
    color: {
        type: Number,
        required: false,
    }, 
    profileSetup: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model("Users", userSchema);
export default User;