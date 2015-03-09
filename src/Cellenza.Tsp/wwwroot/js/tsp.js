/// <reference path="cpu.js" />

var Tsp = function (cities) {
    var cpu = new Cpu();

    this.getStartingCity = function () {
        return cities[0];
    };

    this.cpuStartAsync = function () {
        setTimeout(function () {
            var distance = cpu.resolve(cities, start);
        }, 100);
    };

    var start = this.getStartingCity();
};
