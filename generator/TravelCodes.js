module.exports.select = function(Starsystem) {
	if (Starsystem.Atmosphere.roll >= 10 ||
			Starsystem.Government.roll == 0  ||
			Starsystem.Government.roll == 7  ||
			Starsystem.Government.roll == 10 ||
			Starsystem.Laws.roll == 0        ||
			Starsystem.Laws.roll >= 9) {
		return "Amber";
	} else {
		return "None";
	} 
}