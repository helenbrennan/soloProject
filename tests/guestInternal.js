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
            .moveToElement('@whatIsMS', 20, 20)
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
        .expect.element('@content').text.to.contain('Symptoms & Diagnosis').before(8000)
    },
    'Q4H-103 Internal links - guest users - Treating MS': browser => {
        pageObjects
        .moveToElement('@treatingMS', 20, 20)
        .waitForElementVisible('@treatingMSSubNav')
        .click('@treatingMS')
        .expect.element('@content').text.to.contain('Treating MS').before(8000)
    },
    'Q4H-104 Internal links - guest users - Resources & Support': browser => {
        pageObjects
        .moveToElement('@resourceSupport', 20, 20)
        .waitForElementVisible('@resourceSubNav')
        .click('@resourceSupport')
        .expect.element('@content').text.to.contain('Resources & Support').before(8000)
    },
    'Q4H-105 Internal links - guest users - Living Well with MS': browser => {
        pageObjects
        .moveToElement('@livingWell', 20, 20)
        .waitForElementVisible('@livingWellSubNav')
        .click('@livingWell')
        .expect.element('@content').text.to.contain('Living Well with MS').before(8000)
    },
    'Q4H-106 Internal links - guest users - Research': browser => {
        pageObjects
        .moveToElement('@research', 20, 20)
        .waitForElementVisible('@researchSubNav')
        .click('@research')
        .expect.element('@content').text.to.contain('Research').before(8000)
    },
    'Q4H-107 Internal links - guest users - Get Involved': browser => {
        pageObjects
        .moveToElement('@getInvolved', 20, 20)
        .waitForElementVisible('@getInvolvedSubNav')
        .click('@getInvolved')
        .expect.element('@content').text.to.contain('Get Involved').before(8000)
    }
}    
