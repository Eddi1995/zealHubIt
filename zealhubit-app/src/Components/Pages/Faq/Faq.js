import Faqstyle from "./Faq.module.css"


function Faq(){
    return(
        <>
        <h2 class={Faqstyle.FaqHeading} id="Faq">Frequently Asked Questions</h2>

    <section class={Faqstyle.FaqParent}>
    <div>   {/* chid1 */}
        <p>
         <button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleOne" aria-expanded="false" aria-controls="collapseExampleOne">
           Q. What are the industries that zealHubIt mainly works with?
        </button>
        </p>
        <div className="collapse" id="collapseExampleOne" class={Faqstyle.cardBody}>
        <div className="card card-body text-black ">
        zealHubIt mainly works with the real estate, ed-tech, food & beverages, hospitality and recreation industries. However, we don’t limit ourselves to these sectors alone. Being a reputable product engineering firm, if we think we can add value to your project,
         then we’ll work with you regardless of what industry your business is in. Our portfolio should give you a good idea of the types of industries we’ve worked with before.
         So, whether you want enterprise application development or want to develop your website or application or any other customised digital solutions, zealHubIt is the best digital product design agency.
        </div>
        </div>
    </div> 

     <div>  {/* chid2 */}
        <p>
         <button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleTwo" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. What is the project management style of zealHubIt?
        </button>
        </p>
        <div className="collapse" id="collapseExampleTwo" class={Faqstyle.cardBody} >
        <div className="card card-body text-black ">
        Well, zealHubIt has an Agile development team so that the clients can give their valuable feedback throughout the project.
         Also, with Agile methodology, testing happens regularly through the whole process and the developers can focus on client satisfaction.
        </div>
        </div>
    </div>  

    <div>  {/* chid3 */}
        <p>
         <button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleThree" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. How much do i need to pay for availing the services of INT?
        </button>
        </p>
        <div className="collapse" id="collapseExampleThree" class={Faqstyle.cardBody} >
        <div className="card card-body text-black ">
        At zealHubIt, you can find the best talent for technology outsourcing services. Let’s say, you want to build a website for better client engagement and more traffic,
        we have a team of information architects for better customer experience and reduction of dropout rate. We cater to individual requests depending on your exact skill requirement.Contact us to get the customised quotation for your requirements and drive your business revenue.
        </div>
        </div>
    </div> 

    <div>   {/* chid4 */}
        <p>
         <button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleFour" aria-expanded="false" aria-controls="collapseExampleTwo">
           Q. Does zealHubIt provide any project timelines?
        </button>
        </p>
        <div className="collapse" id="collapseExampleFour" class={Faqstyle.cardBody} >
        <div className="card card-body text-black ">
        Project timelines vary with the type of projects and the type of industries we serve. We can provide you with the project timeline once we get detailed information about your requirements. zealHubIt.
         is a top-rated IT solution provider company and has great expertise in serving a wide range of reputable industries for more than two decades. So, you can expect complete transparency about the timelines
          from the very beginning and get custom software development solutions from expert developers.
        </div>
        </div>
    </div> 

    </section>


  
        </>
    )
}
export default Faq;