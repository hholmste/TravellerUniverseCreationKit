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

function withinNJump(communication, n) {
	return communication.Distance <= n;
}

function within1Jump(communication) { return withinNJump(communication, 1); }

function distanceMap(systems) {
	var communicationDistances = [];
	for(var i = 0; i < systems.length; i++) {
		for (var j = i+1; j < systems.length; j++) {
			var left = systems[i];
			var right = systems[j];
			communicationDistances.push({"Left": left, "Right": right, "Distance": SubSector.distance(left, right)});
		}
	}
	return communicationDistances;
}

function buildRoutes(communicatingSystems) {
	var c = communicatingSystems.slice(0);
	var clusters = [];

	while (c.length > 0) {
		var s = c.shift();
		var stack = [];
		stack.push(s);
		var cluster = [];

		while(stack.length > 0) {
			var sys = stack.shift();
			cluster.push({"Name": sys.System.Name, "Coordinate": sys.Coordinate});
			
			var newC = [];
			var nearby = [];
			c.forEach(function(item) {
				if (SubSector.distance(sys, item) <= 2) {
					nearby.push(item);
				} else {
					newC.push(item);
				}
			});
			nearby.forEach(function(item){
				stack.push(item);
			});
			c = newC;
		}
		
		clusters.push(cluster);
	}
	return clusters;
}



module.exports.calculateCommunicationRoutes = function(subsector) {
	var communicativeSystems = subsector.systems.filter(nonEmpty).filter(communicative);
	return buildRoutes(communicativeSystems);
}