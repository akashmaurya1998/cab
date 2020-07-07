$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var lon = position.coords.longitude;
              var lat = position.coords.latitude;
              $('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);
          });
      } else {
        alert("geolocation not support");
      }
  });

// $('.b-nav').load(function(){
//
//   M.updateTextFields();
// });
