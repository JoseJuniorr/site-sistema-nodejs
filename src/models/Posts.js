const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    images: [{ url: String, public_id: String }],
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Posts", PostSchema);
