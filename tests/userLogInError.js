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
    'Q4H-120 Incorrect Username': browser => {
        pageObjects
            .click('@signIn')
            .api.pause(10000)
        pageObjects
            .setValue('@username', 'HB_79')
            .setValue('@password', 'some_pa55word')
            .click('@signInSubmit')
            .expect.element('@signInError').text.to.contain('Incorrect user name or password.').before(10000)
        //    'Q4H-121 Incorrect password': browser => {
        pageObjects
            .clearValue('@username')
            .setValue('@username', 'HB_78')
            .setValue('@password', 'some_password')
            .click('@signInSubmit')
            .expect.element('@signInError').text.to.contain('Incorrect user name or password.').before(10000)
        pageObjects
            // checking to make sure user can successfully log in
            .clearValue('@username')
            .setValue('@username', 'HB_78')
            .setValue('@password', 'some_pa55word')
            .click('@signInSubmit')
            .expect.element('@navText').text.to.contain('HELLO, HELEN').before(10000)
    }
}
