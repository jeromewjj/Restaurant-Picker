import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    roomId: {
        type: String,
        required:true
    },
    ownerId: {
        type: String,
        required: true,
    },
    choices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
    ],
    generatedChoice: {
        type: String
    }
})
const RoomModel = mongoose.model("RoomModel", RoomSchema);
export {RoomModel};