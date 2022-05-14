const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/firefox');
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const geckoDriverPath = '/home/sarah/Documentos/hiringcodersgit/fase 1 - tests/tdd_bdd_jasmine_cucumber/driver/geckodriver';
const serviceBuilder = new ServiceBuilder(geckoDriverPath);

const driver = new Builder().forBrowser('firefox').setFirefoxService(serviceBuilder).build();

Given('I\'m have {int} clients in my database', function (int) {
    console.log("inseri os dados na base");
});

       
When('I access the home webpage', async function () {
    await driver.get('http://localhost:3000');
    await driver.sleep(1000);
});

  
Then('see the list of {int} itens', async function (int) {
    let qtd = await driver.findElements(By.css('tbody tr'));
    assert.equal(qtd.length, int);
    driver.quit();
});
