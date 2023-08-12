// import { useEffect, useRef } from "react";
import mainstyle from "./Home.module.css";
import Typed from 'typed.js';  //this should me single quote
import React from "react";


function Home(){
   let el= React.useRef(null);

   React.useEffect(()=>{

    const typed = new Typed(el.current,{
     strings: ['"Hello there,sunshine!"', 'Development? Lets Handle This ', 'We_are', 'ZealHubIt Solutions...'],
     typeSpeed:100,
     loop:true,
     backDelay:50,
     backSpeed:40,
    })

    return()=>{
        typed.destroy()
    }

   },[])
    return(
        <>
       <main class={mainstyle.mainParent} id="Home" >   {/* parent */}
            <div>      {/* child1 */}
            <img src="./Assetz/mainfour.webp" alt="bannerimage"/>
                <div class={mainstyle.mainParentChild}>

                <div className={`text-warning bg-transparent ${mainstyle.multiline}`}  >
               <span class={mainstyle.multilineText} ref={el}/>
                </div>
                       
                <h5>Apply disruptive technologies to transform digital business growth with zealhub IT,</h5>
                <h5>Pitch us your idea and we will bring it to reality</h5>

                </div>

            </div>
            
           

        </main>
        
        </>
    )
}
export default Home;