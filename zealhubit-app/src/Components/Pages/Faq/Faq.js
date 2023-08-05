import Faqstyle from "./Faq.module.css"


function Faq(){
    return(
        <>
        <h2 class={Faqstyle.FaqHeading} id="Faq">Frequently Asked Questions</h2>

    <section class={Faqstyle.FaqParent}>
     <div>   {/* chid1 */}
         <p>
         <button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleOne" aria-expanded="false" aria-controls="collapseExampleOne">
           Q. What are the industries that zealHub mainly works with?
        </button>
        </p>
        <div className="collapse" id="collapseExampleOne">
        <div className="card card-body text-black ">
        zealHub is working on IT solutions for real estate, ed-tech, food and beverage, hospitality, and recreation industries. However, we don’t limit ourselves to these sectors alone.
         As a reputable product engineering firm, if you think we can add value to your project, we’ll work with you regardless of what industry your business is in. 
         Our portfolio should give you a good idea of the types of industries we’ve worked with before. So, whether you want enterprise application development or want to develop your website, application, 
         or any other customised digital solution, zealHub is the best digital product design agency.
        </div>
        </div>
     </div> 

      <div> {/* chid2 */}
        <p>
         <button className="btn btn-warning mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleTwo" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. What is the project management style of zealHubIt?
        </button>
        </p>
        <div className="collapse" id="collapseExampleTwo">
        <div className="card card-body text-black ">
        Well, zealHub has an Agile development team so that the clients can give valuable feedback throughout the project.
        Also, with Agile methodology, testing happens regularly throughout the whole process, and the developers can focus on client satisfaction.
        </div>
        </div>
    </div>  

    <div>  {/* chid3 */}
        <p>
         <button className="btn btn-warning mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleThree" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. How much do i need to pay for availing the services of zealHub?
        </button>
        </p>
        <div className="collapse" id="collapseExampleThree" >
        <div className="card card-body text-black ">
        At ZealHub, you can find the best talent for technology outsourcing services.
        Let’s say you want to build a website for better client engagement and more traffic.
        We have a team of developers to ensure a better customer experience and a reduction in dropout rates.
        We cater to individual requests depending on your exact requirements. Contact us to get a customised quotation for your requirements and drive your business's revenue.
        </div>
        </div>
    </div> 

    <div>   {/* chid4 */}
         <p>
         <button className="btn btn-warning mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleFour" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. Does zealHubIt provide any project timelines?
        </button>
        </p>
        <div className="collapse" id="collapseExampleFour" >
        <div className="card card-body text-black ">
        Project timelines vary with the type of project and requirements. We can provide you with the project timeline once we get detailed information about your requirements. 
        At Zealhub, we provide you with the best expert developers to accomplish your goals within the timeline or deadline. So, you can expect complete transparency about the timelines
          from the very beginning and get custom software development solutions from expert developers.
        </div>
        </div>
    </div>   

    </section>


  
        </>
    )
}
export default Faq;