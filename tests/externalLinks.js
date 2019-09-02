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
    'External links - registered users': browser => {

    }
}