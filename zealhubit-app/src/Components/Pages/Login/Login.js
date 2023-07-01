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
    filterDataWrong:[],
    loggedIn:false,
  }

                                //step 1

    componentDidMount(){
      this.apiFetch();
    }

    apiFetch=async()=>{
      let url="https://fakestoreapi.com/users";

     await fetch(url).then((userdata)=> userdata.json()).then((userdata)=>{this.setState({userData:userdata})}).catch((error)=>{alert("Make sure internet or mobile data turned on")});
     console.log(this.state);

    // await fetch(url,
    // {
    //   method:"GET",
    //   headers:{                                           //NOTE THIS IS LIVE Rest api calling
    //     "app-id":"63d673d486eba5763c2537e5",
    //   }
    // }
    // ).then((userdata)=> userdata.json()).then((userdata)=>{this.setState({userData:userdata})}).catch((error)=>{alert("Make sure internet or mobile data turned on")});
     
    }

                           //step 2

  inputValues=(e)=>{
       let {name,value}  = e.target;
       this.setState({[name]:value})
                                            //trail starts
      
     
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
        fileter:this.state.filteredUserData
      }
   

      // Make the POST request
//     axios.post("/users/authenticate",data).then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)})
      
   }
}
                         //step 4

validatingform =()=>{
                            // let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$/g
                           // let pattern2=/^[a-zA-Z0-9]{6,}$/g

  let emailerr="";
  let passworderr="";


  let {email,userData}=this.state;                            //state emil//
    console.log(email);
  console.log(userData);

 //let filterData=(userData.filter((userData)=>userData.email===email))? "yes": [{password:"error"}];
 let filterData= userData.filter((userData)=>userData.email===email);
                         //Uncomment if you dont want required attribute
       console.log(filterData);
     // console.log(filterData[0].password)     NOTE Just for checking

        //ternary operates 1st condition
 let emailCondition= (filterData.length>0)?emailerr="":emailerr="Email Not exist";
   
  // console.log(this.state);

  // else if(!this.state.password.match(pattern2)){
  //   passworderr="Password should be minimum 6 char";
  //  }
  if(this.state.password==0){
    passworderr="Password required*";
  }
  else if(filterData[0].password===this.state.password){
       passworderr="";
      //  this.setState({loggedIn:true});
  }
  else{
    passworderr="Password didnt match";
  }

   if(emailerr||passworderr){
    this.setState({emailerr:emailerr,passworderr:passworderr});
    return false;
   }
   else{
    this.setState({emailerr:emailerr,passworderr:passworderr});
    return true;
   }
  
  }

    render(){
      // const {emailerr,passworderr}=this.state;                         Note: if you want to display the button disable just declare this here
      // const buttonDisableonCondition= emailerr||passworderr;           Note: This is declared below render() we can declare above render() also reason why we can declared here means once component is renders latest state value get updated here. 
      // disabled={buttonDisableonCondition}                              Then Add this in button

      let {loggedIn}=this.state;
      // console.log(loggedIn)

        return(
            <section class={Loginstyle.formControlling}>
              <form onSubmit={this.controllingLogin}>
                <span className="text-warning fs-3 p-1 bg-transparent">Login</span><span className="fs-3 p-3 bg-transparent">&#129488;</span>
                <input type="email" name="email" placeholder=" Email / Full name*" className="form-control" onChange={this.inputValues } required />
                <p>{this.state.emailerr}</p>
                <input type="password" name="password" placeholder="Password*" className="form-control" onChange={this.inputValues } />
                <p>{this.state.passworderr}</p>
                <h6>By continuing, I agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></h6>
                <button className="btn btn-warning" >Submit</button>
                <h6 >Have trouble logging in? <a href="#">forgot password?</a></h6>
              </form>
            </section>
        )
    }
}
export default Login;










