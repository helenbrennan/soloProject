var pageObjects = {}

module.exports = {
    before: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Q4H-117 ‘Near You’ events': browser => {
        pageObjects
            .click('@inYourArea')
            .waitForElementVisible('@inYourAreaSearch')
            .setValue('@inYourAreaSearch', '84010')
            .click('@inYourAreaSearchButton')
            .expect.element('@inYourAreaResults').text.to.contain('Utah-Southern Idaho').before(10000)
        pageObjects
            .clearValue('@tryAnotherSearch')
            .setValue('@tryAnotherSearch', '67846')
            .click('@tryAnotherSearchButton')
            .expect.element('@inYourAreaResults').text.to.contain('Mid America').before(10000)
    }
}