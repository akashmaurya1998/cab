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
// ////////////////////////////////////////////ROUTES////////////////////////////////////

app.route('/').get(function(req, res){
  res.render('index');
})
.post(function(req, res){

});

app.route('/currentlocation/:lat/:lon').get(function(req, res){
  var reverseGeocodeParams = {
  "latlng":        req.params.lat +","+ req.params.lon,
  "result_type":   "street_address",
  "language":      "en",
  "location_type": "ROOFTOP"
};

gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result){
    if (err) {
      res.render('error')
    } 
        res.send(result);
      // res.render('currentlocation', {position: JSON.stringify(result.results[0].formatted_address)});
  });
});

// ///////////////////////////////////////////////Port/////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port, function(req, res){
  console.log("server started at 3000");
});
