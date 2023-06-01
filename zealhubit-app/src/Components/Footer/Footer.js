import Footerstyle from "./Footer.module.css"


function Footer(){
    return(
        <>
         <footer class={Footerstyle.footerParent}> {/*Parent  */}
            <div> {/*childone  */}
              <ul>
                <li><b>ABOUT ZEALHUBIT</b></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div> {/*childtwo  */}
            <ul>
                <li><b>ADDRESS</b></li>
                <li>Astraea Life Sciences Pvt. Ltd.
                 Astraea Court: #61, H B Samaja Road,
                 Basavanagudi, Bangalore – 560004. India.</li>
              </ul>
            </div>
            <div>  {/*childthree  */}
            <ul>
                <li><b>CONTACT</b></li>
                <li>+91 XXXXXXXXXX</li>
                <li>+91 XXXXXXXXXX</li>
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