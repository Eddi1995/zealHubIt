
import Contactstyle from "./ContactUs.module.css"


function ContactUs(){
    return(
        <>
         <section class={Contactstyle.ContactParent}>  {/*parent*/}
            <div>   {/*child1*/}
               hellowone
            </div>
            <div>    {/*child2*/}
               <form >
                <input  type="text" name="firstname" placeholder="Full Name*" required/>
                <p></p>
                <input type="email" name="compny Email" placeholder="Company Email"/>
                <p></p>
                <input type="number" name="mobile number" placeholder="Enter the placeholder"/>
                <p></p>
                <select>
                  <option>Request for Services</option>
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
                <textarea>

                </textarea>
                <h6>
                zealHubIt needs the contact information you provide to us to contact you about our products and services.
                 By submitting the form you agree to zeakHubIt Privacy Policy and Cookies & Internet Advertising.
                  Don't worry, our privacy practices and commitment to protecting your privacy always.
                </h6>
                <button>Submit</button>
               </form>
            </div>
         </section>
        </>
    )
}
export default ContactUs;