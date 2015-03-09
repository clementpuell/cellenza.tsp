// Algorithme de résolution du problème
var Cpu = function () {
    var _cities;

    this.resolve = function (cities, start) {
        _cities = cities;

        var distance = 0;

        var sortedCities = _sortCities()
            // Retrait de la ville de départ du tableau des villes à parcourir
            .filter(function (element, index, array) {
                return element.feature != start.feature;
            });

        console.log("CPU start at " + start.feature.properties.name);

        var last = start;
        sortedCities.forEach(function (city) {
            distance += goTo(last, city);
            last = city;
        });

        // Retour à la ville de départ
        distance += goTo(last, start);
        
        console.log("CPU distance = " + distance);

        return distance;
    };

    var goTo = function (from, to) {
        console.log("CPU -> " + to.feature.properties.name);
        var fromLatLng = L.GeoJSON.coordsToLatLng(from.feature.geometry.coordinates);
        var toLatLng = L.GeoJSON.coordsToLatLng(to.feature.geometry.coordinates);
        return Math.round(fromLatLng.distanceTo(toLatLng));
    };

    var _sortCities = function () {
        return _shuffleArray(_cities.slice())
    };

    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [v1.0]
    //@ http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    var _shuffleArray = function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
};
