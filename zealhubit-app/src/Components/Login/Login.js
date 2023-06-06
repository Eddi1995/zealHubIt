import { Component } from "react";
import Loginstyle from "./Login.module.css"


class Login extends Component{
  state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:"",
  }

  validatingform=()=>{
  let emailerr="";
  let passworderr="";
 
     if(this.state.email.length<=1){
      emailerr="";
     }
     if(this.state.password.length===0){
      passworderr=""
     }
  
  }

  controllingLogin=(e)=>{
      e.preventDefault();
      this.validatingform();
  }

  inputValues=(e)=>{
       let {name,value}  = e.target;
       this.setState({[name]:value})
       console.log(this.state)
  }

    render(){
        return(
            <section class={Loginstyle.formControlling}>
              <form>
                <span className="text-warning fs-3 p-1 bg-transparent">Login</span><span className="fs-3 p-3 bg-transparent">&#129488;</span>
                <input type="email" name="email" placeholder="E-mail id*" className="form-control" onChange={this.inputValues} required/>
                <p></p>
                <input type="password" name="password" placeholder="Password*" className="form-control" onChange={this.inputValues} required/>
                <p></p>
                <h6>By continuing, I agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></h6>
                <button onClick={this.controllingLogin} className="btn btn-warning">Submit</button>
                <h6 >Have trouble logging in? <a href="#">Get help</a></h6>
              </form>
            </section>
        )
    }
}
export default Login;