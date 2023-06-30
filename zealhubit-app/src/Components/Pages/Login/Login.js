import { Component } from "react";
import Loginstyle from "./Login.module.css"
import axios from "axios"


class Login extends Component{
  state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:"",
    userData:[],
    filteredUserData:[],
  }

                                //step 1

    componentDidMount(){
      this.apiFetch();
    }

    apiFetch=async()=>{
      let url="https://fakestoreapi.com/users";

     await fetch(url).then((userdata)=> userdata.json()).then((userdata)=>{this.setState({userData:userdata})}).catch((error)=>{alert("Make sure internet or mobile data turned on")})
      console.log(this.state);
    }

                           //step 2

  inputValues=(e)=>{
       let {name,value}  = e.target;
       this.setState({[name]:value})
  }

                          //step 3

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
//     axios.post("/users/authenticate",data).then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)})
      
   }
}
                         //step 4

validatingform =()=>{

  let emailerr="";
  let passworderr="";


  let {email,userData}=this.state;                            //state emil//
  let filterData=userData.filter((userData)=>userData.email==email)
                         //Uncomment if you dont want required attribute
                    

 // let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$/g

  let pattern2=/^[a-zA-Z0-9]{6,}$/g
 
        //ternary operates
  // let emailCondition= (filterData.length>0)?this.setState({filteredUserData:filterData}):emailerr="Email Not exist";
   
 let emailCondition=filterData.length>0?(()=>{
  this.setState({filteredUserData:filterData})
  console.log(this.state);
  return "";
 })():(emailerr="Email does not match")



  if(this.state.password==0){
    passworderr="Password required*";
  }
  else if(!this.state.password.match(pattern2)){
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
                <input type="email" name="email" placeholder="E-mail id*" className="form-control" onChange={this.inputValues } required />
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