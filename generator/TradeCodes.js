var anything = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// each requirement is a number or NaN for 'any value'
var Ag = {
	"Classification": "Agricultural",
	"Code": "Ag",
	"Description": "Agricultural worlds are dedicated to farming and food production. Often, they are divided into vast semi-feudal estates.",
	"Size": anything,
	"Atmosphere": [4, 5, 6, 7, 8, 9],
	"Hydro": [4, 5, 6, 7, 8],
	"Population": [5, 6, 7],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var As = {
	"Classification": "Asteroid",
	"Code": "As",
	"Description": "Asteroids are usually mining colonies, but can also e orbital factories or colonies",
	"Size": [0],
	"Atmosphere": [0],
	"Hydro": [0],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Ba = {
	"Classification": "Barren",
	"Code": "Ba",
	"Description": "Barren worlds are uncolonised and empty",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": [0],
	"Government": [0],
	"Law": [0],
	"Tech": anything,
};
var De = {
	"Classification": "Desert",
	"Code": "De",
	"Description": "Desert worlds are dry and barely habitable",
	"Size": anything,
	"Atmosphere": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	"Hydro": [0],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Fl = {
	"Classification": "Fluid Oceans",
	"Code": "Fl",
	"Description": "Fluid Oceans are worlds where the surface liquid is something other than water, and so are incompatible with Earth-derived life.",
	"Size": anything,
	"Atmosphere": [10, 11, 12, 13, 14, 15],
	"Hydro": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Ga = {
	"Classification": "Garden",
	"Code": "Ga",
	"Description": "Garden worlds are Earth-like",
	"Size": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	"Atmosphere": [4, 5, 6, 7, 8, 9],
	"Hydro": [4, 5, 6, 7, 8],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Hi = {
	"Classification": "High Population",
	"Code": "Hi",
	"Description": "High Population worlds have a population in the billions",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": [9, 10, 11, 12, 13, 14, 15],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Ht = {
	"Classification": "High Technology",
	"Code": "Ht",
	"Description": "Hight Technology worlds are among the most technologically advanced in the Imperium",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": [12, 13, 14, 15],
};
var IC = {
	"Classification": "Ice-Capped",
	"Code": "IC",
	"Description": "Ice-Capped worlds have most of their surface liquid frozen in polar ice-caps, and are cold and dry",
	"Size": anything,
	"Atmosphere": [0, 1],
	"Hydro": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var In = {
	"Classification": "Industrial",
	"Code": "In",
	"Description": "Industrial worlds are dominated by factories and cities",
	"Size": anything,
	"Atmosphere": [0, 1, 2, 4, 7, 9],
	"Hydro": anything,
	"Population": [9, 10, 11, 12, 13, 14, 15],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Lo = {
	"Classification": "Low Population",
	"Code": "Lo",
	"Description": "Low Population worlds have a population of only a few thousand or less",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": [1, 2, 3],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Lt = {
	"Classification": "Low Technology",
	"Code": "Lt",
	"Description": "Low Technology worlds are pre-industrial and cannot produce advanced goods",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": [0, 1, 2, 3, 4, 5],
};
var Na = {
	"Classification": "Non-Agricultural",
	"Code": "Na",
	"Description": "Non-Agricultural worlds are too dry or barren to support their populations using conventional food production",
	"Size": anything,
	"Atmosphere": [0, 1, 2, 3],
	"Hydro": [0, 1, 2, 3],
	"Population": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var NI = {
	"Classification": "Non-Industrial",
	"Code": "NI",
	"Description": "Non-Industrial worlds are too low-population to maintain an industrial base",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro": anything,
	"Population": [4, 5, 6],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Po = {
	"Classification": "Poor",
	"Code": "Po",
	"Description": "Poor worlds lack resources, viable land or sufficient population to be anything other than marginal colonies",
	"Size": anything,
	"Atmosphere": [2, 3, 4, 5],
	"Hydro": [0,1, 2, 3],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Ri = {
	"Classification": "Rich",
	"Code": "Ri",
	"Description": "Rich worlds are blessed with a stable government and viable biospheres, making them economic powerhouses",
	"Size": anything,
	"Atmosphere": [6, 8],
	"Hydro": anything,
	"Population": [6, 7, 8],
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Va = {
	"Classification": "Vacuum",
	"Code": "Va",
	"Description": "Vacuum worlds have no atmosphere",
	"Size": anything,
	"Atmosphere": [0],
	"Hydro": anything,
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};
var Wa = {
	"Classification": "Water World",
	"Code": "Wa",
	"Description": "Water Worlds are nearly entirely water-ocean",
	"Size": anything,
	"Atmosphere": anything,
	"Hydro":[10, 11, 12, 13, 14, 15],
	"Population": anything,
	"Government": anything,
	"Law": anything,
	"Tech": anything,
};

var tc = {
	"Codes": [Ag, As, Ba, De, Fl, Ga, Hi, Ht, IC, In, Lo, Lt, Na, NI, Po, Ri, Va, Wa]
};

function contains(array, value) {
	for (var i = 0; i < array.length; i++) {
		if (value === array[i]) {
			return true;
		}
	}
	return false;
}

function matches(code, size, atmosphere, hydrographics, population, government, lawLevel, techLevel) {
	return 	contains(code.Size, size) &&
					contains(code.Atmosphere, atmosphere) &&
					contains(code.Hydro, hydrographics) &&
					contains(code.Population, population) &&
					contains(code.Government, government) &&
					contains(code.Law, lawLevel) &&
					contains(code.Tech, techLevel);
}

module.exports.select = function(Dice, size, atmosphere, hydrographics, population, government, lawLevel, techLevel) {
	var codes = [];

	for (var i = 0; i < tc.Codes.length; i++) {
		if(matches(tc.Codes[i], size, atmosphere, hydrographics, population, government, lawLevel, techLevel)) {
			var condensedCode = {
				"Classification": tc.Codes[i].Classification,
				"Code": tc.Codes[i].Code,
				"Description": tc.Codes[i].Description
			}
			codes.push(condensedCode);
		}
	}

	return codes;
}