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
        TYPEOFREPORT: "Sales",
        DATETYPE: "Daily",
        REPORTTYPE: "Summary",
        REPORTDATE: "20130607"
    },
    toString: function() {
        return config.path +"?" + qs.stringify(config.params);
    }
};

https.get(config.toString(), function(res) {
    res.pipe(zlib.createGunzip()).pipe(process.stdout);
})
.on("error", function(e) {
    console.error(e);
});
