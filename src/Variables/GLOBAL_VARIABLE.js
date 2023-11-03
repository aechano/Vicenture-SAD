const PATH_NAME = {
    Accounts:{
        SignIn:"/sign-in",
        SignUp:{
            SignUp:"/sign-up",
            LGU:"/sign-up/lgu",
            INVESTOR:"/sign-up/investor"
        },
        list:["/sign-in", "/sign-up", "/sign-up/lgu", "/sign-up/investor"]
    },
    Home: "/",
    TheTown: {
        TheTown: "/the-town",
        About:"/the-town/about",
        MunicipalityProfile:"/the-town/profile",
        MunicipalityPrograms:"/the-town/programs",
        ElectedOfficials:"/the-town/officials",
        Offices:"/the-town/offices",
        Citizen:"/the-town/citizens-charter",
        History: "/history",
        OtherInfo: "/other-info",
    },
    Tourism: {
        Tourism: "/tourism",
        SanVicente: "/tourism/san-vicente-tourism",
        OnlineForm: "/tourism/san-vicente-tourism/online-form",
        PlacesToVisit: "/tourism/places-to-visit",
        Activities: "/tourism/activities",
    },

    Invest : {
        Invest: "/invest",
        InvestmentOpportunities: "/invest/investment-opportunities",
        ReasonsToInvest: "/invest/reasons-to-invest",
    },

    Transparency: "/transparency",
    ContactUs: "/contacts",
    Profile:"/user/profile",
    Messages:"/message",
    PrivacyPolicy:"/privacy-policy",
    ForumsAndDiscussions:"/forums",
    Survey:"/surveys",
    SampleSurvey:"/sample-survey",
    Debug:"/debug",
    Articles:"/articles",
    ArticleContent: "/articles/:articleID",
    }
const API = {
    SignUp: {
        LGU: "http://localhost:8080/accounts/lgu",
        Investor:"http://localhost:8080/accounts/investor",
        Other: "http://localhost:8080/accounts"
    },
    SignIn: "http://localhost:8080/accounts/",
}
const NO_FOOTER = [PATH_NAME.ForumsAndDiscussions, PATH_NAME.Debug, PATH_NAME.Messages+"/*",...PATH_NAME.Accounts.list];
const NO_HEADER = [PATH_NAME.Debug, ...PATH_NAME.Accounts.list];

export { PATH_NAME, API, NO_FOOTER, NO_HEADER};