var dice = {};

function d6() {
	return Math.floor(Math.random() * 6) + 1; 
}

function d3() {
	return Math.floor(Math.random() * 3) + 1; 
}

function dx(x) {
	return Math.floor(Math.random() * x) + 1;
}

module.exports.within = function(roll, min, max) {
	return Math.max(min, Math.min(max, roll));
}

module.exports.rollDX = function(x, k, adjustment) {
	var n = k || 1;
	var result = adjustment || 0;
	for (var i = 0; i < n; i++) {
		result += dx(x);
	}
	return result;
}

module.exports.rollD3 = function(k, adjustment) {
	var result = adjustment || 0;
	for (var i = 0; i < k; i++) {
		result += d3();
	}
	return result;
}

module.exports.rollD6 = function(k, adjustment) {
	var n = k || 1;
	var result = adjustment || 0;
	for (var i = 0; i < n; i++) {
		result += d6();
	}
	return result;
}

module.exports.rollD66 = function() {
	var a = d6();
	var b = d6();
	return a + "" + b;
}
