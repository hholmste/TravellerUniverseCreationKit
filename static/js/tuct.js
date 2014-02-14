var Mustache;
var D3;
var currentSector;
var current_system;
var map_root;
var scale = 66;

var columns = ["01", "02", "03", "04", "05", "06", "07", "08"];
var rows = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

require(
	["mustache.js", "d3.v3.js"],
	function(stache, d3){
		Mustache = stache;
		D3 = d3;
		refreshMap();
	});

function refreshMap() {
	var subsectorNode = document.getElementById("subsector");	
	
	while (subsectorNode.lastChild) {
    subsectorNode.removeChild(subsectorNode.lastChild);
	}

	map_root = root = D3.select("#subsector")
		.append("svg")
			.attr("id", "mapContainer");
}

var hexPoints = [
		{"y": 0.87,  "x": 0.5},
		{"y": 0.0,   "x": 1.0},
		{"y": -0.87, "x": 0.5},
		{"y": -0.87, "x": -0.5},
		{"y": 0.0,   "x": -1.0},
		{"y": 0.87,  "x": -0.5},
		{"y": 0.87,  "x": 0.5}
];

function push_system(translation, scale, system_id) {
	var linefunction = D3.svg.line()
		.x(function(d){return translation.x + (d.x * scale);})
		.y(function(d){return translation.y + (d.y * scale);})
		.interpolate("linear");

	var path = map_root
		.append("path")
			.attr("d", linefunction(hexPoints))
			.attr("id", system_id)
			.attr("class", "system")
			.on("click", function(){select_system(system_id);});		

	map_root.append("text")
		.text(system_id)
		.attr("id", "text_" + system_id)
		.attr("x", translation.x - 0.25 * scale)
		.attr("y", translation.y - 0.5 * scale)
		.on("click", function(){select_system(system_id);});

	return path;
}

function createFreshSubsector() {
	var req = new XMLHttpRequest();
	req.onload = readSubSector;
	req.open("get", "/NewSubSector", true);
	req.send();
}

function readSubSector() {
	var subsector = JSON.parse(this.responseText);

	subsector.selectSystem = function(system_id) {
		return this.systems.filter(function(candidate){
			return candidate.Coordinate.coordinate == system_id;
		})[0];
	};

	setSectorData(subsector);
	var saveButton = document.getElementById("save_subsector_button");
	saveButton.classList.remove("hidden");
}

function setSectorData(sectorData) {
	currentSector = sectorData;
	var sectorElement = document.getElementById('sector');
	sectorElement.innerHTML = Mustache.render(sectorDataTemplate, currentSector);

	sectorData.systems.forEach(function(system){
		var id = system.Coordinate.coordinate;
		var translation = system_id_to_translation(id, scale);
		var systemHolder = push_system(translation, scale, id)

		if (system.System == "Empty") {
			systemHolder.classed("populated_system", false);
			systemHolder.classed("empty_system", true);
		} else {
			systemHolder.classed("populated_system", true);
			systemHolder.classed("empty_system", false);
		}
	});
}

function system_id_to_translation(system_id, scale) { 
	var cc = parseInt(system_id.substring(0, 2)) - 1;
	var rc = parseInt(system_id.substring(2, 4)) - 1;
	var oddScale = 0;
			if (cc % 2 == 1) {
				oddScale = 0.87 * scale;
			}
	return { "x": 70 + 1.5 * scale * cc * 1.00,
					 "y": 70 + 1.0 * scale * rc * 1.74 + oddScale};
}

function select_system(system_id) {
	current_system = currentSector.selectSystem(system_id);
	var system_html;
	if (current_system.System == "Empty") {
		system_html = Mustache.render(empty_system_template, current_system);
	} else {
		system_html = Mustache.render(system_data_template, current_system);
	}

	var system_element = document.getElementById("selected_system");
	system_element.innerHTML = system_html;
}


var sectorDataTemplate = '<div id="sectorinfo">'
													+ '<div class="infoline">Subsector <span class="namespan infopoint" contentEditable="true">{{Name.name}}</span></div>'
													+ '<div class="infoline">Populated worlds: <span class="populatedworldsspan infopoint">{{PopulatedWorlds}}</span></div>'
													+ '<div class="infoline">Average population level <span class="avgpopulation infopoint">{{AveragePopulation}}</span></div>'
													+ '<div class="infoline">Average tech level: <span class="avgtechlevel infopoint">{{AverageTechLevel}}</span></div>'
													+ '</div>';

var system_data_template = '<div id="systeminfo">'
													+ '<div class="infoline">UWP <span class="infopoint">{{UniversialWorldProfile}}</span></div>'
													+ '</div>';

var empty_system_template = '<div id="systeminfo"><div class="systeminfoline emptysysteminfo">Nothing at {{Coordinate.coordinate}}</div></div>';