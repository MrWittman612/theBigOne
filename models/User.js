const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
<<<<<<< HEAD
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
	// github: {
	//
	// }
=======
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  // github: {
  //
  // }
>>>>>>> 8cf774ccc1dde55668feecafce39c97bc895f8b5
});

module.exports = User = mongoose.model('users', UserSchema);
