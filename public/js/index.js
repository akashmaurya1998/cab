$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            $('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);  
              
            });
      } else {
        alert("geolocation not support");

      }
  });
// $('.b-nav').load(function(){
//   M.updateTextFields();
// });
