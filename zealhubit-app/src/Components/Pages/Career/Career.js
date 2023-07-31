import Careerstyle from "./Career.module.css"

function Career(){
    return(
        <>
        <div class={Careerstyle.CareerParent} id="Career" >     {/* career parent*/}

            <div>   {/* career childone*/}
               <h3 className="text-center">ZealHubIt solution</h3>
               <h2 className="text-center text-warning">JOIN WITH US</h2>
            </div>
     <div class={Careerstyle.CareerchildtwoSubchild}>   {/* career childtwo*/}
        
           
            <h2 className="text-warning">Current Openings</h2>
            <hr/>

            <div className="card-body">
             <h4 className="card-title text-white">1) Full Stack Engineer</h4><br/>
           
             <h5 className="text-warning">Company Introduction</h5>

            <p class="card-text">A digital product engineering company. We integrate experience design and complex engineering to help our clients imagine what’s possible and accelerate their transition into tomorrow’s digital businesses.</p>
            <h5 className="text-warning">Job Description</h5>
            <p class="card-text">We are looking for a Full Stack Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include implementing visual elements and their behaviours with user interactions. You will work with both front-end and back-end web developers to build all client-side logic. You will also be bridging the gap between the visual elements and the server-side infrastructure, taking an active role on both sides, and defining how the application looks and functions.</p>
            <h5 className="text-warning">Responsibilities</h5>
            <ul>
                <li>Develop new user-facing features</li>
                <li>Build reusable code and libraries for future use</li>
                <li>Ensure the technical feasibility of UI/UX designs</li>
                <li>Optimize applications for maximum speed and scalability</li>
            </ul>
            <h5 className="text-warning">Skills and Qualifications</h5>
            <ul>
                <li>Strong understanding of JavaScript, its quirks, and workarounds</li>
                <li>Basic understanding of web markup, including HTML5 and CSS3</li>
                <li>Good understanding of asynchronous request handling, partial page updates, and AJAX</li>
                <li>Proficient understanding of cross-browser compatibility issues and ways to work around such issues</li>
            </ul>

            <a href="#" class="btn btn-warning"> Share your CV/Resume to info@zealhubitsolutions.com</a>
            </div>


            



          
         

    </div>

          </div>

        </>
    )
}
export default Career;