import Navstyle from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        
        <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-black p-4" >

        <ul class={Navstyle.ulcontroling}>
            <li><Link to="Home" >Home</Link></li>
            <li><Link to="Services">Services</Link></li>
            <li><Link to="Customers">Customers</Link></li>
            <li><Link to="Career">Career</Link></li>
            <li><Link to="Faq">Faq</Link></li>
            <li><Link to="Contact Us">Contact Us</Link></li>
            <li><Link to="Login">Login</Link></li>

        </ul>
    {/* <h3 className="text-white bg-white"></h3>
    <h4 className="text-white bg-white"><Link>Services</a></h4>
    <h4 className="text-white bg-white"><Link>Customers</a></h4>
    <h4 className="text-white bg-white"><Link>Career</a></h4>
    <h4 className="text-white bg-white"><Link>Faq</a></h4>
    <h4 className="text-white bg-white"><Link>Contact Us</a></h4>
    <h4 className="text-white bg-white"><Link>Login</a></h4> */}
    </div>
    </div>
     <nav className="navbar navbar-dark bg-black">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      </div>
       </nav>

        </>
    )
}
export default Nav;