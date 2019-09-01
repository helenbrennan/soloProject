module.exports = {
    url: ('https://www.nationalmssociety.org'),
    elements: {
        signIn: {
            selector: ('//*[@id="quick-links"]/div[1]/div/a'),
            locateStrategy: 'xpath'
        },
        inYourArea: {
            selector: ('//*[@id="p_lt_zoneMastheadNavColumn1_SelectedChapterCalloutControl_userControlElem_lnkChapters"]'),
            locateStrategy: 'xpath'
        },
        donateButton: {
            selector: ('//div[@class="masthead-nav-group masthead-nav-donate"]'),
            locateStrategy: 'xpath'
        },
        searchBar: ('.search-controls'),
        // searchBar: {
        //     selector:('//*[@name="p$lt$zoneMastheadNavColumn2$GoogleSearchbox$txtSearchBox"]'),
        //     locateStrategy: 'xpath'
        // }
        content: {
            selector: ('//div[@class="content"]'),
            locateStrategy: 'xpath'
        },
        popUpBox: ('.fancybox-outer'),
        popUpBoxClose: ('.fancybox-item'),
        whatIsMS: {
            selector: ('//span[@id="What-is-MS-link"]'),
            locateStrategy: 'xpath'
        },
        whatIsMSSubNav: ('#subNavWhatisMS'),
        symptomsDx: {
            selector: ('//*[@id="Symptoms-Diagnosis-link"]'),
            locateStrategy: 'xpath'
        },
        symptomDXSubNav: ('#subNavSymptomsDiagnosis'),
        treatingMS: {
            selector: ('//*[@id="Treating-MS-link"]'),
            locateStrategy: 'xpath'
        },
        treatingMSSubNav: ('#subNavTreatingMS'),
        resourceSupport: {
            selector: ('//*[@id="Resources-Support-link"]'),
            locateStrategy: 'xpath'
        },
        resourceSubNav: ('#subNavResourcesSupport'),
        livingWell: {
            selector: ('//*[@id="Living-Well-With-MS-link"]'),
            locateStrategy: 'xpath'
        },
        livingWellSubNav: ('#subNavLivingWellWithMS'),
        research: {
            selector: ('//*[@id="Research-link"]'),
            locateStrategy: 'xpath'
        },
        researchSubNav: ('#subNavResearch'),
        getInvolved: {
            selector: ('//*[@id="Get-Involved-link]'),
            locateStrategy: 'xpath'
        },
        getInvolvedSubNav: ('#subNavGetInvolved'),
        pageOne: {
            selector: ('#router-navigation > li:nth-child(2) > div > div > div > header > h3'),
            locateStrategy: 'xpath'
        },
        pageTwo: {
            selector: ('//*[@id="router-navigation"]/li[2]'),
            locateStrategy: 'xpath'
        },
        pageThree: {
            selector: ('//*[@id="router-navigation"]/li[3]'),
            locateStrategy: 'xpath'
        },
        pageFour: {
            selector: ('//*[@id="router-navigation"]/li[4]'),
            locateStrategy: 'xpath'
        },
        pageFive: {
            selector: ('//*[@id="router-navigation"]/li[5]'),
            locateStrategy: 'xpath'
        },
        pageSix: {
            selector: ('//*[@id="router-navigation"]/li[6]'),
            locateStrategy: 'xpath'
        },
        pageSeven: {
            selector: ('//*[@id="router-navigation"]/li[7]'),
            locateStrategy: 'xpath'
        },
        pageEight: {
            selector: ('//*[@id="router-navigation"]/li[8]'),
            locateStrategy: 'xpath'
        },
        pageNine: {
            selector: ('//*[@id="router-navigation"]/li[9]'),
            locateStrategy: 'xpath'
        },
        breadcrumbsBackOne: {
            selector: ('//*[@class="CMSBreadCrumbsLink"]'),
            locateStrategy: 'xpath'
        }
    }
}