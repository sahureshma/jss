import React, { useState } from 'react';
import './SignInpage.css';
import {useNavigate} from 'react-router';

function SignIn(){
  const navigate = useNavigate();
  
  const[email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const emailRegex=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
  const PasswordRegex=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleEmailchange= (event)=>{
    setEmail(event.target.value);
  };
  const handlePasswordchange= (event)=>{
    setPassword(event.target.value);
  };
  const handleSumbit= (event)=>{
    event.preventDefault();
 
  // if(email=="" || password == ""){
  //   return alert('Enter email id & password');
  // }

  if(!emailRegex.test(email)){
  alert("enter valid Email id")
 } 
 else if (!PasswordRegex.test(Password)){
    alert("enter valid password");
  } else{
    const userRegistrationdata=JSON.parse(
      localStorage.getItem(email)
    );
    console.log(userRegistrationdata);
    if(userRegistrationdata && userRegistrationdata.email===email){
           if(userRegistrationdata.password===Password){
            alert("Login Successfully")    
            navigate("/#home");
        } else {
          alert("Please Enter Correct Password");
        }
      }else {
        alert("user not registered")
      }
  }
};
    return(
        <div className="App">
        <div className='logo-box'>
          <form>
            <input
             type="text"
             name="email"
              placeholder=" email id"
              value={email}
            onChange={handleEmailchange}
            />
            <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={Password}
            onChange={handlePasswordchange}
            />
            <button onClick={handleSumbit}>Next</button>
            </form>
         
          <button> Forget Password</button>
          <p>
            Don't Have an account
            <a onClick={()=>navigate("/signup")} href='#'>SignUp</a>
            </p>
        </div>
      </div>
    );
  };
  
  export default SignIn;