import mongoose from "mongoose";

/* -------------------------------

define our schema and create our model

----------------------------------*/

const blockSchema = new mongoose.Schema({
  price: Number,
  block: Number,
  created: {
    type: Date,
    default: new Date(),
  },
});

const BlockModel = mongoose.model("BlockModel", blockSchema);
export default BlockModel;
