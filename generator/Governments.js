var g = {
	"0": {
		"roll": 0,
		"Government":"None",
		"Description":"No goverment structure. In many cases, family bonds predominate.",
		"Examples":"Family, Clan, Anarchy",
		"Common Contraband":[],
		"TechDM": 1
	},
	"1": {
		"roll": 1,
		"Government":"Company/corporation",
		"Description":"Ruling functions are assumed by a company managerial elite, and mostcitizenry are company employees or dependants.",
		"Examples":"Corporate outpost, asteroid mine, feudal domain",
		"Common Contraband":["Weapons", "Drugs", "Travellers"],
		"TechDM": 0
	},
	"2": {
		"roll": 2,
		"Government":"Participating democracy",
		"Description":"Ruling functions are reached by the advice and consent of the citizenry directly.",
		"Examples":"Collective, tribal council, comm-linked consensus",
		"Common Contraband":["Drugs"],
		"TechDM": 0
	},
	"3": {
		"roll": 3,
		"Government":"Self-perpetuating oligarchy",
		"Description":"Ruling functions are performed by a restricted  minority, with little or no input from the mass of citizenry.",
		"Examples":"Plutocrazy, hereditary ruling cate",
		"Common Contraband":["Technology", "Weapons", "Travellers"],
		"TechDM": 0
	},
	"4": {
		"roll": 4,
		"Government":"Representative democracy",
		"Description":"Ruling functions are performed by elected representatives.",
		"Examples":"Republic, democracy",
		"Common Contraband":["Drugs", "Weapons", "Psionics"],
		"TechDM": 0
	},
	"5": {
		"roll": 5,
		"Government":"Feudal technocracy",
		"Description":"Ruling functions are performed by specific individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually beneficial",
		"Examples":"",
		"Common Contraband":["Technology", "Weapons", "Computers"],
		"TechDM": 1
	},
	"6": {
		"roll": 6,
		"Government":"Captive government",
		"Description":"Ruling functions are performed by an imposed leadership answerable to an outside group.",
		"Examples":"A colony or conquered area.",
		"Common Contraband":["Weapons", "Technology", "Travellers"],
		"TechDM": 0
	},
	"7": {
		"roll": 7,
		"Government":"Balkanisation",
		"Description":"No central authority exists; rival governments complete for control. Law level refers to the nearest starport",
		"Examples":"Multiple governments, civil war",
		"Common Contraband": "Varies", // "Varies": what to do here...
		"TechDM": 2
	},
	"8": {
		"roll": 8,
		"Government":"Civil service bureaucracy",
		"Description":"Ruling functions are performed by government agencies employing individuals selected for their expertice.",
		"Examples":"Technocracy, Communism",
		"Common Contraband":["Drugs", "Weapons"],
		"TechDM": 0
	},
	"9": {
		"roll": 9,
		"Government":"Impersonal bureaucracy",
		"Description":"Ruling functions are performed by agencies which have become insulated from the governed citizens.",
		"Examples":"Entrenched castes of bureaucrats, decaying empire",
		"Common Contraband":["Technology", "Weapons", "Drugs", "Travellers", "Psionics"],
		"TechDM": 0
	},
	"10": {
		"roll": 10,
		"Government":"Charismatic dictator",
		"Description":"Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizens",
		"Examples":"Revolutionary leader, messiah, emperor",
		"Common Contraband":["None"],
		"TechDM": 0
	},
	"11": {
		"roll": 11,
		"Government":"Non-charismatic leader",
		"Description":"A previous charismatic dictator has been replaced by a leader through normal channels.",
		"Examples":"Military dictatorship, hereditary kingship",
		"Common Contraband":["Weapons", "Technology", "Computers"],
		"TechDM": 0
	},
	"12": {
		"roll": 12,
		"Government":"Charismatic oligarchy",
		"Description":"Ruling functions are performed by a select group of members of an organisation or class swhich enjoys the overwhelming confidence of the citizenry",
		"Examples":"Junta, revolutionary council",
		"Common Contraband":["Weapons"],
		"TechDM": 0
	},
	"13": {
		"roll": 13,
		"Government":"Religious dictatorship",
		"Description":"Ruling functions are performed by a religious organisation without regard to the specific individual needs of the citizenry",
		"Examples":"Cult, transcendent philosophy, psionic group mind",
		"Common Contraband": "Varies", //"Varies" what to do here...
		"TechDM": -2
	}
};

module.exports.select = function(Dice, populationSize) {
	var roll = Dice.within(Dice.rollD6(2, populationSize - 7), 0, 13);
	return g[roll];
}