const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselHome = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarouselHome", CarouselHome);
