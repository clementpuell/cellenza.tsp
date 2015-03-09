/// <reference path="../leaflet/leaflet-src.js" />
/// <reference path="cpu.js" />

var Tsp = function (cities) {
    this.getStartingCity = function () {
        return cities[0];
    };

    this.cpuStartAsync = function () {
        setTimeout(function () {
            var distance = _cpu.resolve(cities, _start);
        }, 100);
    };

    var _highlightStartingCity = function () {
        var marker = _start.layer;
        marker.setIcon(new _StartingCityIcon());
    };

    var _StartingCityIcon = L.Icon.extend({
        options: {
            iconUrl: "/images/starting-city-icon.png"
        }
    });

    // Constructeur

    var _cpu = new Cpu();
    var _start = this.getStartingCity();

    _highlightStartingCity();
};
