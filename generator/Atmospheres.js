var a = {
	"0": {
		"roll": 0,
		"atmosphere": "None",
		"examples": "Moon",
		"pressure": "0.00",
		"survival gear required": "Vacc Suit",
		"temperature adjustement": 0,
		"hydrographic adjustment": -4,
		"TechDM": 1
	},
	"1": {
		"roll": 1,
		"atmosphere": "Trace",
		"examples": "Mars",
		"pressure": "0.001 to 0.09",
		"survival gear required": "Vacc Suit",
		"temperature adjustement": 0,
		"hydrographic adjustment": -4,
		"TechDM": 1
	},
	"2": {
		"roll": 2,
		"atmosphere": "Very Thin, Tainted",
		"examples": "",
		"pressure": "0.1 to 0.42",
		"survival gear required": "Respirator, Filter",
		"temperature adjustement": -2,
		"hydrographic adjustment": 0,
		"TechDM": 1
	},
	"3": {
		"roll": 3,
		"atmosphere": "Very Thin",
		"examples": "",
		"pressure": "0.1 to 0.42",
		"survival gear required": "Respirator",
		"temperature adjustement": -2,
		"hydrographic adjustment": 0,
		"TechDM": 1
	},
	"4": {
		"roll": 4,
		"atmosphere": "Thin, Tainted",
		"examples": "",
		"pressure": "0.43 to 0.7",
		"survival gear required": "Filter",
		"temperature adjustement": -1,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"5": {
		"roll": 5,
		"atmosphere": "Thin",
		"examples": "",
		"pressure": "0.43 to 0.7",
		"survival gear required": "",
		"temperature adjustement": -1,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"6": {
		"roll": 6,
		"atmosphere": "Standard",
		"examples": "Earth",
		"pressure": "0.71 to 1.49",
		"survival gear required": "",
		"temperature adjustement": 0,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"7": {
		"roll": 7,
		"atmosphere": "Standard, Tainted",
		"examples": "",
		"pressure": "0.71 to 1.49",
		"survival gear required": "Filter",
		"temperature adjustement": 0,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"8": {
		"roll": 8,
		"atmosphere": "Dense",
		"examples": "",
		"pressure": "1.5 to 2.49",
		"survival gear required": "",
		"temperature adjustement": 1,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"9": {
		"roll": 9,
		"atmosphere": "Dense, Tainted",
		"examples": "",
		"pressure": "1.5 to 2.49",
		"survival gear required": "Filter",
		"temperature adjustement": 1,
		"hydrographic adjustment": 0,
		"TechDM": 0
	},
	"10": {
		"roll": 10,
		"atmosphere": "Exotic",
		"examples": "",
		"pressure": "Varies",
		"survival gear required": "Air Supply",
		"temperature adjustement": 2,
		"hydrographic adjustment": -4,
		"TechDM": 1
	},
	"11": {
		"roll": 11,
		"atmosphere": "Corrosive",
		"examples": "Venus",
		"pressure": "Varies",
		"survival gear required": "Vacc Suit",
		"temperature adjustement": 6,
		"hydrographic adjustment": -4,
		"TechDM": 1
	},
	"12": {
		"roll": 12,
		"atmosphere": "Insidious",
		"examples": "",
		"pressure": "Varies",
		"survival gear required": "Vacc Suit",
		"temperature adjustement": 6,
		"hydrographic adjustment": -4,
		"TechDM": 1
	},
	"13": {
		"roll": 13,
		"atmosphere": "Dense, High",
		"examples": "",
		"pressure": "2.5+",
		"survival gear required": "",
		"temperature adjustement": 2,
		"hydrographic adjustment": 0,
		"TechDM": 1
	},
	"14": {
		"roll": 14,
		"atmosphere": "Thin, Low",
		"examples": "",
		"pressure": "0.5 or less",
		"survival gear required": "",
		"temperature adjustement": -1,
		"hydrographic adjustment": 0,
		"TechDM": 1
	},
	"15": {
		"roll": 15,
		"atmosphere": "Unusual",
		"examples": "",
		"pressure": "Varies",
		"survival gear required": "Varies",
		"temperature adjustement": 2,
		"hydrographic adjustment": 0,
		"TechDM": 1
	}
};

module.exports.select = function(Dice, planetSize) {
	var roll = Dice.within(Dice.rollD6(2, planetSize - 7), 0, 15);
	return a[roll];
}