/// <reference path="../lib/jquery/jquery.js" />
/// <reference path="../leaflet/leaflet-src.js" />

var map;

window.onload = function () {
    initMap();
    loadGeoJsonData();
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
}

var loadGeoJsonData = function () {
    $.getJSON('/cities.json', null, function (data) {
        L.geoJson(data).addTo(map);
    });
}
