var p = {
	"0": {
		"roll":0,
		"population":"None",
		"range":"0",
		"description":"",
		"TechDM": 0
	},
	"1": {
		"roll":1,
		"population":"Few",
		"range":"1+",
		"description":"A tiny farmstead or a single family",
		"TechDM": 1
	},
	"2": {
		"roll":2,
		"population":"Hundreds",
		"range":"100+",
		"description":"A village",
		"TechDM": 1
	},
	"3": {
		"roll":3,
		"population":"Thousands",
		"range":"1,000+",
		"description":"",
		"TechDM": 1
	},
	"4": {
		"roll":4,
		"population":"Tens of thousands",
		"range":"10,000+",
		"description":"Small town",
		"TechDM": 1
	},
	"5": {
		"roll":5,
		"population":"Hundreds of thousands",
		"range":"100,000+",
		"description":"Average city",
		"TechDM": 1
	},
	"6": {
		"roll":6,
		"population":"Millions",
		"range":"1,000,000+",
		"description":"",
		"TechDM": 0
	},
	"7": {
		"roll":7,
		"population":"Tens of millions",
		"range":"10,000,000+",
		"description":"Large city",
		"TechDM": 0
	},
	"8": {
		"roll":8,
		"population":"Hundreds of millions",
		"range":"100,000,000+",
		"description":"",
		"TechDM": 0
	},
	"9": {
		"roll":9,
		"population":"Billions",
		"range":"1,000,000,000+",
		"description":"Present day Earth",
		"TechDM": 1
	},
	"10": {
		"roll":10,
		"population":"Tens of billions",
		"range":"10,000,000,000+",
		"description":"",
		"TechDM": 2
	},
	"11": {
		"roll":11,
		"population":"Hundreds of billions",
		"range":"100,000,000,000+",
		"description":"Incredibly crowded world",
		"TechDM": 3
	},
	"12": {
		"roll":12,
		"population":"Trillions",
		"range":"1,000,000,000,000+",
		"description":"World-city",
		"TechDM": 4
	}
};

module.exports.select = function (Dice) {
	var roll = Dice.rollD6(2, -2);
	return p[roll];
}