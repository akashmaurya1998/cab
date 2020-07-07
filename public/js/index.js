$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var lon = position.coords.longitude;
              var lat = position.coords.latitude;
          });
      } else {
        alert("geolocation not support");

      }
  });



// $('.b-nav').load(function(){
//   $('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);
//   M.updateTextFields();
// });
