const { Given, Then, When, Before, After } = require('@cucumber/cucumber')
const assert = require('assert');
const webdriver = require('selenium-webdriver');

//Setup Chorme Driver

var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const { By } = require('selenium-webdriver');
var options = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

Given('o usuário está na página de login', { timeout: 50 * 1000 }, async () => {

    await driver.get("https://www.saucedemo.com/")
});

When('o usuário preenche o usuario e a senha corretamente', async () => {

    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).click()
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    
});

When('clica no botão de login', { timeout: 50 * 1000 }, async () => {

    await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()

});

Then('o usuário é redirecionado para a página inicial', async () => {
    // await driver.get("https://www.saucedemo.com/inventory.html");
    let url = await driver.getCurrentUrl();
    const expectedUrl = "https://www.saucedemo.com/inventory.html";
    const titleElement = await driver.findElement(By.className("header_secondary_container"));
    // const actualUrl = titleElement.textContent;
    

    if (url === expectedUrl) {
    console.log("O endereço da página é correto.");
    } else {
    console.log("O endereço da página é incorreto.");
    }
    
    await driver.quit();

});


