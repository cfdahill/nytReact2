const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  _id: {type: String, required: true}
});

const articles = mongoose.model("articles", articlesSchema);

module.exports = articles;