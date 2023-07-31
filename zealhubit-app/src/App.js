import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Pages/Home/Home';
import Customers from './Components/Pages/Customers/Customers';
import Career from './Components/Pages/Career/Career';
import Faq from './Components/Pages/Faq/Faq';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import Router from './Components/Router';
import Signup from './Components/Pages/Signup/Signup';
import ServicesProduct from './Components/Pages/Services/ServicesProduct';

function App() {
  return (
   <div style={{color:"white"}}>

   <Header/>
   <Nav/>
   <Router/>
   <Home/>
   <ServicesProduct/>
   <Career/>
   <Faq/>
   <ContactUs/> 
   {/* <Customers/> */}
   {/* <Login/> 
    <Signup/>  */}
   <Footer/>
  
  
    
   </div>
  );
}

export default App;
