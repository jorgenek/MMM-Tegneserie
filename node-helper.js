var request = require('request');
var NodeHelper = require("node_helper");
var cheerio = require("cheerio");

module.exports = NodeHelper.create({
	
	start: function() {
		console.log("Starting node helper: " + this.name);
	},
	
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		console.log("Tegneserie -> Notification: " + notification + " Payload: " + payload);
		
		if(notification === "GET_COMIC") {
			var url = "https://www.dagbladet.no/tegneserie/" + payload.config.comicTitle.replace(/\s+/g, '-').toLowerCase();
			
			console.log('-> Tegneserie request');
			request(url, function (error, response, body) {
				var $ = cheerio.load(body);
				var src = $(".strip-container").first().children().first().attr('src');
				console.log('Tegneserie -> ' + src);
				self.sendSocketNotification("COMIC", {
					img: src
				});
			});
			return;
		}
	},
});
