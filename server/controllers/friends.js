// SERVER-SIDE CONTROLLER, COMMUNICATES BETWEEN ROUTES/FACTORY AND MODEL/DATABASE
// RES.JSON IS DATA FROM THE MODEL

var mongoose = require('mongoose');

var Friends = mongoose.model('Friends');

function FriendsController() {
	this.index = function(req, res) {
		Friends.find({}, function(err, friends) {
			if (err) {
				console.log(err);
			} else {
				res.json({friends: friends});
			}
		})
	};
	this.create = function(req,res) {
		var friend = new Friends({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});
		friend.save(function(err) {
			console.log("data made it to the controller backend", friend)
			if (err) {
				console.log("couldn't save ------>", err);
			} else {
				console.log("successfully saved", friend)
				res.redirect('/')
			}
		})
	};
	this.update = function(req,res){
		// FRIEND IS BEING PASSED BY FACTORY FROM EDIT CONTROLLER
		Friends.findById({_id:req.params.id}, function(err, friend) {
			if (err) {
				console.log("something went wrong");
			} else {
				friend.first_name = req.body.first_name;
				friend.last_name = req.body.last_name;
				friend.birthday = req.body.birthday;
				console.log("server friend",friend);
				friend.save(function(err){
					if (err) {
						console.log("something went wrong with saving", err);
					} else {
						res.json({friend:friend});
					}
				});
			}
		})
	};
	this.delete = function(req,res){
		Friends.remove({_id:req.params.id}, function(err, friend){
			if (err) {
				console.log("something went wrong with deleting", err);
			} else {
				console.log("successfully deleted friend");
				res.json({friend:friend});
			}
		})
	};
	this.show = function(req,res){
		console.log("params", req.params.id)
		Friends.findById({_id: req.params.id}, function(err, friend) {
			if (err) {
				console.log(err);
			} else {
				res.json({friend:friend});
			}
		})
	};
}

module.exports = new FriendsController();