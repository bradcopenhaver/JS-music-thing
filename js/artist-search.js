var apiKey = require('./../.env').apiKey;

function ArtistSearch() {
  var artistData;
}

ArtistSearch.prototype.getArtistResults = function (name, displayFunction) {
  _this = this;
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + name + '&api_key=' + apiKey + '&format=json').then(function(response) {
    _this.artistData = response;
    displayFunction(_this);
  }).fail(function(error) {
    $('.error').text("Invalid entry. Try another.");
  });
};


exports.artistSearchModule = ArtistSearch;
