import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Customers from './Components/Customers/Customers';
import Career from './Components/Career/Career';
import Faq from './Components/Faq/Faq';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Router from './Router';

function App() {
  return (
   <div style={{color:"white"}}>

   <Header/>
   <Nav/>
   <Router/>
   {/* <Home/>
   <Services/>
   <Customers/>
   <Career/>
   <Faq/>
   <ContactUs/>
   <Login/> */}
   <Footer/>


   </div>
  );
}

export default App;
