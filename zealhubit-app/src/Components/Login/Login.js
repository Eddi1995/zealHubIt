import { Component } from "react";
import Loginstyle from "./Login.module.css"


class Login extends Component{
    render(){
        return(
            <section class={Loginstyle.formControlling}>
              <form>
                <input type="email" name="email" placeholder="E-mail id*"/>
                <p></p>
                <input type="password" name="password" placeholder="Password*"/>
                <p></p>
              </form>
            </section>
        )
    }
  
}
export default Login;