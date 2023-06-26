import { Component } from "react";
import Loginstyle from "./Login.module.css"
import axios from "axios"


class Login extends Component{
  state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:"",
  }

                           //step 1

  inputValues=(e)=>{
       let {name,value}  = e.target;
       this.setState({[name]:value})
       console.log(this.state)
  }

                          //step 2

  controllingLogin=(e)=>{
    e.preventDefault();
   let isValidForm= this.validatingform();

   if (isValidForm){
      //prepare the data which are need to send

      let data={
        email:this.state.email,
        password:this.state.password,
      }

      // Make the POST request
     axios.post("/users/authenticate",data).then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)})
      
   }
}
                         //step 3

validatingform =()=>{
  let emailerr="";
  let passworderr="";
                         //Uncomment if you dont want required attribute
                    
  // let pattern2=new RegExp(/^[a-zA-Z0-9]{6,}$/)
  let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$/g

  let pattern2=/^[a-zA-Z0-9]{6,}$/g
 
  if(!this.state.email.match(emailRegex)){
    emailerr="should contain @ and .com"
  }
  
   if(!this.state.password.match(pattern2)){
    passworderr="Password should be minimum 6 char";
   }
   if(emailerr||passworderr){
    this.setState({emailerr:emailerr,passworderr:passworderr});
    return false;
   }
   else{
    this.setState({emailerr:emailerr,passworderr:passworderr})
    return true;
   }

  }

    render(){
        return(
         
            <section class={Loginstyle.formControlling}>
              <form onSubmit={this.controllingLogin}>
                <span className="text-warning fs-3 p-1 bg-transparent">Login</span><span className="fs-3 p-3 bg-transparent">&#129488;</span>
                <input type="email" name="email" placeholder="E-mail id*" className="form-control" onChange={this.inputValues} required />
                <p>{this.state.emailerr}</p>
                <input type="password" name="password" placeholder="Password*" className="form-control" onChange={this.inputValues} />
                <p>{this.state.passworderr}</p>
                <h6>By continuing, I agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></h6>
                <button className="btn btn-warning">Submit</button>
               
                <h6 >Have trouble logging in? <a href="#">forgot password?</a></h6>
              </form>
            </section>
        )
    }
}
export default Login;