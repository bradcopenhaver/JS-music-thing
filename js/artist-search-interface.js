var ArtistSearch = require('./../js/artist-search.js').artistSearchModule;

var displaySearchResults = function(result) {
  $('#result-artists').empty();
  $('#result-artists').append('<ul></ul>');
  result.artistData.results.artistmatches.artist.forEach(function(artist) {
    $('ul').append("<li class='search-result'><a href='#' id=" + artist.mbid + ">" + artist.name +"</a><div class='image-div'><img src=" + artist.image[2]['#text'] + "></div></li>");
  });
  $('a').click(function() {
    $('#result-artists').empty();
    console.log('clicky click');
    mbid= $(this).attr('id');
    result = new Artist();
    result.getArtist(mbid, displayArtistInfo, displayArtistAlbums);
  });
};

$(function() {
  $('#artist-search').submit(function(event){
    event.preventDefault();
    artist = $('#artist-input').val();
    result = new ArtistSearch();
    result.getArtistResults(artist, displaySearchResults);
  });


});
