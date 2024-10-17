import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import cross from '../../assets/cross.png'
import profile from '../../assets/login.jpeg'
import more from '../../assets/menu.png'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../globalContext/ContextData';
import axios from 'axios';
import Login from './Login'
const NavBar = () => {
const [userMail,setUserMail]=useState(null);
const [userName,setUserName]=useState(null);
  const nav=useNavigate()
  const [navBar,setNavBar]=useState(true);
  const buttonPressed=()=>{
    setNavBar((prev)=>!prev)
  }
  useEffect(()=>{
    const token=localStorage.getItem("token");
    axios.get("https://iotex-ajgn.vercel.app/users/verify",{headers:{token:token}})
    .then((res)=>{
      const data=res.data;
        setUserName(data.userName);
        setUserMail(data.userMail);
    })
  })
  const {navState,setNavState}=useContext(GlobalContext);

  return (
    <>
    <div className='navBar' >
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",columnGap:"30px",height:"120px"}}>
       <img src={logo} alt="" width={80} height={80} />
       <h3 style={{color:"rgb(204, 3, 93)",fontSize:"25px"}}><span style={{color:"rgb(44, 6, 50)"}}>IOT</span>EX</h3>
       </div>
       <input id="checkBox" defaultChecked={true} onChange={e=> setNavBar(e.target.checked)} type='checkBox' style={{display:"none"}}/>
     {navBar && !navState==1?<label htmlFor='checkBox' ><img src={more}  width={30} height={30}/></label> :navBar==1?"":< label htmlFor='checkBox'><img src={cross} width={30} height={30}/></label>}  
    </div>
    {
      navState==1?"":
      (
        <div className='sideNav' style={{right:navBar?'':"0px",overflow:"hidden"}}>
       <ul>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"10px",marginBottom:"0px"}}>
          <img src={profile} width={30} height={30} style={{borderRadius:"50%"}}/>
          <div style={{fontSize:"10px",display:"flex",flexDirection:"column",rowGap:"5px"}}>
            <p style={{fontSize:"18px"}}>{userName}</p>
            <p>{userMail}</p>
          </div>
        </div>
        <button onClick={()=>{
        localStorage.removeItem("token");
        setNavBar((prev)=>!prev)
        nav("/")
       }} style={{backgroundColor:"red",border:"none",color:"white",fontSize:"13px",width:"60px",borderRadius:"20px",height:"20px",display:'flex',alignItems:"center",justifyContent:"center",marginBottom:"30px"}}>Logout</button>
        <button onClick={()=>{
          setNavBar((prev)=>!prev)
          nav("/documentaion");
        }} style={{backgroundColor:"inherit",border:"none",color:"white",fontSize:"18px"}}>Documentation</button>
        <Link to="/projects"><button onClick={buttonPressed} style={{backgroundColor:"inherit",border:"none",color:"white",fontSize:"18px"}} >Projects</button></Link>
      
      </ul>
    </div>
      )
    }
    
    </>
  )
}

export default NavBar