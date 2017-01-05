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

  function findColdplay(artist){
      console.log(artist.name);
    return artist.name === "Coldplay";
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.2987294, lng: 1.3879601},
    zoom: 2
  });
  // countryObjects = [];


  for(i=0; i< countryNames.length; i++){
    $.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + countryNames[i] + '&api_key=' + apiKey + '&format=json').done(function(response) {
      position = response.topartists.artist.indexOf(response.topartists.artist.find(findColdplay));
      countryPosition.push(position +1);
    });
  }

  for (var i = 0; i < countryNames.length; i++) {
    var coords = countryCoordinates[i];
    var latLng = new google.maps.LatLng(coords[0],coords[1]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
};

exports.mapModule = Mapper;
exports.countryModule = Country;
