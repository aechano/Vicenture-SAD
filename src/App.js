import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Accounts/SignUp';
import SignIn from './pages/Accounts/SignIn';
import Homepage from './pages/Homepage';
import SignUpInvestor from './pages/Accounts/SignUpDetails/SignUpInvestor';
import ForumsAndDiscussions from './pages/non_admin_pages/ForumsAndDiscussions';
import { PATH_NAME, USER_TYPES } from './Variables/GLOBAL_VARIABLE';
import MunicipalityProfile from './pages/non_admin_pages/TheTown/MunicipalityProfile';
import ContactUs from './pages/non_admin_pages/ContactUs';
import AboutSanVicente from './pages/non_admin_pages/TheTown/AboutSanVicente';
import MunicipalityPrograms, { SportContent } from './pages/non_admin_pages/TheTown/MunicipalityPrograms';
import History from './pages/non_admin_pages/TheTown/History';
import PlacesToVisit from './pages/non_admin_pages/Tourism/PlacesToVisit';
import Activities from './pages/non_admin_pages/Tourism/Activities';
import Survey from './pages/non_admin_pages/Survey';
import Articles, { ArticleContent } from './pages/non_admin_pages/Articles';
import ForumsAndDiscussionsPost from './pages/non_admin_pages/ForumsAndDiscussionsPost';
import CreateForumPost from './pages/non_admin_pages/CreateForumPost';
import Offices from './pages/non_admin_pages/TheTown/Offices';
import OtherInfo from './pages/non_admin_pages/TheTown/OtherInfo';
import InvestmentOpportunities from './pages/non_admin_pages/Invest/InvestmentOpportunities';
import ReasonsToInvest from './pages/non_admin_pages/Invest/ReasonsToInvest';
import SanVicenteTourism from './pages/non_admin_pages/Tourism/SanVicenteTourism';
import InvestmentOpportunitiesContent from './pages/non_admin_pages/Invest/InvestmentOpportunitiesContent';
import ReasonsToInvestContent from './pages/non_admin_pages/Invest/ReasonsToInvestContent';
import OnlineForm from './pages/non_admin_pages/OnlineForm';
import Profile from './pages/non_admin_pages/Profile';
import Messaging from './pages/non_admin_pages/Messaging';
import CitizensCharter from './pages/non_admin_pages/TheTown/CitizensCharter';
import ElectedOfficials from './pages/non_admin_pages/TheTown/ElectedOfficials';
import Awards from './pages/non_admin_pages/TheTown/Awards';
import Transparency from './pages/non_admin_pages/Transparency';
import PlacesToVisitPost from './pages/non_admin_pages/Tourism/PlacesToVisitPost';
import Offices_Add from './pages/lgu_sv_access/Offices_Add';
import PlacesToVisitContent from './pages/lgu_sv_access/PlacesToVisitContent';
import { useEffect, useState } from 'react';
import Page404 from './pages/Accounts/ErrorPages/Page404';
import Page403 from './pages/Accounts/ErrorPages/Page403';
import Services from './pages/non_admin_pages/Services';
import ActivitiesPost from './pages/non_admin_pages/Tourism/ActivitiesPost';
import AddEditReasonsToInvestContent from './pages/lgu_sv_access/AddEditReasonsToInvestContent';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import PrivacyPolicy from './pages/non_admin_pages/PrivacyPolicy';
import Admin from './pages/AdminPages/Admin';
import Analytics from './pages/AdminPages/AdminPages/Analytics';
import AdminTheTownBase from './pages/AdminPages/AdminPages/TheTown/Base';
import AdminTourismBase from './pages/AdminPages/AdminPages/Tourism/Base';
import AdminInvestBase from './pages/AdminPages/AdminPages/Invest/Base';
import AdminOnlineSurvey from './pages/AdminPages/AdminPages/AdminOnlineSurvey';
import AdminEmergency from './pages/AdminPages/AdminPages/AdminEmergency';
import AdminTransparency from './pages/AdminPages/AdminPages/AdminTransparency';
import AdminReportedContents from './pages/AdminPages/AdminPages/AdminReportedContents';
import AdminReasonsToInvest from './pages/AdminPages/AdminPages/Invest/AdminReasonsToInvest';
import AdminInvestmentOpportunities from './pages/AdminPages/AdminPages/Invest/AdminInvestmentOpportunities';
import AdminPlacesToVisit from './pages/AdminPages/AdminPages/Tourism/AdminPlacesToVisit';
import AdminActivities from './pages/AdminPages/AdminPages/Tourism/AdminActivities';
import AdminMunicipalityProfile from './pages/AdminPages/AdminPages/TheTown/AdminMunicipalityProfile';
import AdminElectedOfficials from './pages/AdminPages/AdminPages/TheTown/AdminElectedOfficials';
import AdminOffices from './pages/AdminPages/AdminPages/TheTown/AdminOffices';
import AdminCitizensCharter from './pages/AdminPages/AdminPages/TheTown/AdminCitizensCharter';
import AdminSportsTourismArticles from './pages/AdminPages/AdminPages/AdminSportsTourismArticles';
import AdminGeneralArticles from './pages/AdminPages/AdminPages/AdminGeneralArticles';
import AdminHomepageBase from './pages/AdminPages/AdminPages/Homepage/Base';
import AdminBanner from './pages/AdminPages/AdminPages/Homepage/AdminBanner';
import AdminEvents from './pages/AdminPages/AdminPages/Homepage/AdminEvents';
import AdminAwards from './pages/AdminPages/AdminPages/Homepage/AdminAwards';
import ContentWriter from './pages/AdminPages/ContentWriter';
import ActivitiesContent from './pages/lgu_sv_access/ActivitiesContent';

