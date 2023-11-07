import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Accounts/SignUp';
import SignIn from './pages/Accounts/SignIn';
import Homepage from './pages/Homepage';
import Banner from './components/Banner';
import SignUpLGU from './pages/Accounts/SignUpDetails/SignUpLGU';
import SignUpInvestor from './pages/Accounts/SignUpDetails/SignUpInvestor';
import ForumsAndDiscussions from './pages/non_admin_pages/ForumsAndDiscussions';
import { PATH_NAME } from './Variables/GLOBAL_VARIABLE';
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
import Citizen from './pages/non_admin_pages/TheTown/Citizen';
import ElectedOfficials from './pages/non_admin_pages/TheTown/ElectedOfficials';
import Transparency from './pages/non_admin_pages/Transparency';
import SampleSurvey from './pages/non_admin_pages/SampleSurvey';
import PlacesToVisitPost from './pages/non_admin_pages/Tourism/PlacesToVisitPost';
import Offices_Add from './pages/lgu_sv_access/Offices_Add';
import PlacesToVisitContent from './pages/lgu_sv_access/PlacesToVisitContent';
import { RedirectMessages } from './components/redirect-webpages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path={PATH_NAME.Home} element={<Homepage />} />

                        <Route path={PATH_NAME.Accounts.SignIn} element={<SignIn />} />
                        <Route path={PATH_NAME.Accounts.SignUp.SignUp} element={<SignUp />} />
                        <Route path={PATH_NAME.Accounts.SignUp.LGU} element={<SignUpLGU />} />
                        <Route path={PATH_NAME.Accounts.SignUp.INVESTOR} element={<SignUpInvestor />} />

                            <Route path={PATH_NAME.TheTown.About} element={<AboutSanVicente/>} />
                            <Route path={PATH_NAME.TheTown.History} element={<History/>} />
                            <Route path={PATH_NAME.TheTown.OtherInfo} element={<OtherInfo/>} />
                            <Route path={PATH_NAME.TheTown.MunicipalityProfile} element={<MunicipalityProfile/>} />
                            <Route path={PATH_NAME.TheTown.MunicipalityPrograms} element={<MunicipalityPrograms/>} />
                            <Route path={PATH_NAME.TheTown.Offices} element={<Offices/>} />
                            <Route path={PATH_NAME.TheTown.Citizen} element={<Citizen/>} />
                            <Route path={PATH_NAME.TheTown.ElectedOfficials} element={<ElectedOfficials/>} />

                        <Route path={PATH_NAME.Tourism.SanVicente} element={<SanVicenteTourism />} />
                        <Route path={PATH_NAME.Tourism.OnlineForm} element={<OnlineForm />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit} element={<PlacesToVisit />} />
                        <Route path={PATH_NAME.Tourism.PlacesToVisit+"/:contentID"} element={<PlacesToVisitPost />} /> {/** Try only */}
                        <Route path={PATH_NAME.Tourism.Activities} element={<Activities />} />

                        <Route path={PATH_NAME.ContactUs} element={<ContactUs />} />

                        <Route path={PATH_NAME.Transparency} element={<Transparency />} />

                        <Route path={PATH_NAME.Survey} element={<Survey />} />
                        <Route path={PATH_NAME.SampleSurvey} element={<SampleSurvey />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/article/:articleID" element={<ArticleContent/>} /> 

                        <Route path={PATH_NAME.ForumsAndDiscussions} element={<ForumsAndDiscussions />} />
                        <Route path={PATH_NAME.ForumsAndDiscussions + "/:forumID"} element={<ForumsAndDiscussionsPost />} />

                        <Route path={PATH_NAME.Messages + "/:conversationID"} element={<Messaging />} />
                        <Route path={PATH_NAME.Messages} element={<RedirectMessages />} />
                        <Route path={PATH_NAME.Profile} element={<Profile />} />
                        

                        <Route path={PATH_NAME.Invest.InvestmentOpportunities} element={<InvestmentOpportunities />} />
                        <Route path={PATH_NAME.Invest.InvestmentOpportunities + "/:contentID"} element={<InvestmentOpportunitiesContent />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvest} element={<ReasonsToInvest />} />
                        <Route path={PATH_NAME.Invest.ReasonsToInvest + "/:contentID"} element={<ReasonsToInvestContent />} />


                        <Route path={PATH_NAME.Tourism.Content+"/:method/:contentID"} element={<PlacesToVisitContent />} />
                        <Route path={PATH_NAME.Tourism.Content+"/:method"} element={<PlacesToVisitContent />} />
                        <Route path={PATH_NAME.AddOffices} element={<Offices_Add />} />



                        <Route path='/debug' element={<Banner />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;
