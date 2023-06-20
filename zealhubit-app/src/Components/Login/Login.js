import { Component } from "react";
import Loginstyle from "./Login.module.css"


class Login extends Component{
  state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:"",
  }
  

  validatingform =()=>{
  let emailerr="";
  let passworderr="";
                         //Uncomment if you dont want required attribute
                    
//  let pattern1=new RegExp(/^[A-Z0-9+.]+@[A-Z0-9.-]+$/)  //    this is wrong check correct one

  let pattern2=new RegExp(/^[a-zA-Z0-9]{6,}$/)
 
  // if(!pattern1.test(this.state.email)){
  //   emailerr="should contain @ and ."
  // }
  
   if(!pattern2.test(this.state.password)){
    passworderr="Password should be minimum 6 char";
   }
   if(emailerr||passworderr){
    this.setState({emailerr:emailerr,passworderr:passworderr});
    return false;
   }
   else{
    this.setState({emailerr:emailerr,passworderr:passworderr})
    return false;
   }
    
  
  }
  

  controllingLogin=(e)=>{
      // e.preventDefault();
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
                <input type="email" name="email" placeholder="E-mail id*" className="form-control" onChange={this.inputValues} required />
                <p>{this.state.emailerr}</p>
                <input type="password" name="password" placeholder="Password*" className="form-control" onChange={this.inputValues} />
                <p>{this.state.passworderr}</p>
                <h6>By continuing, I agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></h6>
                <button onClick={this.controllingLogin} className="btn btn-warning">Submit</button>
                <h6 >Have trouble logging in? <a href="#">forgot password?</a></h6>
              </form>
            </section>
        )
    }
}
export default Login;