import servicestyle from "./Services.module.css"


function Services(){
    return(
        <>
        <h2>Services</h2>

      <section className={servicestyle.serviceParent}>    {/* parent */}
            <div>   {/*child1 */}
            <div class="card" >
           <img src="./Assetz/frontend5.jpg" class="card-img-top" alt="frontend"/>
          <div class="card-body">
           <h5 class="card-title">Web Development</h5>
         <p class="card-text">Offering profound innovation information and wide broadness of experience over different enterprises to assist customers with their custom web application development and support activities.</p>
         <a href="#" class="btn btn-warning">Touch me for more info</a>
          </div>
         </div>
  
            </div>
            <div> {/*child2 */}
            <div class="card" >
           <img src="./Assetz/mobdeveloopment.png" class="card-img-top" alt="mobdevelop"/>
          <div class="card-body">
           <h5 class="card-title">Mobile Development</h5>
         <p class="card-text">We provide top notch mobile app development solutions. With capabilities in Hybrid and Native mobile apps we help our clients.</p>
         <a href="#" class="btn btn-warning">Touch me for more info</a>
          </div>
         </div>
            
            </div>
            <div>   {/*child3 */}
            <div class="card" >
           <img src="./Assetz/frontend1.jpg" class="card-img-top" alt="pythonImage"/>
          <div class="card-body">
           <h5 class="card-title">Python</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-warning">Touch me for more info</a>
          </div>
         </div>
            </div>

            <div>    {/*child4 */}
                
            <div class="card" >
           <img src="./Assetz/devops.jpg" class="card-img-top" alt="devopsImage"/>
          <div class="card-body">
           <h5 class="card-title">DevOps Services</h5>
         <p class="card-text">Our devops services aim at providing an automated practices which helps bridge the gap between development and operations.</p>
          <a href="#" class="btn btn-warning">Touch me for more info</a>
          </div>
         </div>
            </div>

            <div>    {/*child5 */}
                
                <div class="card" >
               <img src="./Assetz/bulkmail.jpg" class="card-img-top" alt="mailphot"/>
              <div class="card-body">
               <h5 class="card-title">Bulk Mailing</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Touch me for more info</a>
              </div>
             </div>
                </div>

        </section>

        </>
    )
}
export default Services;