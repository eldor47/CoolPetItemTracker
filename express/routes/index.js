var express = require('express');
var router = express.Router();

const webdriver = require('selenium-webdriver')
const {Builder, By, until} = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser('chrome').build();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var petTokenId = req.query.petTokenId

  console.log(petTokenId)

  try{
    var data = await getData(petTokenId)
    //console.log(data)
    res.send(data)
  } catch(e) {
    console.log(e)
    res.status(500).send({msg: "Error"})
  }

});

const getData = async (id) => {
  await driver.get('http://localhost:3000/' + id)
  
  var data = await x(driver)

  return data
}

function x (driver) {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      var element = await driver.findElement(webdriver.By.id('test'));
  
      data = await element.getText()
      resolve(JSON.parse(data));
    }, 500);
  });
}


module.exports = router;
