import servicestyle from "./Services.module.css"
import Tilt from "react-parallax-tilt"   //By using this import only tilt can be done refer 


function ServicesProduct(){
    return(
        <>
        <h2 class={servicestyle.serviceMainHeading} ><b>Services</b></h2>

      <section class={servicestyle.serviceParent}>    {/* parent */}
            <Tilt >   {/*child1 */}
            <div className="card border border-warning rounded" >
           <img src="./Assetz/frontend5.jpg"  className="card-img-top" class={servicestyle.cardImageOne} />
          <div className="card-body ">
           <h5 className="card-title text-warning">Web Development</h5>
         <p className="card-text">Innovation information and wide broadness of experience over different enterprises to assist customers with their custom web application development and support.</p>
         <a href="#" className="btn btn-warning">Click here for more info</a>
          </div>
         </div>
  
            </Tilt>
            <Tilt> {/*child2 */}
            <div className="card" >
           <img src="./Assetz/mobdeveloopment.png" className="card-img-top" alt="mobdevelop"/>
           
          <div className="card-body">
           <h5 className="card-title text-warning">Mobile Development</h5>
         <p className="card-text">We provide top notch mobile app development in a variety of programming languages solutions. With capabilities in Hybrid and Native mobile apps we help our clients.</p>
         <a href="#" className="btn btn-warning">Click here for more info</a>
          </div>
         </div>
            
            </Tilt>
            <Tilt>   {/*child3 */}
            <div className="card border border-warning" >
           <img src="./Assetz/frontend1.jpg" className="card-img-top" alt="pythonImage"/>
          <div className="card-body">
           <h5 className="card-title text-warning">Python</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" className="btn btn-warning">Click here for more info</a>
          </div>
         </div>
            </Tilt>

            <Tilt>    {/*child4 */}
                
            <div className="card" >
           <img src="./Assetz/devops.jpg" className="card-img-top" alt="devopsImage"/>
          <div className="card-body">
           <h5 className="card-title text-warning">DevOps Services</h5>
         <p className="card-text">Our devops services aim at providing an automated using stackable virtual development practices which helps bridge the gap between development and operation.</p>
          <a href="#" className="btn btn-warning">Click here for more info</a>
          </div>
         </div>
            </Tilt>

            <Tilt>    {/*child5 */}
                
                <div className="card border border-warning" >
               <img src="./Assetz/bulkmailone.jpg" className="card-img-top" alt="mailphot"/>
              <div className="card-body">
               <h5 className="card-title text-warning">Bulk Mailing</h5>
             <p className="card-text">managing and sending large quantities of mail at reduced rates, so it's an incredibly useful tool for any business looking to expand and reach new customers.</p>
             <a href="#" className="btn btn-warning">Click here for more info</a>
              </div>
             </div>
                </Tilt>

        </section>

        </>
    )
}
export default ServicesProduct;
