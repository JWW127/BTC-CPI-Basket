import BlockModel from "../models/blockModel.js";

/* -------------------------------

these are the controllers that are called via our router

----------------------------------*/

export const getBlock = async (req, res) => {
  try {
    const blockData = await BlockModel.find();
    console.log("getting data");
    res.status(200).json(blockData);
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
