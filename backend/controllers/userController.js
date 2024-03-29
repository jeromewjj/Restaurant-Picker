import { UserModel } from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const name = req.body.name;
    const restaurant = req.body.restaurant;
    const createdUser = await UserModel.create({
      name: name,
      restaurant: restaurant,
    });
    res
      .cookie("userId", createdUser._id.toString(), { maxAge: 900000, httpOnly: true })
      .status(200)
      .json(createdUser);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const userId = req.cookies.userId;
    const restaurant = req.body.restaurant;
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        restaurant: restaurant,
      },
      { new: true }
    );
    res.json(updatedUser).status(200);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { createUser, updateRestaurant };
