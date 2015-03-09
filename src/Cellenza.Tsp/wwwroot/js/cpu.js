// Algorithme de résolution du problème
var Cpu = function () {
    var _cities;

    this.resolve = function (cities, start) {
        _cities = cities;
        var distance = 0;
        var last = L.GeoJSON.coordsToLatLng(start.geometry.coordinates);

        var sortedCities = _sortCities();

        sortedCities.forEach(function (city) {
            console.log("CPU -> " + city.properties.name);
            var latLng = L.GeoJSON.coordsToLatLng(city.geometry.coordinates);
            distance += Math.round(latLng.distanceTo(last));
            last = latLng;
        });

        console.log("CPU distance = " + distance);

        return distance;
    };

    var _sortCities = function () {
        return _shuffleArray(_cities.slice())
    }

    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [v1.0]
    //@ http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    var _shuffleArray = function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
};
