var apiKey = require('./../.env').apiKey;

function Mapper(){
  var countries = [];
}

function Country(nameInput, coords, listenersInput) {
  this.coordinates = coords;
  this.name = nameInput;
  this.listeners = listenersInput;
}

Mapper.prototype.initMap = function() {

  countryNames = ['spain', 'australia', 'argentina'];
  countryCoordinates = [[40.4, -3.68], [-35.27, 149.13], [-34.58, -58.7]];
  countryPosition = [];
  countryObjects = [];

  function findColdplay(artist){
    console.log(artist.name);
    return artist.name === "Coldplay";
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.2987294, lng: 1.3879601},
    zoom: 2
  });

  var ind = 0;

  for(i=0; i< countryNames.length; i++){
    $.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + countryNames[i] + '&api_key=' + apiKey + '&format=json').then(function(response) {
      position = 1 + response.topartists.artist.indexOf(response.topartists.artist.find(findColdplay));
      countryPosition.push(position);
      console.log(position);

      newCountry = new Country(countryNames[ind], countryCoordinates[ind], position);
      var coords = countryCoordinates[ind];
      var latLng = new google.maps.LatLng(coords[0],coords[1]);
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: latLng,
        radius: 1000000 * Math.pow(position, -1)
      });
      ind++;
    });
  }
};

exports.mapModule = Mapper;
exports.countryModule = Country;
