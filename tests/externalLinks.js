var pageObjects = {}
let externalLinks = require('../testAssets/testAssets')
// var media = function (browser, icon) {
//     pageObjects
//         .click(icon)
//         .verify.urlContains(icon.link)
//     pageObjects
//         .closeWindow();
// }

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
        // browser.url('https://www.nationalmssociety.org/Sign-In')
        // pageObjects
        //     .click('@signIn')
        //     .api.pause(10000)
        // pageObjects
        //     .setValue('@username', 'HB_78')
        //     .setValue('@password', 'some_pa55word')
        //     .click('@signInSubmit')
        //     .expect.element('@navText').text.to.contain('HELLO, HELEN').before(10000)
        pageObjects
        externalLinks.forEach(test => {
            externalLinks(browser, test)
        })
    }
}