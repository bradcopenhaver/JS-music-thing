var TopArtists = require('./../js/topArtists.js').topArtistsModule;
var ArtistSearch = require('./../js/artist-search.js').artistSearchModule;
var Artist = require('./../js/artist.js').artistModule;

var displayTopArtists = function(artists) {
  $('#result-artists').html("");
    counter = 0;
    artists.artistData.topartists.artist.forEach(function(artist){
      counter++;
      $('#result-artists').append("<div class='topArtist'><h1>" + counter + ". " + artist.name +"</h1><div class='image-div'><img src=" + artist.image[2]['#text'] + "></div></div>");
  });
};

var displaySearchResults = function(result) {
  $('#result-artists').empty();
  $('#result-artists').append('<ul></ul>')
  result.artistData.results.artistmatches.artist.forEach(function(artist) {
    $('ul').append("<li class='search-result'><a href='#' id=" + artist.mbid + ">" + artist.name +"</a><div class='image-div'><img src=" + artist.image[2]['#text'] + "></div></li>");
  });
  $('a').click(function() {
    $('#result-artists').empty();
    console.log('clicky click')
    mbid= $(this).attr('id')
    result = new Artist();
    result.getArtist(mbid, displayArtistInfo, displayArtistAlbums)
  });
};

var displayArtistInfo = function(artist) {
  $('#result-artists').append("<div class='col-sm-6' id='info'></div>")
    $('#info').append("<h1>" + artist.artistInfo.artist.name +"</h1><div class='image-div'><img src=" + artist.artistInfo.artist.image[4]['#text'] + "></div>");
};

var displayArtistAlbums = function(artist) {
  $('#result-artists').append("<div class='col-sm-6' id='albums'></div>")
  artist.artistAlbums.topalbums.album.forEach(function(album) {
    $('#albums').append("<h1>" + album.name +"</h1><div class='image-div'><img src=" + album.image[2]['#text'] + "></div>");
  });
};

$('document').ready(function() {
  $('#topArtist').submit(function(event){
    event.preventDefault();
    country = $('#country').val();
    artists = new TopArtists();
    artists.getArtists(country, displayTopArtists);
  });

  $('#artist-search').submit(function(event){
    event.preventDefault();
    artist = $('#artist-input').val();
    result = new ArtistSearch();
    result.getArtistResults(artist, displaySearchResults);
  });
});
