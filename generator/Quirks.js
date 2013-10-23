var q = {
	"11": "Sexist - one gender is considered subservient or inferior to the other",
	"12": "Religious - culture is heavily influenced by a religion or belief system, possibly unique to this world",
	"13": "Artistic - art and culture are highly prized. Aesthetic design is important in all artefacts produced onworld",
	"14": "Ritualised - social interaction and trade is highly formalised. Politeness and adherence to traditional forms is considered very important",
	"15": "Conservative - the culture resists change and outside influences",
	"16": "Xenophobic - the culture distrusts outsiders and alien influences. Offworlders will face considerable prejudice",
	"21": "Taboo - a particular topic is forbidden and cannot be discussed. Characters who unwittingly mention this topic will be ostracised",
	"22": "Deceptive - trickery and equivocation are considered acceptable. Honesty is a sign of weakness",
	"23": "Liberal - the culture welcomes change and offworld influence. Characters who bring new and strange ideas will be welcomed",
	"24": "Honourable - one's word is one's bond in the culture. Lying is both rare and despised",
	"25": "Influenced - the culture is heavily influenced by another, neighbouring world. If you have the details for the neighbouring world, choose a cultural quirk that this world has adopted. If not, roll for one",
	"26": "Fusion - the culture is a merger of two distinct cultures",
	"31": "Barbaric - physical strength and combat prowess are highly valued in the culture. Characters may be challenged to a fight, or dismissed if the seem incapable of defending themselves. Sports tend towards the bloody and violent",
	"32": "Remnant - the culture is a surviving remnant of a once-great and vibrant civilisation, clinging to its former glory. The world is filled with crumbling ruins, and every story revolves around the good old days",
	"33": "Degenerate - the culture is falling apart and is one the brink of war or economic collapse. Violent portests are common and the social order is decaying",
	"34": "Progressive - the culture is expanding and vibrant. Fortunes are being made in trade; science is forging bravely ahead",
	"35": "Recovering - a recent trauma, such as a plague, war, disaster or despotic regime has left scars on the culture",
	"36": "Nexus - members of many different cultures and species visit here",
	"41": "Tourist Attraction - some aspect of the culture or the planet draws visitors from all over charted space",
	"42": "Violent - physical conflict is common, taking the form of duels, brawls, or other contests. Trial by combat is a part of their judicial system",
	"43": "Peaceful - physical conflict is almost unheard-of. The culture produces few soldiers and diplomacy reigns supreme. Forceful characters will be ostracised",
	"44": "Obsessed - everyone is obsessed with or addicted to a substance, personality, act, or item. This monomania pervades every aspect of the culture",
	"45": "Fashion - fine clothing and decoration are considered vitally important in the culture. Underdressed characters have no standing here",
	"46": "At war - the culture is at war, either with another planet or polity, or is troubled by terrorists or rebels",
	"51": "Unusual Custom: Offworlders - space travellers hold a unique position in the culture's mythology or beliefs, and travellers will be expected to live up to these myths",
	"52": "Unusual Custom: Starport - the planet's starport is more than a commercial centre; it might be a religious temple, or be seen as highly controversial and surrounded by protestors",
	"53": "Unusual Custom: Media - news agencies and telecommunications chennels are esprecially strange here. Getting accurate information may be difficult",
	"54": "Unusual Custom: Technology - the culture interacts with technology in an unusual way. Telecommunications might be banned, robots might have civil rights, cyborgs might be property.",
	"55": "Unusual Custom: Lifecycle - there might be a mandatory age of termination, or anagathics might be widely used. Family units may be different, with children being raised by the state or banned in favour of cloning",
	"56": "Unusual Custom: Social Standings - the culture has a distinct caste system. Characters of a low social standing who do not behave appropriately will face punishment",
	"61": "Unusual Custom: Trde - the culture has an odd attitude towards some aspect of commerce, which may interfere with trade at the spaceport. For example, merchants might expect a gift as part of a deal, or some goods may only be handled by certain families",
	"62": "Unusual Custom: Nobility - those of high social standing have a strange custom associated with them; perhaps nobles are blinded, or must live in gilded cages, or only serve for a single year before being exiled",
	"63": "Unusual Custom: Sex - the culture has an unusual attitude towards intercourse and reproduction. Perhaps cloning is used instead, or sex is used to seal commercial deals",
	"64": "Unusual Custom: Eating - food and drink occupies an unusual place in the culture. Perhaps eating is a private affair, or banquets and formal dinners are seen as the highest form of politeness",
	"65": "Unusual Custom: Travel - travellers may be distrusted or feted, or perhaps the culture frowns on those who leave their homes",
	"66": "Unusual Custom: Conspiracy - something strange is going on. The government is being subverted by another group or agency"
};

module.exports.select = function(Dice) {
	var roll = Dice.rollD66();
	return q[roll];
}