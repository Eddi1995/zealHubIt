import servicestyle from "./Services.module.css"
import Tilt from "react-parallax-tilt"   //By using this import only tilt can be done refer 
import { Link } from "react-scroll";

function ServicesProduct(){
    return(
      
        < >
       <h2 class={servicestyle.serviceMainHeading} id="ServicesProduct"><b>Services</b></h2>     {/*NOTE: This id is included because Link of react scroll look this id */}

      <section class={servicestyle.serviceParent} >    {/* parent */}
            <Tilt >   {/*child1 */}
            <div className="card border border-warning rounded" >
           <img src="./Assetz/frontend5.jpg"  className="card-img-top" class={servicestyle.cardImageOne} />
          <div className="card-body ">
           <h5 className="card-title text-warning">Web Development</h5>
         <p className="card-text">Innovation information and wide broadness of experience over different enterprises to assist customers with their custom web application development and support.</p>
         <Link to="ContactUs" activeClass="active" spy={true} smooth={true} offset={-50} duration={200} className="btn btn-warning">Click here for more info</Link>
          </div>
         </div>
  
            </Tilt>
            <Tilt> {/*child2 */}
            <div className="card" >
           <img src="./Assetz/mobdeveloopment.png" className="card-img-top" alt="mobdevelop"/>
           
          <div className="card-body">
           <h5 className="card-title text-warning">Mobile Development</h5>
         <p className="card-text">We provide top notch mobile app development in a variety of programming languages solutions. With capabilities in Hybrid and Native mobile apps we help our clients.</p>
         <Link to="ContactUs" activeClass="active" spy={true} smooth={true} offset={-50} duration={200} className="btn btn-warning">Click here for more info</Link>
          </div>
         </div>
            
            </Tilt>
            <Tilt>   {/*child3 */}
            <div className="card border border-warning" >
           <img src="./Assetz/frontend1.jpg" className="card-img-top" alt="pythonImage"/>
          <div className="card-body">
           <h5 className="card-title text-warning">Python</h5>
         <p className="card-text">Empower your project with python development. Harness the versatility, simplicity and robustness of python to build scalable web applications and data-driven solution.</p>
         <Link to="ContactUs" activeClass="active" spy={true} smooth={true} offset={-50} duration={200} className="btn btn-warning">Click here for more info</Link>
          </div>
         </div>
            </Tilt>

            <Tilt>    {/*child4 */}
                
            <div className="card" >
           <img src="./Assetz/devops.jpg" className="card-img-top" alt="devopsImage"/>
          <div className="card-body">
           <h5 className="card-title text-warning">DevOps Services</h5>
         <p className="card-text">Our devops services aim at providing an automated using stackable virtual development practices which helps bridge the gap between development and operation.</p>
          <Link to="ContactUs" activeClass="active" spy={true} smooth={true} offset={-50} duration={200} className="btn btn-warning">Click here for more info</Link>
          </div>
         </div>
            </Tilt>

            <Tilt>    {/*child5 */}
                
                <div className="card border border-warning" >
               <img src="./Assetz/bulkmailone.jpg" className="card-img-top" alt="mailphot"/>
              <div className="card-body">
               <h5 className="card-title text-warning">Bulk Mailing</h5>
             <p className="card-text">It's an enormously helpful tool for any business trying to grow and attract new clients because it allows for management and sending of massive volumes of mail at lower costs.</p>
             <Link to="ContactUs" activeClass="active" spy={true} smooth={true} offset={-50} duration={200} className="btn btn-warning">Click here for more info</Link>
              </div>
             </div>
                </Tilt>

        </section>

        </>
    )
}
export default ServicesProduct;
