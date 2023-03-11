import { RoomModel } from "../models/Room.js";
import randomize from "randomatic";

const createRoom = async (req, res) => {
  try {
    const ownerId = req.cookies.userId;
    const roomId = randomize("0", 6);
    console.log(roomId);
    const createdRoom = await RoomModel.create({
      roomId: roomId,
      ownerId: ownerId,
      choices: [ownerId],
    });
    res.status(200).json(createdRoom);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const joinRoom = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const userId = req.cookies.userId;
    const updatedRoom = await RoomModel.findOne({ roomId: roomId });
    if (!updatedRoom) {
      throw new Error("Room Not Found!");
    }
    const isUserInRoom = updatedRoom.choices.includes(userId);
    if (!isUserInRoom) {
      updatedRoom.choices.push(userId);
      await updatedRoom.save();
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getRandomRestaurant = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const userId = req.cookies.userId;
    const room = await RoomModel.findOne({ roomId: roomId }).populate(
      "choices"
    );
    console.log(room);
    const isOwner = room.ownerId === userId;
    if (!isOwner) {
      throw new Error("You do not have permission to pick a restaurant.");
    } else {
      const randomIndex = Math.floor(Math.random() * room.choices.length);
      const selectedChoice = room.choices[randomIndex];
      const selectedRestaurant = selectedChoice.restaurant;
      room.generatedChoice = selectedRestaurant;
      await room.save();
    }
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
};

const deleteRoom = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const userId = req.cookie.userId;
    const room = await RoomModel.findOne({ roomId: roomId });
    const isOwner = room.ownerId === userId;
    if (!isOwner) {
      throw new Error("You do not have permission to pick a restaurant.");
    } else {
      await RoomModel.findOneAndDelete({ roomId: roomId });
    }
    res.status(200).json("Your room has been deleted successfully");
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { createRoom, joinRoom, getRandomRestaurant, deleteRoom };
