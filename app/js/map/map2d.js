define(['leaflet'], function(leaflet) {
    var map = null;

    function Map2d(ele, point) {
        map = L.map(ele).setView([point.y, point.x], point.zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    Map2d.prototype.init = function() {

    }

    Map2d.prototype.setMouserEnter = function(fn) {
        setEvnet('mouseover', fn);
    }
    Map2d.prototype.setMouserOut = function(fn) {
        setEvnet('mouseout', fn);
    }
    Map2d.prototype.setMove = function(fn) {
        setEvnet('move', fn);
    }
    Map2d.prototype.getCenter = function() {
        return map.getCenter();
    }
    Map2d.prototype.getZoom = function() {
        return map.getZoom();
    }
    Map2d.prototype.getBounds = function() {
        return map.getBounds();
    }
    Map2d.prototype.getCurHeight = function() {
        var bound = map.getBounds();
        return map.distance(bound._northEast, bound._southWest) * 0.67201; //经验值
    }

    Map2d.prototype.panTo = function(point) {
        return map.panTo({ lon: point.x, lat: point.y }, { animate: false });
    }

    Map2d.prototype.panToMax = function(point, zoom) {
        if (!zoom) {
            map.setZoom(map.getMaxZoom());
        }
        return map.panTo({ lon: point.x, lat: point.y }, { animate: false });
    }

    Map2d.prototype.flyToRect = function(rect) {
        // define rectangle geographical bounds
        var bounds = [
            [rect.northeast.y, rect.northeast.x],
            [rect.southwest.y, rect.southwest.x]
        ];
        map.fitBounds(bounds);
    }





    function setEvnet(name, fn) {
        map.on(name, fn);
    }
    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
    return Map2d;
})