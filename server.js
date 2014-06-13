var express = require("express");
var fs = require("fs");
var SubSector = require("./generator/SubSector.js");
var db = require('mongoskin').db('mongodb://localhost:27017/tuct');
var app = express();

app.use(express.json());

function fetchStatic(filename, contentType, res) {
  fs.readFile("./static/" + filename, function (err, data) {
    if (err) {
      res.send(404);
    } else {
      res.setHeader("Content-Type", contentType);
      res.send(200, data);
    }
  });
}

function findSubsectorByName(name, success, failure) {
  db.collection('subsectors').find({"Name": { "name": name }}).toArray(function (err, result) {
    if (err) {
      failure(err);
    } else if (result.length <= 0) {
      failure(name + " does not exist");
    } else {
      success(result);
    }
  });
}

function removeSubsectorByName(name, success) {
  db.collection('subsectors').remove({"Name": { "name": name }}, function (err, result) {
    if (!err) {
      success(result);
    }
  });
}

function insertSubsector(subsector, success, failure) {
  db.collection('subsectors').insert(subsector, function (err, result) {
    if (err) {
      failure(err);
    }
    if (result) {
      success(result);
    }
  });
}

app.get("/:page.html", function (req, res) {
  fetchStatic(req.params.page + ".html", "text/html", res);
});

app.get("/:file.js", function (req, res) {
  fetchStatic("js/" + req.params.file + ".js", "text/javscript", res);
});

app.get("/:stylesheet.css", function (req, res) {
  fetchStatic("style/" + req.params.stylesheet + ".css", "text/css", res);
});

app.get("/", function (req, res) {
  fetchStatic("index.html", "text/html", res);
});

app.get("/NewSubSector", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  var result = SubSector.generate();
  res.json(result);
});

app.get("/SubSector/:name", function (req, res) {
  findSubsectorByName(req.params.name, function (result) {
    res.setHeader("Content-Type", "application/json");
    res.json(result);
  }, function (err) {
    console.log(err);
    res.send(404);
  });
});

app.post("/SaveSubSector", function (req, res) {
  findSubsectorByName(req.body.Name.name, function (result) {
    console.log("Sector exists, must remove before save");
    removeSubsectorByName(req.body.Name.name, function (deletionResult) {
      console.log("Sector removed, now to insert");
      insertSubsector(req.body, function (insertionResult) {
        console.log("insertion success: " + insertionResult);
        res.send(200);
      });  
    });
  }, function () {
    insertSubsector(req.body, function (result) {
      console.log("insertion success: " + result);
      res.send(200);
    });
  });
});

app.listen(8080);