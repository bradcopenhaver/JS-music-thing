var apiKey = require('./../.env').apiKey;

function Artist() {
  var artistInfo;
  var artistAlbums;
}

Artist.prototype.getArtist = function (mbid, displayInfoFunction, displayAlbumsFunction) {
  _this = this;
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=' + mbid + '&api_key=' + apiKey + '&format=json').then(function(response) {
    _this.artistAlbums = response;
    console.log(response);
    displayAlbumsFunction(_this);
  }, function(response) {
    console.log(response);
    $('.error').text(response.message);
  });
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=' + mbid + '&api_key=' + apiKey + '&format=json').then(function(response) {
    _this.artistInfo = response;
    console.log(response);
    displayInfoFunction(_this);
  }, function(error) {
    console.log(error);
    $('.error').text(error.message);
  });
};


exports.artistModule = Artist;
