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
    'Q4H-100 Existing user log in': browser => {
        browser.url('https://www.nationalmssociety.org/Sign-In')
        pageObjects
            // .click('@signIn')
            // previous message results in error - element not interactable, same issue with clicking into the seperate pages on each portion
            .setValue('@username', 'HB_78')
            .setValue('@password', 'some_pa55word')
            .click('@signInSubmit')
        // .expect.element('@navText').text.to.contain('Hello, Helen').before(10000)
    },
    'Q4H-108 Internal links - registered users - What is MS?': browser => {
        pageObjects
            .moveToElement('@whatIsMS', 20, 20)
            .waitForElementPresent('@whatIsMSSubNav')
            .click('@whatIsMS')
            .expect.element('@content').text.to.contain('What Is MS?').before(10000)
        pageObjects
            .click('@pageOne')
            .expect.element('@content').text.to.contain('Definition of MS').before(10000)
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageTwo')
            .expect.element('@content').text.to.contain('What Causes MS?')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageThree')
            .expect.element('@content').text.to.contain('Who Gets MS?')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFour')
            .expect.element('@content').text.to.contain('Multiple Sclerosis FAQs')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFive')
            .expect.element('@content').text.to.contain('Types of MS')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSix')
            .expect.element('@content').text.to.contain('Related Conditions')
    },
    'Q4H-109 Internal links - registered users - Symptoms & Diagnosis': browser => {
        pageObjects
            .moveToElement('@symptomsDx', 20, 20)
            .waitForElementVisible('@symptomDXSubNav')
            .click('@symptomsDx')
            .expect.element('@content').text.to.contain('Symptoms & Diagnosis').before(8000)
        pageObjects
            .click('@pageOne')
            .expect.element('@content').text.to.contain('MS Symptoms').before(10000)
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageTwo')
            .expect.element('@content').text.to.contain('Diagnosing MS')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageThree')
            .expect.element('@content').text.to.contain('Magnetic Resonance Imaging')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFour')
            .expect.element('@content').text.to.contain('Cerebrospinal Fluid')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFive')
            .expect.element('@content').text.to.contain('Possible MS')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSix')
            .expect.element('@content').text.to.contain('Clinically Isolated Syndrome')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSeven')
            .expect.element('@content').text.to.contain('Newly Diagnosed')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageEight')
            .expect.element('@content').text.to.contain('Other Conditions to Rule Out')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageNine')
            .expect.element('@content').text.to.contain('Professional Resource Center')

    },
    'Q4H-110 Internal links - registered users - Treating MS': browser => {
        pageObjects
            .moveToElement('@treatingMS', 20, 20)
            .waitForElementVisible('@treatingMSSubNav')
            .click('@treatingMS')
            .expect.element('@content').text.to.contain('Treating MS').before(8000)
        pageObjects
            .click('@pageOne')
            .expect.element('@content').text.to.contain('Comprehensive Care').before(10000)
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageTwo')
            .expect.element('@doctorsAndResourcesContent').text.to.contain('Find Doctors & Resources')
        pageObjects
            .click('@breadCrumbsHome')
            .moveToElement('@treatingMS', 20, 20)
            .waitForElementVisible('@treatingMSSubNav')
            .click('@treatingMS')
            .click('@pageThree')
            .expect.element('@content').text.to.contain('Medications')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFour')
            .expect.element('@content').text.to.contain('Managing Relapses')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFive')
            .expect.element('@content').text.to.contain('Rehabilitation')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSix')
            .expect.element('@content').text.to.contain('Complementary & Alternative Medicines')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSeven')
            .expect.element('@content').text.to.contain('Professional Resource Center')
    },
    'Q4H-111 Internal links - registered users - Resources & Support': browser => {
        pageObjects
            .moveToElement('@resourceSupport', 20, 20)
            .waitForElementVisible('@resourceSubNav')
            .click('@resourceSupport')
            .expect.element('@content').text.to.contain('Resources & Support').before(8000)
        pageObjects
            .click('@pageOne')
            .expect.element('@content').text.to.contain('Library & Education Programs').before(10000)
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageTwo')
            .expect.element('@content').text.to.contain('Find Support')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageThree')
            .expect.element('@content').text.to.contain('Advanced Care Needs')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFour')
            .expect.element('@content').text.to.contain('Resources for Specific Populations')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFive')
            .expect.element('@nearYouContent').text.to.contain('Near You')
        pageObjects
            .moveToElement('@resourceSupport', 20, 20)
            .waitForElementVisible('@resourceSubNav')
            .click('@resourceSupport')
            .click('@pageSix')
            .expect.element('@content').text.to.contain('Calendar of Programs and Events')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSeven')
            .expect.element('@doctorsAndResourcesContent').text.to.contain('Find Doctors & Resources')
    },
    'Q4H-112 Internal links - registered users - Living Well with MS': browser => {
        pageObjects
            .moveToElement('@livingWell', 20, 20)
            .waitForElementVisible('@livingWellSubNav')
            .click('@livingWell')
            .expect.element('@content').text.to.contain('Living Well with MS').before(8000)
        pageObjects
            .click('@pageOne')
            .expect.element('@content').text.to.contain('Diet, Exercise & Healthy Behaviors').before(10000)
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageTwo')
            .expect.element('@content').text.to.contain('Emotional Well-Being')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageThree')
            .expect.element('@content').text.to.contain('Spiritual Well-Being')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFour')
            .expect.element('@content').text.to.contain('Cognitive Health')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageFive')
            .expect.element('@content').text.to.contain('Work, Home & Leisure')
        pageObjects
            .click('@breadcrumbsBackOne')
            .click('@pageSix')
            .expect.element('@content').text.to.contain('Relationships')
    },
    'Q4H-113 Internal links - registered users - Research': browser => {
        pageObjects
            .moveToElement('@research', 20, 20)
            .waitForElementVisible('@researchSubNav')
            .click('@research')
            .expect.element('@content').text.to.contain('Research').before(8000)
        pageObjects
            .click('@researchStop')
            .expect.element('@content').text.to.contain('Stopping MS In Its Tracks').before(10000)
        pageObjects
            .moveToElement('@research', 20, 20)
            .waitForElementVisible('@researchSubNav')
            .click('@research')
            .click('@researchRestore')
            .expect.element('@content').text.to.contain("Restoring What's Been Lost")
        pageObjects
            .moveToElement('@research', 20, 20)
            .waitForElementVisible('@researchSubNav')
            .click('@research')
            .click('@researchEnd')
            .expect.element('@content').text.to.contain('Ending the Disease Forever')

    },
    'Q4H-114 Internal links - registered users - Get Involved': browser => {
        pageObjects
            .moveToElement('@getInvolved', 20, 20)
            .waitForElementVisible('@getInvolvedSubNav')
            .click('@getInvolved')
            .expect.element('@breadCrumbsCurrent').text.to.contain('GET INVOLVED').before(8000)

    }
}    
