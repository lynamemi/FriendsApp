console.log("mongoose connection and model loading");

var mongoose = require('mongoose'),
	modelFiles = require('fs'),
	path = require('path'),
	models_path = path.join(__dirname, './../models'),
	reg = new RegExp(".js$", "i"),
	dbURI = 'mongodb://localhost/friends'

mongoose.Promise = global.Promise;
mongoose.connect(dbURI);



// CONNECTION EVENTS
// for successful connection:
mongoose.connection.on( 'connected', function() {
	console.log(`Mongoose default connection open to ${ dbURI }`)
});
// for connection with error:
mongoose.connection.on('error', function(err) {
	console.error(`Mongoose degault connection error: ${err}`);
});
// when the connection is disconnected:
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});



// IF THE NODE PROCESS ENDS, CLOSE THE MONGOOSE CONNECTION:
process.on('SIGINT', function() {
	mongoose.connection.close( function() {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});



// READ ALL FILES IN MODELS DIR - IF IT'S A JS FILE, REQUIRE IT
modelFiles.readdirSync(models_path).forEach(function (file) {
	if(file.indexOf('.js')>=0) {
		require(models_path + '/' + file);
	}
})