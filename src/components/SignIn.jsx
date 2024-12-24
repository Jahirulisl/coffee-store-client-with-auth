import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {

       //  from auth Provider 1 stp start>>
  const {signInUsers} = useContext(AuthContext);
      //  from auth Provider 1 stp end>>

  const handleSignIN = e =>{
    e.preventDefault();
       //for data access strt
   const email = e.target.email.value;
   const password = e.target.password.value; 

   console.log(email,password);
       //  from auth Provider stp 2 start>>
    signInUsers(email,password)
   .then(result => {
    console.log(result.user);
         
       //update last login time start >>
     const lastSignInTime =result?.user?.metadata?.lastSignInTime;

     const loginInfo = {email,lastSignInTime};
     fetch(`http://localhost:5000/users`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(loginInfo)
     })
     .then(res => res.json())
     .then(data =>{
      console.log('sign in info updated in db',data)
     })

    
   })
   .catch(error => {
    console.log(error)
   })
      //  from auth Provider stp 2 end>>

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIN} className="card-body">
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
             <p>If you new user please <Link to="/signup">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
