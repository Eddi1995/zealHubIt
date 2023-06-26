import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Customers from "./Pages/Customers/Customers";
import Faq from "./Pages/Faq/Faq";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import Career from "./Pages/Career/Career";
import Signup from "./Pages/Signup/Signup";

function Router(){
    return(
        <>
         <Routes>
            <Route path="Home" element={<Home/>} />
            <Route path="Services" element={<Services/>} />
            {/* <Route path="Customers" element={<Customers/>} /> */}
            <Route path="Career" element={<Career/>}/>
            <Route path="Faq" element={<Faq/>} />
            <Route path="ContactUs" element={<ContactUs/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="signup" element={<Signup/>}/>
         </Routes>
        </>
    )
}
export default Router;