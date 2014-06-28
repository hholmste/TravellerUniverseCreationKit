var Dice = require("./Dice.js");
var Starsystem = require("./Starsystem.js");
var Names = require("./Names.js");
var TradeRoutes = require("./TradeRoutes.js");
var CommunicationRoutes = require("./CommunicationRoutes.js");

function asDigit(roll) {
  switch (roll) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    return roll;
  case 10:
    return "A";
  case 11:
    return "B";
  case 12:
    return "C";
  case 13:
    return "D";
  case 14:
    return "E";
  case 15:
    return "F";
  default:
    return "?";
  }
}

function subCoord(n) {
  if (n >= 10) {
    return n;
  }
  return "0" + n;
}

function coord(row, column) {
  return {
    "coordinate": subCoord(column) + subCoord(row),
    "row": row,
    "column": column
  };
}

function tradeCodeAsProfilePart(TradeCodes) {
  var condensed = "";

  TradeCodes.forEach(function (TC) {
    condensed += TC.Code;
  });

  return condensed;
}

function travelCodeAsProfilePart(TC) {
  if (TC === "Amber") {
    return "A";
  }
  if (TC === "Red") {
    return "R";
  }
  return "";
}

function generateProfile(system, coordinate) {
  return system.Name.name + " " + coordinate.coordinate +
    " " + system.Starport.Class +
    asDigit(system.Size.roll) +
    asDigit(system.Atmosphere.roll) +
    asDigit(system.Hydrographics.roll) +
    asDigit(system.Population.roll) +
    asDigit(system.Government.roll) +
    asDigit(system.Laws.roll) + "-" +
    asDigit(system.TechLevel.level) + " " +
    system.Starport.ProfilePart +
    tradeCodeAsProfilePart(system.TradeCodes) +
    travelCodeAsProfilePart(system.TravelCode);
}

function pushCoordinate(row, column, neighbours) {
  neighbours.push({
    "coordinate": subCoord(row, column),
    "row": row,
    "column": column
  });
}

function neighbouringCoordinates(Coordinate) {
  var neighbours = [];
  var rowDelta = (Coordinate.column % 2 === 1) ? -1 : 0;
  pushCoordinate(Coordinate.row - 1, Coordinate.column, neighbours);
  pushCoordinate(Coordinate.row + rowDelta, Coordinate.column + 1, neighbours);
  pushCoordinate(Coordinate.row + rowDelta + 1, Coordinate.column + 1, neighbours);
  pushCoordinate(Coordinate.row + 1, Coordinate.column, neighbours);
  pushCoordinate(Coordinate.row + rowDelta + 1, Coordinate.column - 1, neighbours);
  pushCoordinate(Coordinate.row + rowDelta, Coordinate.column - 1, neighbours);
  return neighbours;
}

function systemAt(coord, Systems) {
  var i;
  for (i = 0; i < Systems.length; i++) {
    if (coord.row === Systems[i].Coordinate.row
        && coord.column === Systems[i].Coordinate.column
        && Systems[i].System !== "Empty") {
      return Systems[i];
    }
  }
  return null;
}

function systemAt(subsector, coordinate) {
  var i;
  for (i = 0; i < subsector.systems.length; i++) {
    if (subsector.systems[i].Coordinate.coordinate === coordinate) {
      return subsector.systems[i];
    }
  }
  return null;
}

module.exports.neighbourhood = function (System, Systems) {
  var coordinates = neighbouringCoordinates(System.Coordinate);
  var neighbours = [];
  coordinates.forEach(function (coord) {
    if (coord.row >= 1 && coord.column >= 1) {
      var foundSystem = systemAt(coord, Systems);
      if (foundSystem) {
        neighbours.push(foundSystem);
      }
    }
  });
  return neighbours;
};

module.exports.generate = function (optionalName) {
  var row, column, occurance, coordinate, system;
  Names.useTradition(Names.Greek);
  if (optionalName === undefined) {
    optionalName = Names.select();
  }
  var subsector = {"systems": []};
  subsector.Name = optionalName;
  var populatedSectors = 0;
  var totalPopulation = 0;
  var totalTech = 0;

  for (row = 1; row < 11; row++) {
    for (column = 1; column < 9; column++) {
      occurance = Dice.rollD6();
      coordinate = coord(row, column);
      if (occurance < 4) {
        subsector.systems.push({
          "Coordinate": coordinate,
          "System": "Empty"
        });
      } else {
        system = Starsystem.generate(Names.select());
        subsector.systems.push({
          "Coordinate": coordinate,
          "System": system,
          "UniversialWorldProfile": generateProfile(system, coordinate)
        });
        populatedSectors++;
        totalPopulation += system.Population.roll;
        totalTech += system.TechLevel.level;
      }
    }
  }

  subsector.SystemAt = function (coordinate) { return systemAt(subsector, coordinate); };

  //subsector.CommunicationRoutes = CommunicationRoutes.calculateCommunicationRoutes(subsector);
  //subsector.MainTradeRoutes = TradeRoutes.addTradeRoutes(subsector);
  subsector.PopulatedWorlds = populatedSectors;
  subsector.AveragePopulation = Number((totalPopulation / populatedSectors).toFixed(2));
  subsector.AverageTechLevel = Number((totalTech / populatedSectors).toFixed(2));

  return subsector;
};

module.exports.distance = function (SystemA, SystemB) {
  return Math.max(Math.abs(SystemA.Coordinate.row - SystemB.Coordinate.row), Math.abs(SystemA.Coordinate.column - SystemB.Coordinate.column));
};