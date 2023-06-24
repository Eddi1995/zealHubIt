import Signupstyle from "./Signup.module.css"



function Signup(){
    return(
        <>
        <section class={Signupstyle.SignupParent}>
            <form method="GET">
            <h5 className="text-warning">Create An Account</h5>
            <input className="form-control" type="firstname" name="firstname" placeholder="Firstname"/>
            <p></p>
            <input className="form-control" type="lastname" name="lastname" placeholder="Lastname"/>
            <p></p>
            <input className="form-control" type="email" name="email" placeholder="Email"/>
            <p></p>
            <input className="form-control" type="password" name="password" placeholder="Password"/>
            <p></p>
            <input className="form-control" type="password" name="password" placeholder="Confirm Password"/>
            <p></p>
            <input className="form-control" type="date" name="birthday"/>
            <p></p>
            <label className="p-3" for="male">Male</label>
            <input className="p-1" type="radio" name="gender" value="male" />
            <span></span>
            <label className="p-3" for="female">Female</label>
            <input className="p-1" type="radio" name="gender" value="female" />
            <span></span>
            <label className="p-3" for="others">Others</label>
            <input className="p-1" type="radio" name="gender" value="Others" />
            <p></p>

            <input type="checkbox" name="Confirming"/>
            <span className="p-1">Creating your account and you accepting <a href="#">Terms & Conditions</a></span>
            <p></p>
            <input className="btn btn-warning" type="submit" value="Create Account" />
            </form>



        </section>
        </>
    )
}
export default Signup;