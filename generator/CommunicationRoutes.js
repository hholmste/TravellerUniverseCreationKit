var SubSector = require("./SubSector.js")

function communicationScore(system) {
	var score = 0;
	if (system.hasImperialConsulate()) {
		score++;
	}
	if (system.hasNavalBase()) {
		score++;
	}
	if (system.hasClassAStarport()) {
		score++;
	} 
	return score;
}

function nonEmpty(system) {
	return system.System != "Empty";
}

function communicative(system) {
	return communicationScore(system.System) > 0;
}

function close(communication) {
	return communication.Distance < 4;
}

function distanceMap(systems) {
	var communicationDistances = [];
	for(var i = 0; i < systems.length; i++) {
		for (var j = i+1; j < systems.length; j++) {
			var left = systems[i];
			var right = systems[j];
			communicationDistances.push({"Left": left.System.Name.name, "Right": right.System.Name.name, "Distance": SubSector.distance(left, right)});
		}
	}
	return communicationDistances;
}

module.exports.calculateCommunicationRoutes = function(subsector) {
	var communicativeSystems = subsector.systems.filter(nonEmpty).filter(communicative);
	
	return distanceMap(communicativeSystems).filter(close);
}