import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './pages/Accounts/SignUp';
import SignIn from './pages/Accounts/SignIn';
import Homepage from './pages/Homepage';
import Banner from './components/Banner';
import SignUpLGU from './pages/Accounts/SignUpDetails/SignUpLGU';
import SignUpInvestor from './pages/Accounts/SignUpDetails/SignUpInvestor';
import AdminAnalytics from './pages/AdminPages/AdminAnalytics';
import adminHomepage from './pages/AdminPages/adminHomepage';
import adminAboutSV from './pages/AdminPages/adminAboutSV';
import adminElectedOfficial from './pages/AdminPages/adminElectedOfficial';
import adminMunicipalityProfile from './pages/AdminPages/adminMunicipalityProfile';
import AdminTransparency from './pages/AdminPages/adminTransparency'
import ForumsAndDiscussions from './pages/non_admin_pages/ForumsAndDiscussions';
import { PATH_NAME, USER_TYPES } from './Variables/GLOBAL_VARIABLE';
import MunicipalityProfile from './pages/non_admin_pages/TheTown/MunicipalityProfile';
import ContactUs from './pages/non_admin_pages/ContactUs';
import AboutSanVicente from './pages/non_admin_pages/TheTown/AboutSanVicente';
import MunicipalityPrograms from './pages/non_admin_pages/TheTown/MunicipalityPrograms';
import History from './pages/non_admin_pages/TheTown/History';
import PlacesToVisit from './pages/non_admin_pages/Tourism/PlacesToVisit';
import Activities from './pages/non_admin_pages/Tourism/Activities';
import Survey from './pages/non_admin_pages/Survey';
import Articles, { ArticleContent } from './pages/non_admin_pages/Articles';
import ForumsAndDiscussionsPost from './pages/non_admin_pages/ForumsAndDiscussionsPost';
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
import Transparency from './pages/non_admin_pages/Transparency';
import PlacesToVisitPost from './pages/non_admin_pages/Tourism/PlacesToVisitPost';
import Offices_Add from './pages/lgu_sv_access/Offices_Add';
import PlacesToVisitContent from './pages/lgu_sv_access/PlacesToVisitContent';
import { RedirectMessages } from './components/redirect-webpages';
import SurveyPage from './pages/non_admin_pages/SurveyPage';
import { useEffect, useState } from 'react';
import SignInPrompt from './components/SignInPrompt';
import Page404 from './pages/Accounts/ErrorPages/Page404';
import Page403 from './pages/Accounts/ErrorPages/Page403';
import Services from './pages/non_admin_pages/Services';
import ActivitiesPost from './pages/non_admin_pages/Tourism/ActivitiesPost';

function App() {
    const [userType, setUserType] = useState(localStorage.getItem("accountType") ? localStorage.getItem("accountType") : USER_TYPES.Guest);

    window.addEventListener('storage', () => {
        setUserType(localStorage.getItem("accountType") ? localStorage.getItem("accountType") : USER_TYPES.Guest);
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Header userType={userType}>
                    <Routes>
                        <Route path={PATH_NAME.Home} element={<Homepage userType={userType} />} />

                        <Route path={PATH_NAME.Accounts.SignIn} element={<SignIn />} />
                        <Route path={PATH_NAME.Accounts.SignUp.SignUp} element={<SignUp />} />
                        <Route path={PATH_NAME.Accounts.SignUp.LGU} element={<SignUpLGU />} />
                        <Route path={PATH_NAME.Accounts.SignUp.INVESTOR} element={<SignUpInvestor />} />
                        <Route path={PATH_NAME.AdminPages.AdminAnalytics} element={<AdminAnalytics />} />
                        <Route path={PATH_NAME.AdminPages.adminHomepage} element={<adminHomepage />} />
                        <Route path={PATH_NAME.AdminPages.adminAboutSV} element={<adminAboutSV />} />
                        <Route path={PATH_NAME.AdminPages.adminMunicipalityProfile} element={<adminMunicipalityProfile />} />
                        <Route path={PATH_NAME.AdminPages.adminElectedOfficial} element={<adminElectedOfficial />} />


                        <Route path={PATH_NAME.TheTown.About} element={<AboutSanVicente />} />
                        <Route path={PATH_NAME.TheTown.History} element={<History />} />
                        <Route path={PATH_NAME.TheTown.OtherInfo} element={<OtherInfo />} />
                        <Route path={PATH_NAME.TheTown.MunicipalityProfile} element={<MunicipalityProfile />} />
                        <Route path={PATH_NAME.TheTown.MunicipalityPrograms} element={<MunicipalityPrograms />} />
                        <Route path={PATH_NAME.TheTown.Offices} element={<Offices />} />
                        <Route path={PATH_NAME.TheTown.CitizensCharter} element={<CitizensCharter />} />
                        <Route path={PATH_NAME.TheTown.ElectedOfficials} element={<ElectedOfficials />} />

                        <Route path={PATH_NAME.Tourism.SanVicente} element={<SanVicenteTourism userType={userType} />} />
                        <Route path={PATH_NAME.Tourism.OnlineForm} element={<OnlineForm userType={userType} />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit} element={<PlacesToVisit userType={userType} />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit + "/:contentID"} element={<PlacesToVisitPost userType={userType} />} /> {/** Try only */}
                        <Route path={PATH_NAME.Tourism.Activities} element={<Activities userType={userType} />} />
                        <Route path={PATH_NAME.Tourism.Activities + "/:contentID"} element={<ActivitiesPost userType={userType} />} />

                        <Route path={PATH_NAME.ContactUs} element={<ContactUs userType={userType} />} />
                        <Route path={PATH_NAME.Services} element={<Services userType={userType}/>} />

                        <Route path={PATH_NAME.Transparency} element={<Transparency userType={userType} />} />

                        <Route path={PATH_NAME.Survey} element={<Survey userType={userType} />} />
                        <Route path={PATH_NAME.SampleSurvey} element={<SurveyPage userType={userType} />} />
                        <Route path="/articles" element={<Articles userType={userType} />} />
                        <Route path="/article/:articleID" element={<ArticleContent userType={userType} />} />

                        <Route path={PATH_NAME.ForumsAndDiscussions} element={<ForumsAndDiscussions userType={userType} />} />
                        <Route path={PATH_NAME.ForumsAndDiscussions + "/:forumID"} element={<ForumsAndDiscussionsPost userType={userType} />} />

                        <Route path={PATH_NAME.Messages + "/:conversationID"} element={<Messaging userType={userType} />} />
                        <Route path={PATH_NAME.Messages} element={<RedirectMessages userType={userType} />} />
                        <Route path={PATH_NAME.Profile} element={<Profile userType={userType} />} />

                        <Route path={PATH_NAME.Invest.InvestmentOpportunities} element={<InvestmentOpportunities userType={userType} />} />
                        <Route path={PATH_NAME.Invest.InvestmentOpportunities + "/:contentID"} element={<InvestmentOpportunitiesContent userType={userType} />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvest} element={<ReasonsToInvest userType={userType} />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvest + "/:contentID"} element={<ReasonsToInvestContent userType={userType} />} />


                        <Route path={PATH_NAME.Tourism.Content + "/:method/:contentID"} element={<PlacesToVisitContent userType={userType} />} />
                        <Route path={PATH_NAME.Tourism.Content + "/:method"} element={<PlacesToVisitContent userType={userType} />} />
                        <Route path={PATH_NAME.AddOffices} element={<Offices_Add userType={userType} />} />



                        <Route path='/debug' element={<Page403 />} />
                        <Route path='/*' element={<Page404/>} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;
