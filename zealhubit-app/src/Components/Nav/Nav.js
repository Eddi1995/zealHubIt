import Navstyle from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        
   
        <div class={Navstyle.navControlling}>
<nav className="navbar navbar-expand-lg bg-body-tertiary text-primary ">
  <div className="container-fluid ">
    <Link to="Home" className="navbar-brand text-warning fs-3 me-4" >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  rounded-1" id="navbarNavDropdown" >
      <ul  className="navbar-nav fs-5" >
        
        <li className="nav-item">
          <Link to="Services" className="nav-link " aria-current="page">Services</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link text-white" href="#">Customers</a> */}
        </li>
        <li className="nav-item">
          <Link to="Career" className="nav-link ">Career</Link>
        </li>
        <li className="nav-item">
          <Link to="Faq" className="nav-link">Faq</Link>
        </li>
        <li className="nav-item">
          <Link to="ContactUs" className="nav-link ">Contact Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Track order</a>
        </li>
      
      </ul>
    </div>
   </div>
 </nav>


       </div>

        </>
    )
}
export default Nav;