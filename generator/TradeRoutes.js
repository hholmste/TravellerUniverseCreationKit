function tooSmall(cluster) {
	return cluster.length > 1;
}

function buildRoute(cluster, subsector) {
	var commoditySources = cluster.filter(isCommoditySource, subsector);
	var commoditySinks = cluster.filter(isCommoditySink, subsector);
	var foodSources = cluster.filter(isFoodSource, subsector);
	var foodSinks = cluster.filter(isFoodSink, subsector);

	var tradeRoutes = {};


	if(commoditySinks.length > 0 && commoditySources > 0) {
		tradeRoutes.Commodities = match(commoditySources, commoditySinks);
	}

	if(foodSinks.length > 0 && foodSources > 0) {
		tradeRoutes.Food = match(foodSources, foodSinks);
	}

	return tradeRoutes;
}

function match(sources, sinks) {
	var matches = [];
	sources.forEach(function(source) {
		sinks.forEach(function(sink) {
			matches.push({"Source": source, "Sink": sink});
		});
	});
	return matches; 
}

function isCommoditySink(system) {
	return this.SystemAt(system).System.TradeCodes.some(function(tradeCode) {return tradeCode.Code == "IC" || tradeCode.Code == "As" || tradeCode.Code == "De" || tradeCode.Code == "NI"});
}

function isCommoditySource(system) {
	return this.SystemAt(system).System.TradeCodes.some(function(tradeCode) {return tradeCode.Code == "Ht" || tradeCode.Code == "In"});
}

function isFoodSource(system) {
	return this.SystemAt(system).System.TradeCodes.some(function(tradeCode) {return tradeCode.Code == "Ag" || tradeCode.Code == "Ga" || tradeCode.Code == "Wa"});
}

function isFoodSink(system) {
	return this.SystemAt(system).System.TradeCodes.some(function(tradeCode) {return tradeCode.Code == "Ri" || tradeCode.Code == "Hi"});
}

module.exports.addTradeRoutes = function(subsector) {
	var routes = [];
	subsector.CommunicationRoutes.filter(tooSmall).forEach(function(cluster) {
		var route = buildRoute(cluster, subsector);
		if (route.commodity || route.Food) {
			routes.push(route);	
		}
	});
	return routes;
}