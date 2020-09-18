const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-url-slugs");

const CategoriaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: { type: String, slug: "title" },
  },
  {
    timestamps: true,
  }
);

CategoriaSchema.plugin(slug("title"));

module.exports = mongoose.model("Categorias", CategoriaSchema);
