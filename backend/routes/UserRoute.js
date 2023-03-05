import express from "express";
import {createUser, updateRestaurant} from "../controllers/userController.js"

const UserRoute = express.Router();

UserRoute.post(
    "/createUser",
    createUser
);

UserRoute.put(
    "/updateRestaurant",
    updateRestaurant
);

export {UserRoute};