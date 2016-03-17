var express = require("express");
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
    console.log("ConvertFrom: "+convertFrom+" To: "+convertTo);
    
    //Our conversion rates -
    var conversion = {"GBP": 1, "EUR": 2, "USD": 1};
    var baseUSD = money / conversion[convertFrom];
    console.log(baseUSD);
    var conversionRate = conversion[convertTo];
    console.log(conversionRate);
    var convertedVal = conversionRate * baseUSD;
    console.log(convertedVal);

    res.render('result', {
        startmoney: money,
        startcurrency: convertFrom,
        currency: convertTo,
        converted: convertedVal.toFixed(2)});
    }

module.exports = router;
