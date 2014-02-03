var X = {
	"Class": "X",
	"Quality": "No Starport",
	"Berthing Cost": 0,
	"Fuel": "None",
	"Facilities": "None",
	"Naval Base": 13,
	"Scout Base": 13,
	"Research Base": 13,
	"TAS": 13,
	"Imperial Consulate": 13,
	"Pirate": 13,
	"TechDM": -4
};

var E = {
	"Class": "E",
	"Quality": "Frontier",
	"Berthing Cost": 0,
	"Fuel": "None",
	"Facilities": "None",
	"Naval Base": 13,
	"Scout Base": 13,
	"Research Base": 13,
	"TAS": 13,
	"Imperial Consulate": 13,
	"Pirate": 12,
	"TechDM": 0
};

var D = {
	"Class": "D",
	"Quality": "Poor",
	"Berthing Cost": 10,
	"Fuel": "Unrefined",
	"Facilities": "Limited Repair",
	"Naval Base": 13,
	"Scout Base": 7,
	"Research Base": 13,
	"TAS": 13,
	"Imperial Consulate": 13,
	"Pirate": 12,
	"TechDM": 0 
};

var C = {
	"Class": "C",
	"Quality": "Routine",
	"Berthing Cost": 100,
	"Fuel": "Unrefined",
	"Facilities": "Shipyard (small craft), Repair",
	"Naval Base": 13,
	"Scout Base": 8,
	"Research Base": 10,
	"TAS": 10,
	"Imperial Consulate": 10,
	"Pirate": 10,
	"TechDM": 2
};

var B = {
	"Class": "B",
	"Quality": "Good",
	"Berthing Cost": 500,
	"Fuel": "Refined",
	"Facilities": "Shipyard (spacecraft), Repair",
	"Naval Base": 8,
	"Scout Base": 8,
	"Research Base": 10,
	"TAS": 6,
	"Imperial Consulate": 8,
	"Pirate": 12,
	"TechDM": 4
};

var A = {
	"Class": "A",
	"Quality": "Excellent",
	"Berthing Cost": 1000,
	"Fuel": "Refined",
	"Facilities": "Shipyard (all), Repair",
	"Naval Base": 8,
	"Scout Base": 10,
	"Research Base": 8,
	"TAS": 4,
	"Imperial Consulate": 6,
	"Pirate": 13,
	"TechDM": 6
};

var s = {
	"2": X,
	"3": E,
	"4": E,
	"5": D,
	"6": D,
	"7": C,
	"8": C,
	"9": B,
	"10": B,
	"11": A,
	"12": A
};

module.exports.select = function(Dice){
	var roll = Dice.rollD6(2);
	var template = s[roll];
	var port = {
		"Class": template.Class,
		"Quality": template.Quality,
		"Berthing Cost": Dice.rollD6(1) * template["Berthing Cost"],
		"Fuel": template.Fuel,
		"Facilities": template.Facilities,
		"Bases": [],
		"TechDM": template.TechDM,
		"ProfilePart": ""
	}
	if (Dice.rollD6(2) > template["Naval Base"]) {
		port.Bases.push({"Base": "Naval Base"});
		port.HasNavalBase = true;
		port.ProfilePart += "N";
	}
	if (Dice.rollD6(2) > template["Scout Base"]) {
		port.Bases.push({"Base": "Scout Base"});
		port.ProfilePart += "S";
	}
	if (Dice.rollD6(2) > template["Research Base"]) {
		port.Bases.push({"Base": "Research Base"});
		port.ProfilePart += "R";
	}
	if (Dice.rollD6(2) > template["TAS"]) {
		port.Bases.push({"Base": "TAS"});
		port.ProfilePart += "T";
	}		
	if (Dice.rollD6(2) > template["Imperial Consulate"]) {
		port.Bases.push({"Base": "Imperial Consulate"});
		port.HasImperialConsulate = true;
		port.ProfilePart += "I";
	}
	if (Dice.rollD6(2) > template["Pirate"]) {
		port.Bases.push({"Base": "Pirate"});
		port.ProfilePart += "P";
	}

	return port;
}