var obscure = "Obscure group - few have heard of them, no popular support";
var fringe = "Fringe group - few supporters";
var minor = "Minor group - some supporters";
var notable = "Notable group - significant support, well known";
var significant = "Significant group - nearly as powerful as the government";
var overwhelming = "Overwhelming popular support - more powerful than the government";

var strengths = {
	"1": obscure,
	"2": obscure,
	"3": obscure,
	"4": fringe,
	"5": fringe,
	"6": minor,
	"7": minor,
	"8": notable,
	"9": notable,
	"10": significant,
	"11": significant,
	"12": overwhelming
}

var f = {

};

function numberOfFactions(Dice, governmentType) {
	var adju = 0;
	if (governmentType == 0 || governmentType == 7) {
		adju = 1;
	}
	if (governmentType >= 10) {
		adju = -1;
	}
	return Dice.rollD3(1, adju);
}

module.exports.select = function(Dice, Governments, governmentType, populationSize) {
	var nFactions = numberOfFactions(Dice, governmentType);
	var factions = [];
	for (var i = 0; i < nFactions; i++) {
		factions.push({
			"type": Governments.select(Dice, populationSize),
			"strength": strengths[Dice.rollD6(2, 0)]
		});
	}
	return factions;
}