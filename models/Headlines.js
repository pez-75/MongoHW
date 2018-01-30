var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var headLineSchema = new Schema({
  headLine: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  

});

var HeadLine = mongoose.model("Headline", headLineSchema);

module.exports = Headline;