const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-url-slugs");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: { type: String, slug: "title" },
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

PostSchema.plugin(slug("title"));

module.exports = mongoose.model("Posts", PostSchema);
