/// <reference path="../lib/jquery/jquery.js" />
/// <reference path="../leaflet/leaflet-src.js" />
/// <reference path="tsp.js" />

var map;
var cities;

window.onload = function () {
    // Carte Leaflet
    initMap();

    // Chargement des villes
    loadGeoJsonData()
        .done(function () {

            // Initialisation du TSP
            var tsp = new Tsp(cities);
            tsp.cpuStartAsync();
        });
}

var initMap = function () {
    // Cellenza
    var startPosition = [48.866600401120644, 2.351692198135424];
    // OpenStreetMaps
    var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    map = L.map('map', {
        center: startPosition,
        zoom: 2,
        layers: osm,
    });
};

var loadGeoJsonData = function () {
    return $.getJSON('/cities.geojson', null, function (data) {
        L.geoJson(data).addTo(map);
        cities = data.features;
    });
};
