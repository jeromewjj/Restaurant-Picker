import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    restaurant: {
        type: String,
    }
})

const UserModel = mongoose.model("UserModel", UserSchema);
export {UserModel};