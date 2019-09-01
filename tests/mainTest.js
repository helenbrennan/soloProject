var pageObjects = {}
var clickByText = (browser, text) => {
    pageObjects
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    before: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Q4H-101 Internal links - guest users - What is MS?': browser => {
        pageObjects
            .moveToElement('@whatIsMS', 40, 40)
            .waitForElementVisible('@whatIsMSSubNav')
            .click('@whatIsMS')
            .waitForElementVisible('@popUpBox')
            .click('@popUpBoxClose')
            .expect.element('@content').text.to.contain('What Is MS?').before(10000)
        pageObjects
        // I don't know what this means
        // WebDriverWait wait1 = new WebDriverWait(driver, 10)
        // WebElement element1 = wait1.until(ExpectedConditions.elementToBeClickable(By.xpath('//*[@id="router-navigation"]/li[1]/div/div/div/a[1]))),
        // element1.click(),
        //
        // this isn't working
        // .click('@pageOne')
        // .expect.element('@content').text.to.contain('Definition of MS').before(10000)
        // pageObjects
    },
    'Q4H-102 Internal links - guest users - Symptoms & Diagnosis': browser => {
        pageObjects
        .moveToElement('@symptomsDx', 20, 20)
        .waitForElementVisible('@symptomDXSubNav')
        .click('@symptomsDx')
    }

}    
}