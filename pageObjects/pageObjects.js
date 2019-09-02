module.exports = {
    url: ('https://www.nationalmssociety.org'),
    elements: {
        signIn: {
            selector: ('//*[@id="quick-links"]/div[1]/div/a/span[2]'),
            locateStrategy: 'xpath'
        },
        username: {
            selector: ("//input[@id='p_lt_zoneContent_pageplaceholder_p_lt_ctl02_SignInUsercontrol_userControlElem_txtUserName']"),
            locateStrategy: 'xpath'
        },
        password: ('#p_lt_zoneContent_pageplaceholder_p_lt_ctl02_SignInUsercontrol_userControlElem_txtPassword'),
        signInSubmit: ('#p_lt_zoneContent_pageplaceholder_p_lt_ctl02_SignInUsercontrol_userControlElem_btnLogin'),
        navText: {
            selector: ('//*[@id="quick-links"]/div[1]/div[1]/span/span[2]'),
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
        doctorsAndResourcesContent: {
            selector: ('//*[@id="content"]/section[1]/div/header/h1'),
            locateStrategy: 'xpath'
        },
        getInvolvedContent: {
            selector: ('//*[@id="get-involved-slider"]/li[2]/div/div/h2'),
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
            selector: ('//*[@id="Get-Involved-link"]'),
            locateStrategy: 'xpath'
        },
        getInvolvedSubNav: ('#subNavGetInvolved'),
        pageOne: ('#router-navigation > li:nth-child(1) > div > div > div > header > h3'),
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
        breadCrumbsCurrent: ('.CMSBreadCrumbsCurrentItem'),
        breadcrumbsBackOne: {
            selector: ('//*[@class="CMSBreadCrumbsLink"]'),
            locateStrategy: 'xpath'
        },
        breadcrumbsBackTwo: {
            selector: ('//*[@class="CMSBreadCrumbsLink"]'[1]),
            locateStrategy: 'xpath'
        },
        breadCrumbsHome: {
            selector: ('//*[@class="CMSBreadCrumbsLink home"]'),
            locateStrategy: 'xpath'
        },
        researchStop: {
            selector: ('//*[@id="content"]/section[1]/div/div[1]/article[1]/div/p/a'),
            locateStrategy: 'xpath'
        },
        researchRestore: {
            selector: ('//*[@id="content"]/section[1]/div/div[1]/article[2]/div/p/a'),
            locateStrategy: 'xpath'
        },
        researchEnd: {
            selector: ('//*[@id="content"]/section[1]/div/div[1]/article[3]/div/p/a'),
            locateStrategy: 'xpath'
        },
        nearYouContent: {
            selector: ('//*[@id="content"]/section[1]/div/div[2]/h1'),
            locateStrategy: 'xpath'
        }
    }
}