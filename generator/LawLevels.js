var ll = {
	"0": {
		"roll": 0,
		"Weapons": "No restrictions",
		"Drugs": "No restrictions",
		"Information": "No restrictions",
		"Technology": "No restrictions",
		"Travellers": "No restrictions",
		"Psionics": "No restrictions"
	},
	"1": {
		"roll": 1,
		"Weapons": "Poison gas, explosives, undetectable weapons, WMD",
		"Drugs": "Highly addictive and dangerous narcotics",
		"Information": "Intellect programs",
		"Technology": "Dangerous technologies such as nanotechnology",
		"Travellers": "Visitors must contact planetary authorities by radio, landing is permitted anywhere",
		"Psionics": "Dangerous talents must be registered"
	},
	"2": {
		"roll": 2,
		"Weapons": "Portable energy weapons (except ship-mounted weapons)",
		"Drugs": "Highly addictive narcotics",
		"Information": "Agent programs",
		"Technology": "Alien technology",
		"Travellers": "Visitors must report passenger manifest, landing is permitted anywhere",
		"Psionics": "All psionic powers must be registered; use of dangerous powers forbidden"
	},
	"3": {
		"roll": 3,
		"Weapons": "Heavy weapons",
		"Drugs": "Combat drugs",
		"Information": "Intrusion programs",
		"Technology": "TL 15 items",
		"Travellers": "Landing only at starport or other authorised sites",
		"Psionics": "Use of telepathy restricted to government-approved telepaths"
	},
	"4": {
		"roll": 4,
		"Weapons": "Light assault weapons and submachine guns",
		"Drugs": "Addictive narcotics",
		"Information": "Security programs",
		"Technology": "TL 13 items",
		"Travellers": "Landing only at starport",
		"Psionics": "Use of teleportation and clairvoyance"
	},
	"5": {
		"roll": 5,
		"Weapons": "Personal concealable weapons",
		"Drugs": "Anagathics",
		"Information": "Expert programs",
		"Technology": "TL 11 items",
		"Travellers": "Citizens must register offworld travel, visitors must register all business",
		"Psionics": "Use of all psionic powers restricted to government psionics"
	},
	"6": {
		"roll": 6,
		"Weapons": "All firearms except shotguns and stunners; carrying weapons discouraged",
		"Drugs": "Fast and Slow drugs",
		"Information": "Recent news from offworld",
		"Technology": "TL 9 items",
		"Travellers": "Visits discouraged; excessive contact with citizens forbidden",
		"Psionics": "Possessions of psionic drugs banned"
	},
	"7": {
		"roll": 7,
		"Weapons": "Shotguns",
		"Drugs": "All narcotics",
		"Information": "Library programs, unfiltered data about other worlds. Free speech curtailed.",
		"Technology": "TL 7 items",
		"Travellers": "Citizens may not leave planet; visitors may not leave starport",
		"Psionics": "Use of psionics forbidden"
	},
	"8": {
		"roll": 8,
		"Weapons": "All bladed weapons, stunners",
		"Drugs": "Medicial drugs",
		"Information": "Information technology, any non-critical dataa from offworld, personal media",
		"Technology": "TL 5 items",
		"Travellers": "Landing permitted only imperial agents",
		"Psionics": "Psionic-related technology banned"
	},
	"9": {
		"roll": 9,
		"Weapons": "Any weapons",
		"Drugs": "All drugs",
		"Information": "Any data from offworld. No free press",
		"Technology": "TL 3 items",
		"Travellers": "No offworlders permitted",
		"Psionics": "All psionics"
	}
};

module.exports.select = function(Dice, government) {
	var baseLaw = ll[Dice.within(Dice.rollD6(2, government.roll-7), 0, 9)];
	// look at common contraband and build a custom law-thing
	var law = {
		"roll": baseLaw.roll,
		"Weapons": "No restrictions",
		"Drugs": "No restrictions",
		"Information": "No restrictions",
		"Technology": "No restrictions",
		"Travellers": "No restrictions",
		"Psionics": "No restrictions"
	}

	var contraband = government["Common Contraband"];
	if ("Varies" === contraband) {
		contraband = [];
		if (Math.random() < 0.2) contraband.push("Weapons");
		if (Math.random() < 0.2) contraband.push("Drugs");
		if (Math.random() < 0.2) contraband.push("Information");
		if (Math.random() < 0.2) contraband.push("Technology");
		if (Math.random() < 0.2) contraband.push("Travellers");
		if (Math.random() < 0.2) contraband.push("Psionics");
	} 

	for (var i = 0; i < contraband.length; i++) {
		law[contraband[i]] = baseLaw[contraband[i]];
	}				
	
	return law;
}