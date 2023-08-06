
import { useState } from "react";
import Contactstyle from "./ContactUs.module.css"
import axios from "axios"


function ContactUs(){
  let[userdata,setuserdata]= useState({
    firstname:"",
    companyemail:"",
    mobilenumber:"",
    information:"",
    services:"",
  })

  function changing(e){
   //  let {name,value} =e.target;
   let {name,value}=e.target; 
   setuserdata((prevUserData) => ({...prevUserData,[name]: value}))

}

function submitting(){
   let {firstname,companyemail,mobilenumber,information,services}= userdata;
   // console.log(firstname)
   // console.log(companyemail);
   // console.log(mobilenumber);
   // console.log(information);
   // console.log(services);


 let dataToApi=async()=>{
      await axios.post(``,userdata).then((data)=>JSON.stringify(data)).then((data)=>{console.log(data)}).catch((err)=>{console.log("Error while sending the data")})
   }
   dataToApi();

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
           
               <form onSubmit={submitting} method="POST">
               <h3>Lets Get Started</h3>
                <input type="text" name="firstname" className="form-control" placeholder="Full Name*" required onChange={changing} />
                <p></p>
                <input type="email" name="companyemail" className="form-control" placeholder=" Email* " required autoComplete="off" onChange={changing}/>
                <p></p>
                <input type="number" name="mobilenumber" className="form-control" placeholder="Mobile Number*" required onChange={changing}/>
                <p></p>
                <select className="form-control" name="services" onChange={changing}>
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
                <textarea className="form-control" name="information" placeholder="Services Information*" required onChange={changing}>

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