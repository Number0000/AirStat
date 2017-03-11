var APPID = "050c5ed3620120bec2e28dd776c89caf";


function updateByGeo(lat, lon){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"lat=" + lat +
	"&lon=" + lon +
	"&APPID=" + APPID;
    sendRequest(url);
}

var data = "{lat: lat, long: long}";
var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
window.open(url, '_blank');
window.focus();



/*var jsonfile = require('jsonfile')

var file = 'Users/gina/Documents/Stuff/Random\ Project\ Stuff/Hackathon/test/data.json'
var obj = {name: 'lat'}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
}) */
