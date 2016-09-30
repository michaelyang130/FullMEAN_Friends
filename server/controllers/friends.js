console.log('This is Controllers - SERVER')

require('../config/mongoose.js')
var mongoose = require('mongoose');

var Friend = mongoose.model('Friend')

module.exports = {
	index : function(req, res){
		// console.log(req.body);
		Friend.find({}, function(err, friends){
			console.log(friends)
			res.json({friends : friends})
		})
	},
	create : function(req, res){
		// console.log(req.body)
		var friend = new Friend({
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			birthday : req.body.birthday
		})
		friend.save(function(err, friend){
			if(err){
				console.log('Could not save Friend')
			}else{
				console.log('Friend Successfully Saved')
				res.json({friend : friend})
			}
		})
	},
	update : function(req, res){
		console.log('UPDATE WORKS!');
		console.log(req.body);
		console.log(req.params.id);
		Friend.findOne({_id : req.params.id}, function(err, friend){
			if(err){
				console.log('UPDATE FAIL!()()()()')
			}else{
				console.log('UPDATE BEGINS HERE:')
				friend.first_name = req.body.first_name;
				friend.last_name = req.body.last_name;
				friend.birthday = req.body.birthday;
				friend.save(function(err){
					if(err){
						console.log('Update Failed to Save')
					}else{
						res.json({friend : friend})
					}
				})
			}
		})
	},
	show : function(req, res){
		console.log(req.body)
		console.log(req.params.id)
		Friend.findOne({_id : req.params.id}, function(err, friend){
			console.log(friend);
			if(err){
				console.log('Could not find specific friend')
			}else{
				console.log('SUCCESS!')
				res.json({friend : friend})
			}
		})
	}
}
 

