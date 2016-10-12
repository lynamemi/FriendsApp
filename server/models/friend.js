// MODELS SHOULD BE THIN. ONLY USE IT TO DEFINE SCHEMA.  THE MONGOOS FILE WILL PULL UP THIS MODEL.

console.log('friends model loaded');

var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date
})
var Friends = mongoose.model('Friends', FriendsSchema);