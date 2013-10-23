var tl = {
	"0": {
		"level": 0,
		"quality": "Primitive",
		"description": "No technology. TL 0 species have only discovered the simplest tools and principles, and are on a par with Earth's Stone Age"
	},
	"1": {
		"level": 1,
		"quality": "Primitive",
		"description": "Roughly on a par with Bronze or Iron age technology. TL 1 science is mostly superstition, but they can manufacture weapons and work metals"
	},
	"2": {
		"level": 2,
		"quality": "Primitive",
		"description": "Renaissance technology. TL 2 brings with it a greater understanding of chemistry, physics, biology and astronomy as well as the scientific method"
	},
	"3": {
		"level": 3,
		"quality": "Primitive",
		"description": "The advances of TL 2 are now applied, bringing the germ of industrial revolution and steam power. Primitive firearms now dominate the battlefield. This is roughly comparable to the early 19th century"
	},
	"4": {
		"level": 4,
		"quality": "Industrial",
		"description": "The transition to industrial revolution is complete, bringing plastics, radio, and other such inventions. Roughly comparable to the late 19th/early 20th century"
	},
	"5": {
		"level": 5,
		"quality": "Industrial",
		"description": "TL 5 brings widespread electrification, telecommunications and internal combustion. At the high end of the TL, atomics and primitive computing appear. Roughly on a par with the mid-20th century"
	},
	"6": {
		"level": 6,
		"quality": "Industrial",
		"description": "TL 6 brings the development of fission power and more advanced computing. Advances in materials technology and rocketry bring about the dawn of the space age"
	},
	"7": {
		"level": 7,
		"quality": "Pre-stellar",
		"description": "A pre-stellar society can reach orbit reliably and has telecommunications satellites. Computers become common. At the time of writing, humanity is currently somewhere between TL 7 and TL 8"
	},
	"8": {
		"level": 8,
		"quality": "Pre-stellar",
		"description": "At TL 8, it is possible to reach other worlds in the same system, although terraforming or full colonisation are not within the culture's capacity. Permanent space habitats become possible. Fusion power becomes commercially viable"
	},
	"9": {
		"level": 9,
		"quality": "Pre-stellar",
		"description": "The defining element of TL 9 is the development of gravity manipulation, which makes space travel vastly safer and faster. This research leads to development of the Jump drive, which occurs near the end of this Tech Level. TL 9 cultures can colonise other worlds, although going to a colony is generally a one-way trip"
	},
	"10": {
		"level": 10,
		"quality": "Early stellar",
		"description": "With the advent of Jump, nearby systems are opened up. Orbital habitats and factories become common. Interstellar travel and trade lead to an economic boom. Colonies become much more viable"
	},
	"11": {
		"level": 11,
		"quality": "Early stellar",
		"description": "The first true artifical intelligences become possible, as computers are able to model synaptic networks. Grav-supported structures reach to the heavens. Junp-2 travel becomes possible, allowing easier travel beyond the one-Jump stellar mains"
	},
	"12": {
		"level": 12,
		"quality": "Average stellar",
		"description": "Weather control revolutionises terraforming and agriculture. Man-portable plasma weapons and carrier-mounted fusion guns make the battlefield untenable for unarmoured combatants. Jump-3 travel is developed"
	},
	"13": {
		"level": 13,
		"quality": "Average stellar",
		"description": "The battle dress appears on the battlefield in response to the new weapons. Cloning of body parts becomes easy. Advances in hull design and thruster plates means that spacecraft can easily enter atmosphere and even go underwater. Jump-4 travel"
	},
	"14": {
		"level": 14,
		"quality": "Average stellar",
		"description": "Fusion weapons become man-portable. Flying cities appear. Jump-5 travel"
	},
	"15": {
		"level": 15,
		"quality": "High stellar",
		"description": "Black globe generators suggest a new direction for defensive technologies, while the development of synthetic anagathics means that the human lifespan is now vastly increased. Jump-6 travel"
	}
};

function theFloor(atmosphere) {
	var min = 0;

	if (atmosphere.roll < 2) {
		min = Math.max(min, 8);
	}
	if (atmosphere.roll < 4) {
		min = Math.max(min, 5);
	}
	if (atmosphere.roll == 4 || atmosphere.roll == 7 || atmosphere == 9) {
		min = Math.max(min, 3);
	}
	if (atmosphere.roll == 10) {
		min = Math.max(min, 8);
	}
	if (atmosphere.roll == 11) {
		min = Math.max(min, 9);
	}
	if (atmosphere.roll == 12) {
		min = Math.max(min, 10);
	}
	if (atmosphere.roll == 13 || atmosphere.roll == 14) {
		min = Math.max(min, 5);
	}
	if (atmosphere.roll == 15) {
		min = Math.max(min, 8);
	}
	return min;
} 

function roll(Dice, starport, size, atmosphere, hydrographics, population, government) {
	var roll = Dice.within(Dice.rollD6(1, starport.TechDM + size.TechDM + atmosphere.TechDM + hydrographics.TechDM + population.TechDM + government.TechDM), 0, 15);
	
	return Math.max(roll, theFloor(atmosphere));
}

module.exports.select = function(Dice, starport, size, atmosphere, hydrographics, population, government) {
	return tl[roll(Dice, starport, size, atmosphere, hydrographics, population, government)];
}