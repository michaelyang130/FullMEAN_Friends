console.log('This is Models - SERVER')

require('../config/mongoose.js')
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true}, 
	last_name: {type: String, required: true},
	birthday: {type: Date, required: true},
	}, {timestamps: true});

var Friend = mongoose.model('Friend', FriendSchema)
