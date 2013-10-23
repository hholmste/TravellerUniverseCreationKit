var h = {
	"0": {
		"roll": 0,
		"Hydrographics Percentage": "0-5 %",
		"Description": "Desert world",
		"TechDM": 1
	},
	"1": {
		"roll": 1,
		"Hydrographics Percentage": "6-15 %",
		"Description": "Dry world",
		"TechDM": 0
	},
	"2": {
		"roll": 2,
		"Hydrographics Percentage": "16-25 %",
		"Description": "A few small seas",
		"TechDM": 0
	},
	"3": {
		"roll": 3,
		"Hydrographics Percentage": "26-35 %",
		"Description": "Small seas and oceans",
		"TechDM": 0
	},
	"4": {
		"roll": 4,
		"Hydrographics Percentage": "36-45 %",
		"Description": "Wet world",
		"TechDM": 0
	},
	"5": {
		"roll": 5,
		"Hydrographics Percentage": "46-55 %",
		"Description": "Large oceans",
		"TechDM": 0
	},
	"6": {
		"roll": 6,
		"Hydrographics Percentage": "56-65 %",
		"Description": "",
		"TechDM": 0
	},
	"7": {
		"roll": 7,
		"Hydrographics Percentage": "66-75 %",
		"Description": "Earth-like world",
		"TechDM": 0
	},
	"8": {
		"roll": 8,
		"Hydrographics Percentage": "76-85 %",
		"Description": "Water world",
		"TechDM": 0
	},
	"9": {
		"roll": 9,
		"Hydrographics Percentage": "86-95 %",
		"Description": "Only a few small islands and archipelagos",
		"TechDM": 1
	},
	"10": {
		"roll": 10,
		"Hydrographics Percentage": "96-100 %",
		"Description": "Almost entirely water",
		"TechDM": 2
	}
}

module.exports.select = function (Dice, planetSize, atmosphereClass, temperatureAdjustment) {
	if (planetSize < 2) {
		return h[0];
	} else {
		var roll = Dice.within(Dice.rollD6(2, atmosphereClass + temperatureAdjustment - 7), 0, 10);
		return h[roll];
	}
}