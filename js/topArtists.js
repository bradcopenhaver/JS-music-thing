var apiKey = require('./../.env').apiKey;

function TopArtists(){
  var artistData;
}

TopArtists.prototype.sortByListeners = function () {
  compareFunction = function(a, b) {
    return a.listeners - b.listeners;
  };
  this.artistData.topartists.artist.sort(compareFunction).reverse();
};

TopArtists.prototype.getArtists = function (country, displayFunction) {
  _this = this;
  $.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + country + '&api_key=' + apiKey + '&format=json').then(function(response) {
    _this.artistData = response;
    displayFunction(_this);
  }).fail(function(error) {
    $('.error').text("Invalid country. Try another.");
  });
};


exports.topArtistsModule = TopArtists;
