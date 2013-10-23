
var frozen = {
	"Type": "Frozen",
	"Average Temperature": "-51 or less",
	"Description": "Frozen world. No liquid water, very dry atmosphere.",
	"hydrographic adjustment": "0"
};

var cold = {
	"Type": "Cold",
	"Average Temperature": "-51 to 0",
	"Description": "Icy world. Little liquid water, extensive ice caps, few clouds.",
	"hydrographic adjustment": "0"
};

var temperate = {
	"Type": "Temperate",
	"Average Temperature": "0 to 30",
	"Description": "Temperate world. Earthlike. Liquid and vaporised water are common, moderate ice caps.",
	"hydrographic adjustment": "0"
};

var hot = {
	"Type": "Hot",
	"Average Temperature": "31 to 80",
	"Description": "Hot world. Small or no ice caps, little liquid water. Most water in the form of clouds.",
	"hydrographic adjustment": "-2"
};

var roasting = {
	"Type": "Roasting",
	"Average Temperature": "81+",
	"Description": "Boiling world. No ice caps, little liquid water.",
	"hydrographic adjustment": "-6"
}

var t = {
	"2": frozen,
	"3": cold,
	"4": cold,
	"5": temperate,
	"6": temperate,
	"7": temperate,
	"8": temperate,
	"9": temperate,
	"10": hot,
	"11": hot,
	"12": roasting
};

module.exports.select = function(Dice, atmosphereAdjustment) {
	var roll = Dice.within(Dice.rollD6(2, 0 + atmosphereAdjustment), 2, 12);
	return t[roll];
}