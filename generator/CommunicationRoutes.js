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

module.exports.addCommunicationRoutes = function(subsector) {
	for (var i = 0; i < subsector.systems.length; i++) {
		var system = subsector.systems[i].System;
		if (system != "Empty") {
			system.CommunicationScore = communicationScore(system);
		} else {
			
		}
	}
}