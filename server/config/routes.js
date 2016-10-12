// RECEIVES HTTP REQUEST FROM FACTORY VIA SERVER.JS AND MAPS IT TO THE CONTROLLER TO RUN THE FUNCTION
// ASSIGNS CONTROLLER METHOD TO GIVEN ROUTE IN YOUR APP

console.log("future routes");

var friends = require('../controllers/friends.js');

module.exports = function(app) {
	// SHOW ALL
	app.get('/friends', friends.index);
	// SHOW ONE
	app.get('/friends/:id', friends.show);
	// CREATE
	app.post('/friends', friends.create);
	// UPDATE
	app.put('/friends/:id', friends.update);
	// DESTROY
	app.delete('/friends/:id', friends.delete);
}