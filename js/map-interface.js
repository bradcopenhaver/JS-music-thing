var Mapper = require('./../js/map.js').mapModule;
var Country = require('./../js/map.js').countryModule;

$(function(){
  var newMap = new Mapper();
  newMap.initMap();

  // countryNames.forEach(function(country) {
  //   newCountry = new Country(country, countryCoordinates[countryNames.indexOf(country)]);
  //   countryObjects.push(newCountry);
  // });
});
