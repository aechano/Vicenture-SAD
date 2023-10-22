
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Accounts/SignUp';
import SignIn from './pages/Accounts/SignIn';
import Homepage from './pages/Homepage';
import SignUpLGU from './pages/Accounts/SignUpDetails/SignUpLGU';
import SignUpInvestor from './pages/Accounts/SignUpDetails/SignUpInvestor';
import Banner from './components/Banner';
import ForumsAndDiscussions from './pages/non_admin_pages/ForumsAndDiscussions';
import { PATH_NAME } from './Variables/GLOBAL_VARIABLE';
import MunicipalityProfile from './pages/non_admin_pages/TheTown/MunicipalityProfile';

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
                        
                        <Route path={PATH_NAME.ForumsAndDiscussions} element={<ForumsAndDiscussions />} />

                        <Route path={PATH_NAME.MunicipalityProfile} element={<MunicipalityProfile/>} />

                        <Route path='/debug' element={<Banner />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;
