import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  //from authprovider password authintaion stp 1 strt>>
  const {createUser} = useContext(AuthContext);
   //from authprovider password authintaion stp 1 end!!

    const handleSignUp = e=>{
    e.preventDefault();
    // console.log('form sign up');

    //from authprovider password authintaion stp 2 strt>>
     const name = e.target.name.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log('from signUp',email,password,name);
    
     createUser( email, password)
     .then(result=>{
       console.log('user created at fb', result.user);

       const createdAt = result.user.metadata.creationTime;

       const newUser ={name,email,createdAt} //data reletade

      //save new user info to the database start>>
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.insertedId){
            console.log('user created to db')
          }
        })
  
       //save new user info to the database end


    
     })
     .catch(error =>{
      console.log('error',error)
     })

     //from authprovider password authintaion stp 2 end!!

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your Name"
                name = "name"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name = "email"
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
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
