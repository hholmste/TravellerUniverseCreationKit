var Dice = require("./Dice.js");
var Starsystem = require("./Starsystem.js");
var Names = require("./Names.js");
var TradeRoutes = require("./TradeRoutes.js");
var CommunicationRoutes = require("./CommunicationRoutes.js");

function subCoord(n) {
	if (n >= 10) {
		return n;
	}
	return "0" + n
}

function coord(row, column) {
	return {
		"coordinate": subCoord(row) + subCoord(column),
		"row": row,
		"column": column
	}
} 

function selectName() {
	return names[Dice.rollDX(names.length) - 1];
}

module.exports.distance = function(SystemA, SystemB) {
	return Math.max(Math.abs(SystemA.Coordinate.row - SystemB.Coordinate.row), Math.abs(SystemA.Coordinate.column - SystemB.Coordinate.column));
}

module.exports.generate = function() {
	Names.useTradition(Names.Greek);
	var subsector = {"systems": []};
	subsector.Name = Names.select();
	var populatedSectors = 0;
	var totalPopulation = 0;
	var totalTech = 0;

	for (var row = 1; row < 9; row++) {
		for (var column = 1; column < 11; column++) {
			var occurance = Dice.rollD6();
			var coordinate = coord(row, column);
			if (occurance < 4) {
				subsector.systems.push({
									"Coordinate": coordinate,
									"System": "Empty"		
								});
			} else {
				var system = Starsystem.generate(Names.select());
				subsector.systems.push({
									"Coordinate": coordinate,
									"System": system		
								});
				populatedSectors++;
				totalPopulation += system.Population.roll;
				totalTech += system.TechLevel.level;
			}
			
		}
	}

	subsector.CommunicationRoutes = CommunicationRoutes.calculateCommunicationRoutes(subsector);
	subsector.PopulatedWorlds = populatedSectors;
	subsector.AveragePopulation = Number((totalPopulation / populatedSectors).toFixed(2));
	subsector.AverageTechLevel = Number((totalTech / populatedSectors).toFixed(2));

	TradeRoutes.addTradeRoutes(subsector);

	return subsector;
}