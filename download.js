/**
 * Download, decompress and display the iTunes Connect app data
 */

var https = require("https"),
    zlib = require("zlib"),
    qs = require("querystring");

var config = {
    path: "https://reportingitc.apple.com/autoingestion.tft",
    params: {
        USERNAME: "your@email.com",
        PASSWORD: "password",
        VNDNUMBER: "ITC Vendor ID",
        TYPEOFREPORT: "S",
        DATETYPE: "M",
        REPORTTYPE: "S",
        REPORTDATE: "201306"
    },
    toString: function() {
        return config.path +"?" + qs.stringify(config.params);
    }
};

https.get(config.toString(), function(res) {
    /** The data comes back from Apple compressed (good idea), so we have to unzip it first **/
	var unzip = zlib.createGunzip();
    res.pipe(unzip);
    
    /** After decompression, we iterate over each line of the tab delimited format and save it for later **/ 
    var stats = [];
    unzip.on("data", function(data) {
    	var rows = data.toString().split("\n");
    	rows.forEach(function(row) {
    		var columns = row.split("\t");
    		var current = [];
    		columns.forEach(function(column) {
    			current.push(column);
    		});
    		stats.push(current);
    	});
    });
    unzip.on("end", function() {
    	/** We've finished processing the data, yay!  Now we do whatever we want with it.  **/
        console.log("Count: "+ stats.length);
    	console.log(stats[0]);
    });
})
.on("error", function(e) {
    console.error(e);
});
