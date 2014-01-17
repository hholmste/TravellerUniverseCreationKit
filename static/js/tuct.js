var Mustache;
var currentSector;
require(
	["mustache.js"],
	function(a){
		Mustache = a;
	});

// the TUCT main app thingamajig
function createFreshSubsector() {
	var req = new XMLHttpRequest();
	req.onload = readSubSystem;
	req.open("get", "/NewSubSector", true);
	req.send();
}

function readSubSystem() {
	var subsector = JSON.parse(this.responseText);
	setSectorData(subsector);
}

function setSectorData(sectorData) {
	currentSector = sectorData;
	var sectorElement = document.getElementById('sector');
	console.log(currentSector);
	sectorElement.innerHTML = Mustache.render(sectorDataTemplate, currentSector);
}

var controlrow = document.getElementById('controlrow');
controlrow.innerHTML = "<button onclick='createFreshSubsector();'>Create a fresh subsector</button>";

var sectorDataTemplate = '<div class="sectorinfo">Subsector <span class="namespan sectorinfopoint">{{Name.name}}</span></div>'
													+ '<div class="sectorinfo">Populated worlds: <span class="populatedworldsspan sectorinfopoint">{{PopulatedWorlds}}</span></div>'
													+ '<div class="sectorinfo">Average population level <span class="avgpopulation sectorinfopoint">{{AveragePopulation}}</span></div>'
													+ '<div class="sectorinfo">Average tech level: <span class="avgtechlevel sectorinfopoint">{{AverageTechLevel}}</span></div>';