import Navstyle from "./Nav.module.css"
// import { Link } from "react-router-dom";
import { Link} from "react-scroll";

function Nav(){
    return(
        <>

        <div class={Navstyle.navControlling}   >
{/* <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary ">
  <div className="container-fluid "> */}
    {/* <button  className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button> */}
    {/* <div className="collapse navbar-collapse  rounded-1 " id="navbarNavDropdown" > */}
      <ul class={Navstyle.NavList} className="navbar-nav fs-5" >
        <li>
        <Link activeClass="active" spy={true} smooth={true} offset={-60} duration={100} to="Home"  className="navbar-brand text-warning fs-3 me-4" >Home</Link>
        </li>
        
        <li className="nav-item">
          <Link activeClass="active" to="ServicesProduct" spy={true} smooth={true} offset={-65} duration={100} className="nav-link" aria-current="page">Services</Link>  {/* NOTE: This to="" which checks the application whether same id name given or not */}
        </li>
        <li className="nav-item">
          <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={150}  to="Career" className="nav-link ">Career</Link>
        </li>
        <li className="nav-item">
          <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={150} to="Faq" className="nav-link">Faq</Link>
        </li>
        <li className="nav-item">
          <Link  activeClass="active" spy={true} smooth={true} offset={-70} duration={200} to="ContactUs" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    {/* </div> */}
   {/* </div>
 </nav> */}


       </div>

        </>
    )
}
export default Nav;



