(function () {
    'use strict';

    angular.module('map.service', [])
        .factory('mapService', mapService);

    mapService.$inject = ['$http', 'locationService'];

    function mapService($http, locationService) {
        var service = {
            drawProperty: drawProperty,
            drawHomeMarker: drawHomeMarker,
            drawMarkers: drawMarkers,
            locationChoices: locationChoices
        };
        return service;

        function locationChoices(map){
            return locationService.getAllLocations().then(function (results) { return results; console.log(results); });
        }

        function drawProperty(map) {
            var propertyCoords = [
            new google.maps.LatLng(35.982222, -93.485278),
            new google.maps.LatLng(35.993056, -93.485),
            new google.maps.LatLng(35.993056, -93.480556),
            //north property
            new google.maps.LatLng(35.993056, -93.480278),
            new google.maps.LatLng(35.996667, -93.480278),
            new google.maps.LatLng(35.996667, -93.475556),
            new google.maps.LatLng(35.993056, -93.475833),
            //end of north property
            new google.maps.LatLng(35.993056, -93.480278),
            new google.maps.LatLng(35.982222, -93.480833),
            new google.maps.LatLng(35.982222, -93.480833)
                    ];
                    return new google.maps.Polygon({
                        map: map,
                        paths: propertyCoords,
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.9,
                        strokeWeight: 2,
                    });
        }

        function drawHomeMarker(map) {
            //add the base marker
            var drag = new google.maps.Marker({
                position: new google.maps.LatLng(35.98662486524184, -93.48233503704836),
                map: map,
                title: "Draggable Marker",
                draggable: true
            });
            var infowindow = CreateDragInfoBox($http, drag);

            google.maps.event.addListener(drag, 'click', function () {
                infowindow.open(map, drag);
            });

            google.maps.event.addListener(drag, 'dragend', function () {
                $('#infoLat').html(drag.getPosition().lat());
                $('#infoLong').html(drag.getPosition().lng());
                map.dragmarker = drag;
            });
            return drag;
        }

            //return new google.maps.Marker({
            //    position: new google.maps.LatLng(35.98662486524184, -93.48233503704836),
            //    map: map,
            //    title: "Draggable Marker",
            //    draggable: true
            //});
  
        function drawMarkers(map) {
            return locationService.getAllLocations().then(function (results) {
                var markers = [];
                var markerLocation;
                var marker;
                console.log('drawMarkers');
                for (var i = 0; i < results.length; i++) {
                    markerLocation = results[i];
                    console.log(markerLocation);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(markerLocation.latitude, markerLocation.longitude),
                        map: map,
                        //icon: GetIconPath(markerLocation.icon),
                        title: markerLocation.description,
                        draggable: false
                    });
                    if (markerLocation.icon == '../Content/camera-icon.png') {
                        google.maps.event.addListener(marker, "click", ViewLocationPictures(markerLocation.name));
                    }
                    markers.push(marker);
                };
                return markers;
            });
        }
    }

function MakePictureInfoWindowEvent(map, infowindow, marker) {
    return function () {
        infowindow.open(map, marker);
    };
}

function ViewLocationPictures(viewLocation) {
    return function () {
        var url = '#/pictures/location/' + viewLocation;
        window.location.href = url;
    };
}

function GetIconPath(value) {
    return value.replace('../C', 'c');
}

function CreateDragInfoBox(http, drag) {
    var contentString = '<div id="infoBox" class="infobox">'
        + '<p id="infoLat">0</p>'
        + '<p id="infoLong">0</p>'
        + '<p id="infoDesc">Desc: <input type="text" id="txtDesc"/></p>'
        + '<input type="button" id="btnAddCamera" value="Add Camera" />'
        + '<input type="button" id="btnAddStand" value="Add Stand" />'
        + '</div>'

    ;
    $(document).on('click', '#btnAddCamera', function () {
        AddLocation(http, drag, 'camera', $('#txtDesc').val());
    });
    $(document).on('click', '#btnAddStand', function () {
        AddLocation(http, drag, 'stand', $('#txtDesc').val());
    });
    return new google.maps.InfoWindow({ content: contentString });
}

function AddLocation(http, marker, icon, desc) {
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    switch (icon) {
        case 'camera':
            icon = '../Content/camera-icon.png';
            break;
        case 'stand':
            icon = '../Content/icon-hunting.png';
            break;
        default:
            break;
    }
    var addLocation = { Latitude: lat, Longitude: lng, Description: desc, Icon: icon };
    return http.post('api/location', addLocation)
        .then(function (response) { return response; })
        .catch(function (error) { console.write('XHR failed for location add.')})
}

})();