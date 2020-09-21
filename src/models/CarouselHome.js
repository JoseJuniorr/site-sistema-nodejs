const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselHome = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: [
      {
        url: String,
        public_id: String,
      },
    ],
    link: {
      type: String,
    },
    status: {
      type: String,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarouselHome", CarouselHome);
