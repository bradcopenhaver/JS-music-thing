var TopArtists = require('./../js/topArtists.js').topArtistsModule;

var displayTopArtists = function(artists) {
  $('#result-artists').html("");
    artists.artistData.topartists.artist.forEach(function(artist){
    $('#result-artists').append("<div><h1>" + artist.name +"</h1><img src=" + artist.image[2]['#text'] + "></div>");
  });
}

$('document').ready(function() {
  $('#topArtist').submit(function(event){
    event.preventDefault();
    country = $('#country').val();
    artists = new TopArtists();
    artists.getArtists(country, displayTopArtists);
  });
});
