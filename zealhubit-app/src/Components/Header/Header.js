import { Link } from "react-router-dom";
import headerstyle from "./Header.module.css"


function Header(){
    return(
        <>
         <header className={headerstyle.headControl} id="Home"> {/*parent */}
            <div>  {/*child1 */}
            <h1 class={headerstyle.headerAlign} ><a href="">ZealHubIt (This is sugan branch)</a></h1>
            </div>
            
            

            {/* <div> child2  
             <div class="dropdown"> 
           <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Login / Sign up
           </button>
 
                           NOTE : This page should used for the furture update 

            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><Link to="signup" class="dropdown-item active" target="blank">New Customer?</Link></li>
           <li><Link to="Login" class="dropdown-item" target="blank" >Login</Link></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Rewards</a></li> 
          </ul> 
          </div>
        </div> */}

        </header>
       
        </>
    )
}
export default Header;