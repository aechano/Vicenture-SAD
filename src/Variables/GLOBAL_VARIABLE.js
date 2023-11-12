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
    AdminPages: {
        AdminAnalytics:"/analytics",
        AdminHomepage:"/adminHomepage",
        AdminAboutSV:"/adminAboutSV",
        AdminMunicipalityProfile:"/adminMunicipalityProfile",
        AdminElectedOfficial:"/adminElectedOfficial",
        AdminCharter:"/adminCharter",
        AdminToVisit:"/adminToVisit",
        AdminActivities:"/adminActivities",
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
        PlacesToVisitPost: "/tourism/places-to-visit-post", // Try only
        Activities: "/tourism/activities",
        Content: "/tourism/places-to-visit/content",
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

    AddOffices: "/the-town/offices/add-offices"

    }
const API = {
    SignUp: "http://localhost:8080/api/v1/auth/signup",
    SignIn: "http://localhost:8080/api/v1/auth/signin",    
}
const USER_TYPES = {
    Guest: "GUEST",
    Citizen: "CITIZEN",
    Tourist: "TOURIST",
    Investor: "INVESTOR",
    LguSV: "LGU_SV",
    Admin: "ADMIN",
    General: ["CITIZEN", "TOURIST", "INVESTOR", "LGU_SV", "ADMIN"]
}
const NO_FOOTER = [PATH_NAME.ForumsAndDiscussions, PATH_NAME.Debug, PATH_NAME.Messages+"/*",...PATH_NAME.Accounts.list];
const NO_HEADER = [PATH_NAME.Debug, ...PATH_NAME.Accounts.list];

export { PATH_NAME, API, NO_FOOTER, NO_HEADER, USER_TYPES};