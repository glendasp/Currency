var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', homepage);

function homepage(req, res) {
  res.render("index");
}

/* GET request , for form submit */
router.get('/convert', convert);

function convert(req, res){

    //Data send as a post request is available in the
    //body.query attribute; propories same as name in form

    var dollars = req.query.dollaramount;
    var convertTo = req.query.tocurrency;


    console.log("query was: convert " + dollars + " to " + convertTo);

    //Our conversion rates - TODO what's wrong with this?
    var conversion = { "Pound": 1.6, "Euro": 1.1};

    var conversionRate = conversion[convertTo];

    var convertedVal = conversionRate * dollars;

    res.render('result', {dollars: dollars, currency:convertTo, converted:convertedVal});

}

module.exports = router;
