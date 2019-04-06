const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avater: {
    type: String
  },
  likes: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }],
  commments:[
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      avater: {
        type: String
      },
      date: {
        type: String,
        default: Date.now
      }
    }
  ],
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", postSchema);
