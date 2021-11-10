import BlockModel from "../models/blockModel.js";

/* -------------------------------

these are the controllers that are called via our router

----------------------------------*/

export const getBlock = async (req, res) => {
  try {
    const newData = await BlockModel.findOne().sort({_id: -1});
    console.log("getting data");
    return res.status(200).json(newData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addBlock = async (req, res) => {
  try {
    console.log("hello from addBlock");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
