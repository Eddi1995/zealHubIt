
import Contactstyle from "./ContactUs.module.css"


function ContactUs(){

  function submitting(){
   
  }

    return(
        <>
         <section class={Contactstyle.ContactParent} id="ContactUs">  {/*parent*/}
            <div>   {/*child1*/}
               <h2>We Love To Help You!</h2>
               <h5>Send us a message and we will be in touch within on Business day</h5>
               <div >
                  <h6>We offer full-cycle technology solutions that streamline your digital transformation journey. 
                     With cutting-edge technical expertise, ZealHub simplifies complex business challenges with innovative solutions for the fastest-growing enterprises.</h6>
               </div>
            </div>

            <div>    {/*child2*/}
           
               <form onSubmit={submitting()}>
               <h3>Lets Get Started</h3>
                <input  type="text" name="firstname" className="form-control" placeholder="Full Name*" required/>
                <p></p>
                <input type="email" name="company Email" className="form-control" placeholder=" Email* " required autoComplete="off"/>
                <p></p>
                <input type="number" name="mobile number" className="form-control" placeholder="Mobile Number*" required/>
                <p></p>
                <select className="form-control">
                  <option>Request for Services?</option>
                  <option>Web/App Development</option>
                  <option>Digital Marketing</option>
                  <option>Cloud Services</option>
                  <option>Data Analytics</option>
                  <option>Maintenance and Support</option>
                  <option>Bulk mailing</option>
                  <option>others</option>
                </select>
                <p></p>
                <textarea className="form-control" placeholder="Services Information*" required>

                </textarea>
                <h6>
                 zealHub needs the information you provide to us to contact you about our products and services. 
                 By submitting the form, you agree to the ZealHub Privacy Policy and Cookies and Internet Advertising. 
                 Don't worry; our privacy practises and commitment to protecting your privacy will always be there.
                </h6>
                <button className="btn btn-warning ">Submit</button>
               </form>
            </div>
         </section>
         
        </>
    )
}
export default ContactUs;