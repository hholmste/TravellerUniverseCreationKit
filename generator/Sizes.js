var s = {
	"0": {
		"roll": 0,
		"size": "800 km",
		"examples": "Asteroid, orbital complex",
		"surface gravity": "negligible",
		"TechDM": 2
	},
	"1": {
		"roll": 1,
		"size": "1600 km",
		"examples": "",
		"surface gravity": "0.05",
		"TechDM": 2
	},
	"2": {
		"roll": 2,
		"size": "3200 km",
		"examples": "Triton, Luna, Europa",
		"surface gravity": "0.15",
		"TechDM": 1
	},
	"3": {
		"roll": 3,
		"size": "4800 km",
		"examples": "Mercury, Ganymede",
		"surface gravity": "0.25",
		"TechDM": 1
	},
	"4": {
		"roll": 4,
		"size": "6400 km",
		"examples": "Mars",
		"surface gravity": "0.35",
		"TechDM": 1
	},
	"5": {
		"roll": 5,
		"size": "8000 km",
		"examples": "",
		"surface gravity": "0.45",
		"TechDM": 0
	},
	"6": {
		"roll": 6,
		"size": "9600 km",
		"examples": "",
		"surface gravity": "0.7",
		"TechDM": 0
	},
	"7": {
		"roll": 7,
		"size": "11200 km",
		"examples": "",
		"surface gravity": "0.9",
		"TechDM": 0
	},
	"8": {
		"roll": 8,
		"size": "12800 km",
		"examples": "Earth",
		"surface gravity": "1.0",
		"TechDM": 0
	},
	"9": {
		"roll": 9,
		"size": "14400 km",
		"examples": "",
		"surface gravity": "1.25",
		"TechDM": 0
	},
	"10": {
		"roll": 10,
		"size": "16000 km",
		"examples": "",
		"surface gravity": "1.4",
		"TechDM": 1
	}	
};

module.exports.selectSize = function(Dice) {
	var roll = Dice.rollD6(2, -2);
	return s[roll];
};