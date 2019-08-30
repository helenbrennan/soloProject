var pageObjects = {}
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },
    
}