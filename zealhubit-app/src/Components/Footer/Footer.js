import Footerstyle from "./Footer.module.css"
import { Link } from "react-scroll";


function Footer(){
    return(
        <>
         <footer class={Footerstyle.footerParent}> {/*Parent  */}
            <div> {/*childone  */}
              <ul>
                <li><b>ABOUT ZEALHUBIT</b></li>
                <li><a href="http://localhost:3000/ContactUs">About Us</a></li>
                <li><Link activeClass="active" to="Career" spy={true} smooth={true} offset={-80} duration={150} >Career</Link></li>
                <li><Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={-70} duration={200}>Contact Us</Link></li>
              </ul>
            </div>
            <div> {/*childtwo  */}
            <ul>
                <li><b>ADDRESS</b></li>
                <li>zealHub #373 3rd floor, 10th main road, Koramangala 8th block, Bangalore – 560047. India.</li>
              </ul>
            </div>
            <div>  {/*childthree  */}
            <ul>
                <li><b>CONTACT</b></li>
                <li>+91 8892592408</li>
                <li>+91 8884400729</li>
                <li>info@zealhubitsolutions.com</li>
                <li>zealhubit@gmail.com</li>
              </ul>
            </div>
         </footer>
         <h6 className="text-center p-2">Copyright @ 2023 zeakHubIt. All rights reserved.</h6>
         <div class={Footerstyle.arrow}>
           <a href="#"> <i className="fa-sharp fa-regular fa-circle-up bg-transparent"></i></a>
         </div>
        </>
    )
}
export default Footer;