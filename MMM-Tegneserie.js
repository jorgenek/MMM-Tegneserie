Module.register("MMM-Tegneserie", {

    // Default module config.
    defaults: {
        
	updateInterval : 5000 * 60 * 60, // 5 hours,
	comicTitle : 'lunch',
	showColors: false
    },

    start: function() {
        Log.info(this.config);
        Log.info("Starting module: " + this.name);

        this.dailyComic = "";
        this.getComic();
        
        self = this;
        if(self.config.updateInterval < 60000) {
			self.config.updateInterval = 60000;
		}			
		
        setInterval(function() {
            self.getComic();
        }, self.config.updateInterval);
    },

    // Define required scripts.
    getScripts: function() {
        return [];
    },

    getStyles: function() {
        return ["tegneserie.css"];
    },

    getComic: function() {
        Log.info("Tegneserie: Getting comic.");
        this.sendSocketNotification("GET_COMIC", {
            config: this.config
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "COMIC") {
            Log.info('Tegneserie url return: ' + payload.img);
            this.dailyComic = payload.img;
            this.updateDom(1000);
        }
    },

    notificationReceived: function(notification, payload, sender) {
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");

        var comicWrapper = document.createElement("div");
        comicWrapper.className = "tegneserie-container";
    
        var img = document.createElement("img");
        img.id = "tegneserie-content";
        img.src = this.dailyComic;
		if(!this.config.showColors) {
			img.classList.add('tegneserie-image');
		}
		comicWrapper.appendChild(img);
        wrapper.appendChild(comicWrapper);
        return wrapper;
    }
});
