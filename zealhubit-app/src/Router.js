import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Customers from "./Components/Customers/Customers";
import Faq from "./Components/Faq/Faq";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Career from "./Components/Career/Career";

function Router(){
    return(
        <>
         <Routes>
            {/* <Route path="Home" element={<Home/>} /> */}
            <Route path="Services" element={<Services/>} />
            {/* <Route path="Customers" element={<Customers/>} /> */}
            <Route path="Career" element={<Career/>}/>
            <Route path="Faq" element={<Faq/>} />
            <Route path="ContactUs" element={<ContactUs/>} />
            <Route path="Login" element={<Login/>} />
          
         </Routes>
        </>
    )
}
export default Router;