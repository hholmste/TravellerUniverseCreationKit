var express = require("express");
var fs = require("fs");
var SubSector = require("./generator/SubSector.js");
var app = express();

app.use(express.bodyParser());

function fetchStatic(filename, contentType, res) {
	fs.readFile("./static/" + filename, function(err, data) {
		if (err) {
			console.log("could not find " + filename);
			res.send(404);
		} else {
			res.setHeader("Content-Type", contentType);
			res.send(200, data);
		}
	});
}

app.get("/:page.html", function(req, res) {
	fetchStatic(req.params.page + ".html", "text/html", res);
});

app.get("/:file.js", function(req, res) {
	fetchStatic("js/" + req.params.file + ".js", "text/javscript", res);
});

app.get("/:stylesheet.css", function(req, res) {
	fetchStatic("style/" + req.params.stylesheet + ".css", "text/css", res);
});

app.get("/", function(req, res) {
	fetchStatic("index.html", "text/html", res);
});

app.get("/NewSubSector", function(req, res) {
	res.setHeader("Content-Type", "application/json");
	var result = SubSector.generate();
	res.json(result);
});

app.post("/:sectorName/subsector/:subsectorName", function(req, res) {
	console.log("req: " + req);
});

app.listen(8080);