$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();
  });

if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var lon = position.coords.longitude;
              var lat = position.coords.latitude;
              $('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);

          });
      } else {
        alert("geolocation not support");
      }

      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(23.63936, 68.14712),
        new google.maps.LatLng(28.20453, 97.34466));

      var input = document.getElementById('icon_location');
      var input2 = document.getElementById('icon_location_drop');
      var options = {
        bounds: defaultBounds,
        types: ['establishment']
      };

      autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete = new google.maps.places.Autocomplete(input2, options);

// $('.b-nav').load(function(){
//
//   M.updateTextFields();
// });
