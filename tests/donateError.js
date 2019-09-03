var donateObjects = {}

var donation = (donateObjects, firstName, lastName, billingStreetOne, billingCity, billingState, billingZip, donorEmail, connectionToMs, creditCardNumber, cvvNumber) => {
    donateObjects
        .click('@donateButton')
        .expect.element('@donateContent').text.to.contain('Donate').before(8000)
    donateObjects
        .click('@donateNow')
        .api.pause(8000)
    donateObjects
        .click('@donationAmount')
        .setValue('@firstName', firstName)
        .setValue('@lastName', lastName)
        .setValue('@billingStreetOne', billingStreetOne)
        .setValue('@billingCity', billingCity)
        .setValue('@billingState', billingState)
        .setValue('@billingZip', billingZip)
        .setValue('@donorEmail', donorEmail)
        .setValue('@connectionToMS', connectionToMs)
        .setValue('@creditCardNumber', creditCardNumber)
        .setValue('@cvvNumber', cvvNumber)
        .api.pause(50000) // pause to manuall enter CAPTCHA data
    donateObjects
        .click('@completeDonationButton')
        .expect.element('@formError').text.to.contain('There was a problem processing your request.')
}
module.exports = {
    before: browser => {
        donateObjects = browser.page.donateObjects()
        donateObjects.navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Q4H-118 Donation link should return error when invalid information entered': browser => {
        donation(donateObjects, 
            'Helen', // firstName
            'Brennan', // lastName
            '123 Any St', // billingStreetOne
            'Salt Lake City', // billingCity
            'UT', // billingState
            '84104', // billingZip
            'helenbrennan78@gmail,com', // donorEmail
            'Other', // connectionToMS
            '4415 2222 3333 4444', // creditCardNumber
            '123' // cvvNumber 
            )
    }
}