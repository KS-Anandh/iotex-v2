import React, { useState } from 'react'
import {auth,provider} from '../../../config.js'
import {signInWithPopup} from 'firebase/auth'
import axios from 'axios';
import google from '../../../assets/google.png'
import { useNavigate } from 'react-router-dom';
const SignInGoogle = () => {
  const nav=useNavigate();
    const GoogleHandler=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      const gmail=data.user.email;
      const name=data.user.displayName;
      axios.post("https://iotex-ajgn.vercel.app/users/gmail",{userName:name,userMail:gmail},{headers: {'Content-Type': 'application/json'}})
      .then((res)=>{
        localStorage.setItem("token",res.data);
        nav("/projects")
      })
      .catch((err)=>{
        alert(err)
      })
    })
    }

  return (
    <div>
        <button onClick={GoogleHandler} style={{padding:"10px",border:"none",display:"flex",width:"200px",height:"40px",background:"black",color:"white",borderRadius:"20px",alignItems:"center",justifyContent:"space-evenly",fontSize:"15px",margin:"20px 0px"}}>
          <img src={google} alt="" width={30} height={30} />
          Sign-In With Google
          </button>
    </div>
  )
}

export default SignInGoogle