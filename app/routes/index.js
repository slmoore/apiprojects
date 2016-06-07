'use strict';

var path = process.cwd();

module.exports = function (app, passport) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
	
	//time microservice
	app.route('/:date')
		.get(function (req, res) {
			
			//get parameter
			var d = req.params.date;
			var months = ["January","February","March","April","May","June",
			              "July","August","September","October","November","December"];
			              
			//setup defaults
			var obj = {};
			obj.unix = null;
			obj.natural = null;
			
			//unix to date response
			if (d.match(/^[0-9]+$/)) {
				obj.unix = Number(d);
				d = new Date(Number(d)*1000);
				obj.natural = months[d.getMonth()] + " ";
                obj.natural+= d.getDate() + ", ";
                obj.natural+= d.getFullYear();
				res.json(obj);
			} else {
				//natural date response
				d = new Date(d);
				if (d.toString() === "Invalid Date") {
			    	res.json(obj);
			    } else {
		            obj.unix = d.getTime()/1000;
		            obj.natural = req.params.date;
		            res.json(obj);
			    }
			}
		});
};

