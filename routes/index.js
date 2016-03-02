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
    //body.query attribute; properties same as name in form

    var money = req.query.fromamount;
    var convertFrom = req.query.fromcurrency;
    var convertTo = req.query.tocurrency;

    console.log("query was: convert " + money + " to " + convertTo);

    //Our conversion rates - TODO what's wrong with this? It is only current for a specific day
    var conversion = {"Pound": 1.6, "Euro": 1.1, "Dollars": 1.40};

    var conversionRate = conversion[convertTo];

    var convertedVal = conversionRate * dollars;

    res.render('result', {
        start: money,
        currency:convertTo,
        converted:convertedVal});
}

module.exports = router;
