const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
//schema
const comment  = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  post: {
    type: ObjectId,
    ref: "post",
  },
 
},{timestamps: true}
);

mongoose.model("Comment", comment);
