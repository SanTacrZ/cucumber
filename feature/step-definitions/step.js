const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const { driver } = require('./world');
const { expect } = require('chai');

Given('I am on the login page', async function () {
  await driver.get('https://sso.upb.edu.co/authenticationendpoint/login.do?Name=PreLoginRequestProcessor&commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=true&passiveAuth=false&service=https%3A%2F%2Fsigaa.upb.edu.co%3A443%2Fssomanager%2Fc%2FSSB%3Fpkg%3Dtwbkwbis.P_GenMenu%3Fname%3Dbmenu.P_MainMnu&tenantDomain=carbon.super&sessionDataKey=1cb8e296-9d6d-4f08-9073-58fd7b290144&relyingParty=ssb-banpdn&type=cas&sp=ssb-banpdn&isSaaSApp=false&authenticators=BasicAuthenticator%3ALOCAL');
});

When('I enter username {string} and password {string}', async function (username, password) {
  const usernameInput = await driver.findElement(By.id('usernameUserInput'));
  const passwordInput = await driver.findElement(By.css('input[name="password"]'));

  await usernameInput.sendKeys(username);
  await passwordInput.sendKeys(password);
});

When('I click the login button', async function () {
  await sleep(1000);
  const loginButton = await driver.wait(until.elementLocated(By.xpath("//button[@class='eds-button eds-button--primary eds-button--small']")), 5000);
  await driver.wait(until.elementIsVisible(loginButton), );

  // Click the login button
  await loginButton.click();
});

// Function for explicit wait
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Then('I should be redirected to the dashboard', async function () {
  // Wait for the dashboard element to be present on the page
  await driver.wait(until.elementLocated(By.id('dashboardElement')), 10000);

  // Verify that the dashboard element is visible
  const dashboardElement = await driver.findElement(By.id('dashboardElement'));
  await driver.wait(until.elementIsVisible(dashboardElement), 10000);

  // Check the dashboard element for errors
  if (!dashboardElement.isDisplayed()) {
    throw new Error('The dashboard element is not visible');
  }
})