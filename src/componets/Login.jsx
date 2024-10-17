import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/login.jpeg'
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom'
import { GlobalContext } from '../globalContext/ContextData'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInGoogle from './devices/SignInGoogle'

const Login = ({setPage}) => {
  const nav=useNavigate()
const {navState,setNavState}=useContext(GlobalContext);
const [name,setName]=useState(null);
const [pass,setPass]=useState(null);
const [mail,setMail]=useState(null);
  useEffect(()=>{
    setNavState(1);
    if(localStorage.getItem("token")){
      nav("/projects");
    }
  },[])
  const loginHandler=async()=>{
    try{
    await axios.post("https://iotex-ajgn.vercel.app/users/login",{userMail:name.toLowerCase(),userPass:pass})
    .then((res)=>{
      localStorage.setItem("token",res.data);
      toast.success('Login Success', {
        position: "top-center",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
      setTimeout(()=>{
        nav("/projects")
      },3000)
    })
    .catch((err)=>{
      toast.error("Invalid Credintial", {
        position: "top-center",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    })
  }
  catch(err){
    toast.error("Invalid Credintial", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });
  }
  }
  return (
    <>
    <div className='login'>
        <img src={logo} alt="" className='loginImg' />
        <input type="text" placeholder=' Enter your mail' onChange={(e)=>setName(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
    {/* <Link to="/projects"> */}
    <div style={{display:"flex",alignItems:"center",columnGap:"10px",justifyContent:"center",margin:"10px 0px"}}>
    <button className='login-btn' onClick={loginHandler}>Login</button>
    <Link to="/register"> <p style={{color:"darkblue",fontSize:15}}>New User ?</p></Link>
    </div>
   
    {/* </Link>  */}
      
      <SignInGoogle/>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
    
    </>
  )
}

export default Login