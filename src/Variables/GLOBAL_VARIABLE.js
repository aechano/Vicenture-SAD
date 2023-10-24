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
    },
    Tourism: {
        Tourism: "/tourism",
        PlacesToVisit: "/tourism/places-to-visit",
        Activities: "/tourism/activities",
    },
    Transparency: "/transparency",
    ContactUs: "/contacts",
    Profile:"/user/profile",
    Messages:"/message",
    PrivacyPolicy:"/privacy-policy",
    ForumsAndDiscussions:"/forums",
    Survey:"/surveys"
}
const API = {
    SignUp: {
        LGU: "http://localhost:8080/accounts/lgu",
        Investor:"http://localhost:8080/accounts/investor",
        Other: "http://localhost:8080/accounts"
    },
    SignIn: "http://localhost:8080/accounts/",
}

export { PATH_NAME, API };