import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Customers from './Components/Pages/Customers/Customers';
import Career from './Components/Pages/Career/Career';
import Faq from './Components/Pages/Faq/Faq';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import Router from './Components/Router';
import Signup from './Components/Pages/Signup/Signup';

function App() {
  return (
   <div style={{color:"white"}}>

   <Header/>
   <Nav/>
   <Home/>
   <Router/>
  <Services/>
   {/* <Customers/> */}
    <Career/>
    <Faq/>
  <ContactUs/> 
   <Login/> 
    <Signup/> 
   <Footer/>
  
  
    
   </div>
  );
}

export default App;
