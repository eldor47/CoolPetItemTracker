const webdriver = require('selenium-webdriver')
const {Builder, By, until} = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser('chrome').build();


const getData = async (id) => {
  await driver.get('http://localhost:3000/8967')
  
  var data = await x(driver)

  return data
}

function x (driver) {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      var element = await driver.findElement(webdriver.By.id('test'));
  
      data = await element.getText()
      await driver.quit();
      resolve(JSON.parse(data));
    }, 500);
  });
}

exports.getData = getData;