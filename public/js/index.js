var lon;
var lat;
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              lon = position.coords.longitude;
              lat = position.coords.latitude;
               ('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);         
            });
      } else {
        alert("geolocation not support");

      }
  });

// $('.b-nav').load(function(){
//   M.updateTextFields();
// });
