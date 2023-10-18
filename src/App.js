
import './index.css';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
