var mongoose = require('mongoose'),
	express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	root = __dirname,
	port = process.env.PORT || 8000,
	app = express();

app.use(express.static(path.join(root, './client')))
app.use(express.static(path.join(root, './bower_components')))
app.use(bodyParser.json());

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// the above can also be condensed: require('./server/config/routes.js')(app);


app.listen(port, function() {
	console.log(`server running on port ${port}`);
});