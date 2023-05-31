import Footerstyle from "./Footer.module.css"


function Footer(){
    return(
        <>
         <footer class={Footerstyle.footerParent}> {/*Parent  */}
            <div> {/*childone  */}
              <ul>
                <li>About ZEALHUBIT</li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div> {/*childtwo  */}
            <ul>
                <li>ADDRESS</li>
                <li>Astraea Life Sciences Pvt. Ltd.
                 Astraea Court: #61, H B Samaja Road,
                 Basavanagudi, Bangalore – 560004. India.</li>
              </ul>
            </div>
            <div>  {/*childthree  */}
            <ul>
                <li>CONTACT</li>
                <li>+91 XXXXXXXXXX</li>
                <li>+91 XXXXXXXXXX</li>
                <li>zealhubit@gmail.com</li>
              </ul>
            </div>
         </footer>
         <h4>Copyright @ 2023 zeakHubIt. All rights reserved.</h4>
        
        </>
    )
}
export default Footer;