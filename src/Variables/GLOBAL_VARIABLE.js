const PATH_NAME = {
    Accounts: {
        SignIn: "/sign-in",
        SignUp: {
            SignUp: "/sign-up",
            LGU: "/sign-up/lgu",
            INVESTOR: "/sign-up/investor"
        },
        list: ["/sign-in", "/sign-up", "/sign-up/lgu", "/sign-up/investor"]
    },
    AdminPages:{
        Admin: "/admin",
        Analytics: "analytics",
        TheTown: "the-town",
        MunicipalityProfile: "municipality-profile",
        ElectedOfficials: "elected-officials",
        Offices:"offices",
        CitizensCharter:"citizen-charter",
        Tourism:"tourism",
        PlacesToVisit:"places-to-visit",
        Activities:"activities",
        Invest:"invest",
        InvestmentOpportunities:"investment-opportunities",
        ReasonsToInvest:"reasons-to-invest",
        OnlineSurvey:"online-survey",
        Emergency:"emergency",
        Transparency:"transparency",
        ReportedContents:"reported-contents",
    },
    Home: "/",
    TheTown: {
        TheTown: "/the-town",
        About: "/the-town/about",
        MunicipalityProfile: "/the-town/profile",
        MunicipalityPrograms: "/the-town/programs",
        SportsContent: "/the-town/programs/:sportsID",
        ElectedOfficials: "/the-town/officials",
        Offices: "/the-town/offices",
        CitizensCharter: "/the-town/citizens-charter",
        History: "/history",
        OtherInfo: "/other-info",
    },
    Tourism: {
        Tourism: "/tourism",
        SanVicente: "/tourism/san-vicente-tourism",
        OnlineForm: "/tourism/san-vicente-tourism/online-form",
        PlacesToVisit: "/tourism/places-to-visit",
        PlacesToVisitPost:"/tourism/place-to-visit",
        Activities: "/tourism/activities",
        ActivitiesPost:"/tourism/activity",
        Content: "/tourism/places-to-visit/content",
    },

    Invest: {
        Invest: "/invest",
        InvestmentOpportunities: "/invest/investment-opportunities",
        ReasonsToInvest: "/invest/reasons-to-invest",
        InvestContent: "/invest/reasons-to-invest/content",
    },

    Transparency: "/transparency",
    ContactUs: "/contacts",
    Profile: "/user/profile",
    Messages: "/message",
    PrivacyPolicy: "/privacy-policy",
    ForumsAndDiscussions: "/forums",
    Survey: "/surveys",
    SampleSurvey: "/sample-survey",
    Services: "/services",
    Debug: "/debug", 
    Articles: "/articles",
    ArticleContent: "/article/:articleID",

    AddOffices: "/the-town/offices/add-offices", 
}

const SERVER_ADDRESS = "http://localhost:8080"
const API = {
    SignUp: SERVER_ADDRESS+"/api/v1/auth/signup",
    SignIn: SERVER_ADDRESS+"/api/v1/auth/signin",
    FeedbackPost: SERVER_ADDRESS+"/api/v1/public/feedback",
    FeedbackGet: SERVER_ADDRESS+"/api/v1/admin/get-feedback",
    TourismOnlineFormGet: SERVER_ADDRESS+"/api/v1/lgu/tof",
    TourismOnlineFormPost: SERVER_ADDRESS+"/api/v1/public/tof",
}
const SOCKET = {
    Messaging: SERVER_ADDRESS+"/ws"
}

const USER_TYPES = {
    Guest: "GUEST",
    Citizen: "SV_CITIZEN",
    Tourist: "TOURIST",
    Investor: "INVESTOR",
    LguSV: "LGU_SV_MAIN",
    Admin: "ADMIN",
    EndUsers: ["SV_CITIZEN", "TOURIST", "INVESTOR", "GUEST"],
    General: ["SV_CITIZEN", "TOURIST", "INVESTOR", "LGU_SV_MAIN", "ADMIN"]
}
const NO_FOOTER = [PATH_NAME.ForumsAndDiscussions, PATH_NAME.Debug, PATH_NAME.Messages + "/*", PATH_NAME.AdminPages.Admin+"/*", ...PATH_NAME.Accounts.list];
const NO_HEADER = [PATH_NAME.Debug, ...PATH_NAME.Accounts.list];

export { PATH_NAME, API, NO_FOOTER, NO_HEADER, USER_TYPES, SOCKET };