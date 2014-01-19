var Mustache;
var currentSector;

var columns = ["01", "02", "03", "04", "05", "06", "07", "08"];
var rows = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

require(
	["mustache.js"],
	function(stache){
		Mustache = stache;
		initialize_all_the_things();
	});

function initialize_all_the_things() {
	var subsectorElement = document.getElementById("subsector");
	
	rows.forEach(function(row) {
		var rowElement = document.createElement("div");
		rowElement.classList.add("systemrow");
		subsectorElement.appendChild(rowElement);
		
		columns.forEach(function(column){
			var system_id = column + row;
			var system = document.createElement("div");
			system.classList.add("system");
			system.innerHTML = system_id;
			system.id = "system_" + system_id;
			rowElement.appendChild(system);
		});
	}); 

	var controlrow = document.getElementById('controlrow');
	controlrow.innerHTML = "<button id='fresh_subsector_button' onclick='createFreshSubsector();'>Create a fresh subsector</button>";
}

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
	sectorElement.innerHTML = Mustache.render(sectorDataTemplate, currentSector);

	sectorData.systems.forEach(function(system){
		var id = system.Coordinate.coordinate;
		var systemHolder = document.getElementById("system_" + id);
		if (system.System == "Empty") {
			systemHolder.classList.remove("populated_system");
			systemHolder.classList.add("empty_system");
		} else {
			systemHolder.classList.remove("empty_system");
			systemHolder.classList.add("populated_system");
		}
	});
}



var sectorDataTemplate = '<div class="sectorinfo">Subsector <span class="namespan sectorinfopoint">{{Name.name}}</span></div>'
													+ '<div class="sectorinfo">Populated worlds: <span class="populatedworldsspan sectorinfopoint">{{PopulatedWorlds}}</span></div>'
													+ '<div class="sectorinfo">Average population level <span class="avgpopulation sectorinfopoint">{{AveragePopulation}}</span></div>'
													+ '<div class="sectorinfo">Average tech level: <span class="avgtechlevel sectorinfopoint">{{AverageTechLevel}}</span></div>';