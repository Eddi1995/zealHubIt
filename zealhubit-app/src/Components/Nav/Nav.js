import Navstyle from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div class={Navstyle.navParent} >
    
        <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-black p-4" >

        <ul class={Navstyle.ulcontroling}>
            {/* <li><Link to="Home" >Home</Link></li> */}
            <li><Link to="Services">Services</Link></li>
            <li><Link to="Customers">Customers</Link></li>
            <li><Link to="Career">Career</Link></li>
            <li><Link to="Faq">Faq</Link></li>
            <li><Link to="Contact Us">Contact Us</Link></li>
            <li><Link to="Login">Login</Link></li>
        </ul>
        
  
    </div>
    </div>
     <nav className="navbar navbar-dark bg-black">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      </div>
       </nav>

       </div>

        </>
    )
}
export default Nav;