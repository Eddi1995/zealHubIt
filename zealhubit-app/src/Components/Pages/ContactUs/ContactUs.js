
import Contactstyle from "./ContactUs.module.css"


function ContactUs(){

    return(
        <>
         <section class={Contactstyle.ContactParent} id="ContactUs">  {/*parent*/}
            <div>   {/*child1*/}
               <h2>We Love To Help You!</h2>
               <h5>Send us a message and we will be in touch within on Business day</h5>
               <div >
                  <h6>We offer full-cycle technology solutions that streamline your digital transformation journey. 
                     with cutting _edge technical expertise, zeakHubIt simplifies complex business challenges with 
                     innovative solutions for 100+fastest-growing enterprises.</h6>
               </div>
            </div>

            <div>    {/*child2*/}
           
               <form >
               <h3>Lets Get Started</h3>
                <input  type="text" name="firstname" className="form-control" placeholder="Full Name*" required/>
                <p></p>
                <input type="email" name="compny Email" className="form-control" placeholder="Company Email"/>
                <p></p>
                <input type="number" name="mobile number" className="form-control" placeholder="Mobile Number*"/>
                <p></p>
                <select className="form-control">
                  <option>Request for Services?</option>
                  <option>Dedicated Hiring</option>
                  <option>Bussiness consulting</option>
                  <option>Product Engineering</option>
                  <option>Web/App Development</option>
                  <option>Digital Marketing</option>
                  <option>Cloud Services</option>
                  <option>Data Analytics</option>
                  <option>Maintenance and Support</option>
                  <option>Media Query</option>
                  <option>Job Enquiry</option>
                  <option>Bulk mailing</option>
                </select>
                <p></p>
                <textarea className="form-control" placeholder="Comments">

                </textarea>
                <h6>
                zealHubIt needs the contact information you provide to us to contact you about our products and services.
                 By submitting the form you agree to zeakHubIt Privacy Policy and Cookies & Internet Advertising.
                  Don't worry, our privacy practices and commitment to protecting your privacy always.
                </h6>
                <button className="btn btn-warning ">Submit</button>
               </form>
            </div>
         </section>
         
        </>
    )
}
export default ContactUs;