function App() {
    const [userType, setUserType] = useState(USER_TYPES.Guest);
    const [surveyPopup, setSurveyPopup] = useState(true);

    function updateUserType() {
        var token = Cookies.get("token");
        if (token) {
            var payload = jwtDecode(token);
            setUserType(payload.AccountType);
        } else {
            setUserType(USER_TYPES.Guest)
        }
    }

    useEffect(() => { updateUserType() }, []);
    window.addEventListener('cookies', () => { updateUserType() });

    return (
        <div className="App">
            <BrowserRouter>
                <Header userType={userType}>
                    <Routes>
                        <Route path={PATH_NAME.Home} element={<Homepage userType={userType} surveyShowing={surveyPopup} setSurveyShowing={setSurveyPopup} />} />

                        <Route path={PATH_NAME.Accounts.SignIn} element={<SignIn />} />
                        <Route path={PATH_NAME.Accounts.SignUp.SignUp} element={<SignUp />} />
                        <Route path={PATH_NAME.Accounts.SignUp.INVESTOR} element={<SignUpInvestor />} />

                        <Route path={PATH_NAME.TheTown.About} element={<AboutSanVicente />} />
                        <Route path={PATH_NAME.TheTown.History} element={<History />} />
                        <Route path={PATH_NAME.TheTown.OtherInfo} element={<OtherInfo />} />
                        <Route path={PATH_NAME.TheTown.MunicipalityProfile} element={<MunicipalityProfile />} />
                        <Route path={PATH_NAME.TheTown.MunicipalityPrograms} element={<MunicipalityPrograms />} />
                        <Route path={PATH_NAME.TheTown.MunicipalityPrograms + "/:sportID"} element={<SportContent />} />
                        <Route path={PATH_NAME.TheTown.Offices} element={<Offices />} />
                        <Route path={PATH_NAME.TheTown.CitizensCharter} element={<CitizensCharter />} />
                        <Route path={PATH_NAME.TheTown.ElectedOfficials} element={<ElectedOfficials />} />
                        <Route path={PATH_NAME.TheTown.Awards} element={<Awards />} />

                        <Route path={PATH_NAME.Tourism.SanVicente} element={<SanVicenteTourism />} />
                        <Route path={PATH_NAME.Tourism.OnlineForm} element={<OnlineForm />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit} element={<PlacesToVisit />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit + "/:page"} element={<PlacesToVisit />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisitPost + "/:contentID"} element={<PlacesToVisitPost />} />

                        <Route path={PATH_NAME.Tourism.Activities} element={<Activities />} />
                        <Route path={PATH_NAME.Tourism.Activities + "/:page"} element={<Activities />} />
                        <Route path={PATH_NAME.Tourism.ActivitiesPost + "/:contentID"} element={<ActivitiesPost />} />

                        <Route path={PATH_NAME.ContactUs} element={<ContactUs />} />
                        <Route path={PATH_NAME.Services} element={<Services />} />

                        <Route path={PATH_NAME.Transparency} element={<Transparency />} />
                        <Route path={PATH_NAME.PrivacyPolicy} element={<PrivacyPolicy />} />

                        <Route path={PATH_NAME.Survey} element={<Survey />} />
                        <Route path={PATH_NAME.Articles} element={<Articles />} />
                        <Route path={PATH_NAME.Articles + "/:page"} element={<Articles />} />
                        <Route path={PATH_NAME.ArticleContent} element={<ArticleContent />} />

                        <Route path={PATH_NAME.ForumsAndDiscussions} element={<ForumsAndDiscussions />} />
                        <Route path={PATH_NAME.ForumsAndDiscussions + "/*"} element={<ForumsAndDiscussions />} />
                        <Route path={PATH_NAME.CreateForumPost} element={<CreateForumPost />} />
                        <Route path={PATH_NAME.ForumsAndDiscussionsPost + "/:forumID"} element={<ForumsAndDiscussionsPost />} />

                        <Route path={PATH_NAME.Messages + "/:receiver"} element={<Messaging />} />
                        <Route path={PATH_NAME.Messages} element={<Messaging />} />
                        <Route path={PATH_NAME.Profile} element={<Profile />} />

                        <Route path={PATH_NAME.Invest.InvestmentOpportunities} element={<InvestmentOpportunities userType={userType} />} />
                        <Route path={PATH_NAME.Invest.InvestmentOpportunities + "/:page"} element={<InvestmentOpportunities userType={userType} />} />
                        <Route path={PATH_NAME.Invest.InvestmentOpportunitiesContent + "/:contentID"} element={<InvestmentOpportunitiesContent userType={userType} />} />

                        <Route path={PATH_NAME.Invest.ReasonsToInvest} element={<ReasonsToInvest userType={userType} />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvest + "/:page"} element={<ReasonsToInvest userType={userType} />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvestContent + "/:contentID"} element={<ReasonsToInvestContent userType={userType} />} />

                        <Route path={PATH_NAME.Invest.Invest + "/:type/:method/:contentID"} element={<AddEditReasonsToInvestContent userType={userType} />} />

                        <Route path={PATH_NAME.Tourism.Content + "/:method/:contentID"} element={<PlacesToVisitContent />} />
                        <Route path={PATH_NAME.Tourism.Content + "/:method"} element={<PlacesToVisitContent />} />
                        <Route path={PATH_NAME.Tourism.ActivitiesContent + "/:method/:contentID"} element={<ActivitiesContent />} />
                        <Route path={PATH_NAME.Tourism.ActivitiesContent + "/:method"} element={<ActivitiesContent />} />
                        <Route path={PATH_NAME.AddOffices} element={<Offices_Add userType={userType} />} />

                        <Route path={PATH_NAME.AdminPages.Admin} element={<Admin />}>
                            <Route path={PATH_NAME.AdminPages.Analytics} element={<Analytics />} />
                            <Route path={PATH_NAME.AdminPages.Homepage} element={<AdminHomepageBase />}>
                                <Route path={PATH_NAME.AdminPages.Banner} element={<AdminBanner />} />
                                <Route path={PATH_NAME.AdminPages.Events} element={<AdminEvents />} />
                                <Route path={PATH_NAME.AdminPages.Awards} element={<AdminAwards />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.TheTown} element={<AdminTheTownBase />} >
                                <Route path={PATH_NAME.AdminPages.MunicipalityProfile} element={<AdminMunicipalityProfile />} />
                                <Route path={PATH_NAME.AdminPages.ElectedOfficials} element={<AdminElectedOfficials />} />
                                <Route path={PATH_NAME.AdminPages.Offices} element={<AdminOffices />} />
                                <Route path={PATH_NAME.AdminPages.CitizensCharter} element={<AdminCitizensCharter />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.Tourism} element={<AdminTourismBase />} >
                                <Route path={PATH_NAME.AdminPages.PlacesToVisit} element={<AdminPlacesToVisit />} />
                                <Route path={PATH_NAME.AdminPages.Activities} element={<AdminActivities />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.Invest} element={<AdminInvestBase />}>
                                <Route path={PATH_NAME.AdminPages.InvestmentOpportunities} element={<AdminInvestmentOpportunities />} />
                                <Route path={PATH_NAME.AdminPages.ReasonsToInvest} element={<AdminReasonsToInvest />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.OnlineSurvey} element={<AdminOnlineSurvey />} />
                            <Route path={PATH_NAME.AdminPages.GeneralArticles} element={<AdminGeneralArticles />} />
                            <Route path={PATH_NAME.AdminPages.SportsTourismArticles} element={<AdminSportsTourismArticles />} />
                            <Route path={PATH_NAME.AdminPages.Emergency} element={<AdminEmergency />} />
                            <Route path={PATH_NAME.AdminPages.Transparency} element={<AdminTransparency />} />
                            <Route path={PATH_NAME.AdminPages.ReportedContents} element={<AdminReportedContents />} />
                        </Route>
                        <Route path={PATH_NAME.AdminPages.ContentWriter} element={<ContentWriter />}>
                            <Route path={PATH_NAME.AdminPages.Homepage} element={<AdminHomepageBase />}>
                                <Route path={PATH_NAME.AdminPages.Banner} element={<AdminBanner />} />
                                <Route path={PATH_NAME.AdminPages.Events} element={<AdminEvents />} />
                                <Route path={PATH_NAME.AdminPages.Awards} element={<AdminAwards />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.TheTown} element={<AdminTheTownBase />} >
                                <Route path={PATH_NAME.AdminPages.MunicipalityProfile} element={<AdminMunicipalityProfile />} />
                                <Route path={PATH_NAME.AdminPages.ElectedOfficials} element={<AdminElectedOfficials />} />
                                <Route path={PATH_NAME.AdminPages.CitizensCharter} element={<AdminCitizensCharter />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.Tourism} element={<AdminTourismBase />} >
                                <Route path={PATH_NAME.AdminPages.PlacesToVisit} element={<AdminPlacesToVisit />} />
                                <Route path={PATH_NAME.AdminPages.Activities} element={<AdminActivities />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.Invest} element={<AdminInvestBase />}>
                                <Route path={PATH_NAME.AdminPages.InvestmentOpportunities} element={<AdminInvestmentOpportunities />} />
                                <Route path={PATH_NAME.AdminPages.ReasonsToInvest} element={<AdminReasonsToInvest />} />
                            </Route>
                            <Route path={PATH_NAME.AdminPages.OnlineSurvey} element={<AdminOnlineSurvey />} />
                            <Route path={PATH_NAME.AdminPages.GeneralArticles} element={<AdminGeneralArticles />} />
                            <Route path={PATH_NAME.AdminPages.SportsTourismArticles} element={<AdminSportsTourismArticles />} />
                            <Route path={PATH_NAME.AdminPages.Transparency} element={<AdminTransparency />} />
                        </Route>

                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;
