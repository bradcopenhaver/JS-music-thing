var Artist = require('./../js/artist.js').artistModule;

var displayArtistInfo = function(artist) {
  $('#result-artists').prepend("<div class='col-sm-6'><div id='info'></div></div>");
    $('#info').prepend("<h1>" + artist.artistInfo.artist.name +"</h1><div class='image-div'><img src=" + artist.artistInfo.artist.image[4]['#text'] + "></div><div class='well'><p>" + artist.artistInfo.artist.bio.summary + "</p></div>").find('a').replaceWith("<a href='#' id='bio-link'>Show full bio...</a>");
    $('#bio-link').click(function() {
      console.log('clicked');
      $('#info > div > p').html(artist.artistInfo.artist.bio.content);
    });
};

var displayArtistAlbums = function(artist) {
  $('#result-artists').append("<div class='col-sm-6'><div id='albums'><h1>Albums:</h1></div></div>");
  artist.artistAlbums.topalbums.album.forEach(function(album) {
    $('#albums').append("<div class='image-div'><h5>" + album.name +"</h5><img src=" + album.image[3]['#text'] + "></div>");
  });
};
