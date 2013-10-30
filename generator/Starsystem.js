var Dice = require("./Dice.js");
var Sizes = require("./Sizes.js");
var Atmospheres = require("./Atmospheres.js");
var Temperatures = require("./Temperatures.js");
var Hydrographics = require("./Hydrographics.js");
var Populations = require("./Populations.js");
var Governments = require("./Governments.js");
var Factions = require("./Factions.js");
var Laws = require("./LawLevels.js");
var Quirks = require("./Quirks.js");
var Starports = require("./Starports.js");
var TechLevels = require("./TechLevels.js");
var TradeCodes = require("./TradeCodes.js");
var TravelCodes = require("./TravelCodes.js");

module.exports.generate = function(name) {
	var starsystem = {};

	// the physical
	starsystem.Size = Sizes.selectSize(Dice);
	starsystem.Atmosphere = Atmospheres.select(Dice, starsystem.Size.roll);
	starsystem.Temperature = Temperatures.select(Dice, starsystem.Atmosphere.roll);
	starsystem.Hydrographics = Hydrographics.select(Dice, starsystem.Size.roll, starsystem.Atmosphere.roll, starsystem.Temperature["hydrographic adjustment"]);
	starsystem.GasGiant = Dice.rollD6(2) < 10 ? true : false;

	// the people
	starsystem.Population = Populations.select(Dice);
	starsystem.Government = Governments.select(Dice, starsystem.Population.roll);
	starsystem.Factions = Factions.select(Dice, Governments, starsystem.Government.roll, starsystem.Size.roll);
	starsystem.Laws = Laws.select(Dice, starsystem.Government);
	starsystem.Quirks = Quirks.select(Dice);
	starsystem.Starport = Starports.select(Dice);
	starsystem.TechLevel = TechLevels.select(Dice, starsystem.Starport, starsystem.Size, starsystem.Atmosphere, starsystem.Hydrographics, starsystem.Population, starsystem.Government);
	starsystem.TradeCodes = TradeCodes.select(Dice, starsystem.Size.roll, starsystem.Atmosphere.roll, starsystem.Hydrographics.roll, starsystem.Population.roll, starsystem.Government.roll, starsystem.Laws.roll, starsystem.TechLevel.level)

	// misc
	starsystem.TravelCode = TravelCodes.select(starsystem);
	starsystem.Name = name;
	
	starsystem.hasClassAStarport = function() {
		return starsystem.Starport.Class == "A";
	};
	starsystem.hasImperialConsulate = function() {
		return starsystem.Starport.HasImperialConsulate;
	};
	starsystem.hasNavalBase = function() {
		return starsystem.Starport.HasNavalBase;
	};

	return starsystem;
}