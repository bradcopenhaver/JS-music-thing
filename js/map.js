function Mapper(){

}

Mapper.prototype.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.2987294, lng: 1.3879601},
    zoom: 2
  });
}

exports.mapModule = Mapper;
