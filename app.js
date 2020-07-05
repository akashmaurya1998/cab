require('dotenv').config();
////////////////////////////////////////////// Modules////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const https = require ('https');
const ejs = require('ejs');
const GoogleMapsAPI = require('googlemaps');
var publicConfig = {
  key: process.env.GOOGLE_MAPS_API,
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
};

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');

var gmAPI = new GoogleMapsAPI(publicConfig);

var formattedAddress="";
// ////////////////////////////////////////////ROUTES////////////////////////////////////

app.route('/').get(function(req, res){
  console.log(formattedAddress);
  res.render('index', {formatted_Address: formattedAddress});
})
.post(function(req, res){

  var reverseGeocodeParams = {
  "latlng":        req.body.latitude +","+ req.body.longitude,
  "result_type":   "street_address",
  "language":      "en",
  "location_type": "ROOFTOP"
};

gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result){
    if (err) {
      console.log(err);
    } else {
      formattedAddress = JSON.stringify(result.results[0].formatted_address);
    }
    res.redirect(req.originUrl);
  });
});

app.route('/check').post(function(req, res){
  res.send("done");
});

// ///////////////////////////////////////////////Port/////////////////////////////
const port = process.env.PORT;
app.listen(port || 3000, function(req, res){
  console.log("server started at 3000");
});
