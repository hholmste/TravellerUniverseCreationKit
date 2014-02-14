var Mustache;
var D3;
var currentSector;
var current_system;

var columns = ["01", "02", "03", "04", "05", "06", "07", "08"];
var rows = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

require(
	["mustache.js", "d3.v3.js"],
	function(stache, d3){
		Mustache = stache;
		D3 = d3;
		initialize_all_the_things();
	});

function refreshMap () {
	var subsectorNode = document.getElementById("subsector");	
	while (subsectorNode.lastChild) {
    subsectorNode.removeChild(subsectorNode.lastChild);
	}
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

function pushSystem(root, translation, scale) {
	var linefunction = D3.svg.line()
		.x(function(d){return translation.x + (d.x * scale);})
		.y(function(d){return translation.y + (d.y * scale);})
		.interpolate("linear");

	
			root.append("path")
				.attr("d", linefunction(hexPoints))
				.attr("stroke", "blue")
				.attr("stroke-width", 3)
				.attr("fill", "lightgray");
}

function initialize_all_the_things() {
	refreshMap();
	var root = D3.select("#subsector")
			.append("svg")
				.attr("id", "mapContainer")
				.attr("height", 1024)
				.attr("width", 800);

	var rc = 0;
	var cc = 0;
	rows.forEach(function(row) {
		cc = 0;

		columns.forEach(function(column){
			var system_id = column + row;
			var scale = 66;
			var oddScale = 0;
			if (cc % 2 == 0) {
				oddScale = 0.87 * scale;
			}
			pushSystem(root, {"x": 70 + 1.5 * scale * cc, "y": 30 + scale * rc * 1.7+ oddScale}, scale);
			cc++;
		});
		rc++;
	});
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
		var systemHolder = document.getElementById(id);
		if (system.System == "Empty") {
			systemHolder.classList.remove("populated_system");
			systemHolder.classList.add("empty_system");
		} else {
			systemHolder.classList.remove("empty_system");
			systemHolder.classList.add("populated_system");
		}
	});
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


var sectorDataTemplate = '<div class="sectorinfo">'
													+ '<div class="infoline">Subsector <span class="namespan infopoint" contentEditable="true">{{Name.name}}</span></div>'
													+ '<div class="infoline">Populated worlds: <span class="populatedworldsspan infopoint">{{PopulatedWorlds}}</span></div>'
													+ '<div class="infoline">Average population level <span class="avgpopulation infopoint">{{AveragePopulation}}</span></div>'
													+ '<div class="infoline">Average tech level: <span class="avgtechlevel infopoint">{{AverageTechLevel}}</span></div>'
													+ '</div>';

var system_data_template = '<div class="systeminfo">'
													+ '<div class="infoline">UWP <span class="infopoint">{{UniversialWorldProfile}}</span></div>'
													+ '</div>';

var empty_system_template = '<div class="systeminfo"><div class="systeminfoline emptysysteminfo">Nothing at {{Coordinate.coordinate}}</div></div>';