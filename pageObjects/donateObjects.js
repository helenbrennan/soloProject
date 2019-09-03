module.exports = {
    url: ('https://www.nationalmssociety.org'),
    elements: {
    donateButton: {
        selector: ('//*[@id="quick-links"]/div[3]/div/a'),
        locateStrategy: 'xpath'
    },
    donateContent: {
        selector: ('//*[@class="content"]/h1'),
        locateStrategy: 'xpath'
    },
    donateNow: {
        selector: ('//*[@id="content-body"]/div[2]/div[2]/article[2]/div/p/a/span'),
        locateStrategy: 'xpath'
    },
    donateFormHeader: {
        selector: ('//*[@class="section-header-container"]'[1]),
        locateStrategy: 'xpath'
    },
    donationAmount: {
        selector: ('//*[@id="level_standardexpanded177665"]'),
        locateStrategy: 'xpath'
    },
    firstName: ('#billing_first_namename'),
    lastName: ('#billing_last_namename'),
    billingStreetOne: ('#billing_addr_street1name'),
    billingCity: ('#billing_addr_cityname'),
    billingState: {
        selector: ('//*[@id="billing_addr_state"]'),
        locateStrategy: 'xpath'
    },
    billingZip: ('#billing_addr_zipname'),
    donorEmail: ('#donor_email_addressname'),
    connectionToMS: {
        selector: ('//*[@id="connection_to_ms_dropdown"]'),
        locateStrategy: 'xpath'
    },
    creditCardNumber: ('#responsive_payment_typecc_numbername'),
    cvvNumber: ('#responsive_payment_typecc_cvvname'),
    completeDonationButton: {
        selector: ('//*[@class="step-button action-button finish-step"]'),
        locateStrategy: 'xpath'
    },
    formError: {
        selector: ('//*[@id="ProcessForm"]/div/div[1]/div/span[2]'),
        locateStrategy: 'xpath'
    }

}
}