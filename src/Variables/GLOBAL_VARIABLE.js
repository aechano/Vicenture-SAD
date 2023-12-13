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
    AdminPages: {
        Admin: "/admin",
        ContentWriter: "/writer",
        Analytics: "analytics",
        Homepage: "homepage",
        Banner: "banner",
        Awards: "awards",
        Events: "events",
        TheTown: "the-town",
        MunicipalityProfile: "municipality-profile",
        ElectedOfficials: "elected-officials",
        Offices: "offices",
        CitizensCharter: "citizen-charter",
        Tourism: "tourism",
        PlacesToVisit: "places-to-visit",
        Activities: "activities",
        Invest: "invest",
        InvestmentOpportunities: "investment-opportunities",
        ReasonsToInvest: "reasons-to-invest",
        OnlineSurvey: "online-survey",
        Emergency: "emergency",
        Transparency: "transparency",
        ReportedContents: "reported-contents",
        GeneralArticles: "general-articles",
        SportsTourismArticles: "sports-tourism"
    },
    Home: "/",
    TheTown: {
        TheTown: "/the-town",
        About: "/the-town/about",
        MunicipalityProfile: "/the-town/profile",
        MunicipalityPrograms: "/the-town/programs",
        SportsContent: "/the-town/programs/:sportsID",
        ElectedOfficials: "/the-town/officials",
        Awards: "/the-town/awards",
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
        PlacesToVisitPost: "/tourism/place-to-visit",
        Activities: "/tourism/activities",
        ActivitiesPost: "/tourism/activity",
        Content: "/tourism/places-to-visit/content",
    },

    Invest: {
        Invest: "/invest",
        InvestmentOpportunities: "/invest/investment-opportunities",
        InvestmentOpportunitiesContent: "/invest/investment-opportunity",
        ReasonsToInvest: "/invest/reasons-to-invest",
        ReasonsToInvestContent: "/invest/reason-to-invest",
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
const PUBLIC = "/api/v1/public"
const LGU = "/api/v1/lgu"
const AUTH = "/api/v1/auth"
const ADMIN = "/api/v1/admin"
const CONTENT_WRITER = "/api/v1/writer"
const GENERAL = "/api/v1/general"
const API = {
    SignUp: SERVER_ADDRESS + AUTH + "/signup",
    SignIn: SERVER_ADDRESS + AUTH + "/signin",
    FeedbackPost: SERVER_ADDRESS + PUBLIC + "/feedback",
    FeedbackGet: SERVER_ADDRESS + ADMIN + "/get-feedback",
    TourismOnlineFormGet: SERVER_ADDRESS + LGU + "/tof",
    TourismOnlineFormPost: SERVER_ADDRESS + PUBLIC + "/tof",
    Content: function (method) { return SERVER_ADDRESS + LGU + method },
    ContentDelete: function (id) { return SERVER_ADDRESS + LGU + "/delete/" + id },
    GetContentID: function (id) { return SERVER_ADDRESS + PUBLIC + "/getContent/" + id },
    GetContentCount: SERVER_ADDRESS + PUBLIC + "/getContent/count",
    GetContentPages: function (type, id) { return SERVER_ADDRESS + PUBLIC + "/getContent/" + type + "/" + id },
    contentRating: function (id) { return SERVER_ADDRESS + PUBLIC + "/contentRating/" + id },
    setContentRating: SERVER_ADDRESS + GENERAL + "/contentRating",
    getMyContentRating: function (id) { return SERVER_ADDRESS + GENERAL + "/myrating/" + id },
    addMunProfile: SERVER_ADDRESS + CONTENT_WRITER + "/add-mun_profile",
    viewMunProfile: SERVER_ADDRESS + PUBLIC + "/view-mun_profile",
    publishComment: SERVER_ADDRESS + GENERAL + "/comment/publish",
    analyticsWebpageVisit: SERVER_ADDRESS + PUBLIC + "/analytics/webpage_visit",
    analyticsGetAll: SERVER_ADDRESS + ADMIN + "/analytics",
    reportGet: SERVER_ADDRESS + ADMIN + "/reported",
    report: SERVER_ADDRESS + GENERAL + "/reported",
    analyticsGetAll: SERVER_ADDRESS + ADMIN + "/analytics",
    deleteProfile: function (id) { return SERVER_ADDRESS + CONTENT_WRITER + "/delete-mun_profile/" + id },
    editProfile: SERVER_ADDRESS + CONTENT_WRITER + "/edit-mun_profile",
    viewTransparency: SERVER_ADDRESS + PUBLIC + "/view-transparency",
    addTransparency: SERVER_ADDRESS + CONTENT_WRITER + "/add-transparency",
    editTransparency: SERVER_ADDRESS + CONTENT_WRITER + "/edit-transparency",
    deleteTransparency: function (id) { return SERVER_ADDRESS + CONTENT_WRITER + "/delete-transparency/" + id },
    viewCharter: SERVER_ADDRESS + PUBLIC + "/view-charter",
    addCharter: SERVER_ADDRESS + CONTENT_WRITER + "/add-charter",
    editCharter: SERVER_ADDRESS + CONTENT_WRITER + "/edit-charter",
    deleteCharter: function (id) { return SERVER_ADDRESS + CONTENT_WRITER + "/delete-charter/" + id },
    addOfficials: SERVER_ADDRESS + CONTENT_WRITER + "/add-officials",
    viewOfficials: SERVER_ADDRESS + PUBLIC + "/view-officials",
    addAlert: SERVER_ADDRESS + ADMIN + "/add-alert",
    viewAlert: SERVER_ADDRESS + PUBLIC + "/view-alert",
    updateProfile: SERVER_ADDRESS + GENERAL + "/profile/edit",
    getProfilePFP: SERVER_ADDRESS + GENERAL + "/profile/getPFP",
    getComment: function (id) { return SERVER_ADDRESS + PUBLIC + "/comments/" + id },
    postComment: SERVER_ADDRESS + GENERAL + "/comment/publish",
    reportContent: SERVER_ADDRESS + GENERAL + "/reported",
    postSurvey: SERVER_ADDRESS + CONTENT_WRITER + "/survey",
    editSurvey: SERVER_ADDRESS + CONTENT_WRITER +"/edit-survey",
    getAllSurveys: SERVER_ADDRESS + PUBLIC + "/viewSurveys",
    addOffice: SERVER_ADDRESS + ADMIN + "/add-office",
    viewBanner: SERVER_ADDRESS + PUBLIC + "/view-banner",
    addBanner: SERVER_ADDRESS + ADMIN + "/add-banner",
    editBanner: SERVER_ADDRESS + ADMIN + "/edit-banner",
    deleteBanner: function (id) { return SERVER_ADDRESS + ADMIN + "/delete-banner/" + id },
}
const SOCKET = {
    Messaging: SERVER_ADDRESS + "/ws"
}

const USER_TYPES = {
    Guest: "GUEST",
    Citizen: "SV_CITIZEN",
    Tourist: "TOURIST",
    Investor: "INVESTOR",
    LguSV: "LGU",
    ContentWriter: "CONTENT_WRITER",
    Admin: "ADMIN",
    EndUsers: ["SV_CITIZEN", "TOURIST", "INVESTOR", "GUEST"],
    General: ["SV_CITIZEN", "TOURIST", "INVESTOR", "LGU", "ADMIN", "CONTENT_WRITER"],
    Writers: ["ADMIN", "CONTENT_WRITER"]
}
const NO_FOOTER = [PATH_NAME.ForumsAndDiscussions, PATH_NAME.Debug, PATH_NAME.Messages + "/*", PATH_NAME.AdminPages.Admin + "/*", PATH_NAME.AdminPages.ContentWriter + "/*", ...PATH_NAME.Accounts.list];
const NO_HEADER = [PATH_NAME.Debug, ...PATH_NAME.Accounts.list];

export { PATH_NAME, API, NO_FOOTER, NO_HEADER, USER_TYPES, SOCKET };