
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Accounts/SignUp';
import SignIn from './pages/Accounts/SignIn';
import Homepage from './pages/Homepage';
import SignUpLGU from './pages/Accounts/SignUpDetails/SignUpLGU';
import SignUpInvestor from './pages/Accounts/SignUpDetails/SignUpInvestor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-up/lgu' element={<SignUpLGU/>}/>
            <Route path='/sign-up/investor' element={<SignUpInvestor/>}/>
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
