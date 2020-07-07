$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    M.updateTextFields();

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
                   
            });
      } else {
        alert("geolocation not support");

      }
  });
$('#floc').attr('href', '/currentlocation/'+lat+'/'+lon);  

// $('.b-nav').load(function(){
//   M.updateTextFields();
// });
