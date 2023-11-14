const { Builder } = require('selenium-webdriver');

const driver = new Builder()
  .forBrowser('chrome') // Especifica el navegador que deseas utilizar, por ejemplo, 'chrome', 'firefox', etc.
  .build();

module.exports = {
  driver
};
