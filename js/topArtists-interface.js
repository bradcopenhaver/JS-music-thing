var TopArtists = require('./../js/topArtists.js').topArtistsModule;

var displayTopArtists = function(artists) {
  $('#result-artists').html("");
    counter = 0;
    artists.artistData.topartists.artist.forEach(function(artist){
      counter++;
      $('#result-artists').append("<div class='topArtist'><h1>" + counter + ". " + artist.name +"</h1><div class='image-div'><img src=" + artist.image[2]['#text'] + "></div></div>");
  });
};

$('document').ready(function() {
  $('#topArtist').submit(function(event){
    event.preventDefault();
    country = $('#country').val();
    artists = new TopArtists();
    artists.getArtists(country, displayTopArtists);
  });
});
