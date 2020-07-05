$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var lon = position.coords.longitude;
              var lat = position.coords.latitude;
                var pos = {
                  latitude: lat,
                  longitude: lon
                };
                $.post('/', {latitude:lat, longitude: lon});
                $("#floc").on('click', function(){
                  location.reload();
                });
          });
      }
  });
