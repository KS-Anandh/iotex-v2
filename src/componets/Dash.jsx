import React,{useEffect, useState} from 'react'
import Device from './Device';
import add from '../../assets/plus.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../globalContext/ContextData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dash = () => {
  const nav=useNavigate("/")
  const [devices,setDevices]=useState([]);
  const [isLoading,setLoading]=useState(false);
  const {id}=useParams();
  const {navState,setNavState,data,setData}=useContext(GlobalContext);
  useEffect(() => {
    setNavState(0);
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    setLoading(true);
    axios.get(`https://iotex-ajgn.vercel.app/projects/project/${id}`)
      .then((res) => {
        setDevices(res.data); // Make sure `res.data` contains the correct state.
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setData]);
  
  
  return (
    <>
   <Link to={`/projects`} ><button style={{margin:"20px 5px",width:"100px",height:"40px",background:"rgb(0, 180, 20)",fontSize:"15px",border:"none",borderRadius:"30px 0px 0px 30px",color:"white"}}>{'Projects'}</button></Link>
    {devices.length==0 && !isLoading?<center style={{margin:'30px 0px'}}>-- NOT DEVICES YET --</center>:""}
    <div className='dash'>
      {
        isLoading?<div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"50px"}}><center style={{fontSize:"25px"}}>Loading ....</center></div>:""
      }
      {
        devices.map((item,key)=>{
          return(
            <Device setDevices={setDevices} deviceId={item._id} projectId={id} key={key}  category={item.deviceCategory} deviceName={item.deviceName} Astatus={item.deviceStatus} Alevel={item.deviceLevel} />
          )
        })
      }
      <div className='addDevice'>
              <p>Add the Device which are you want to monitor and control</p>
           <Link to={`/add/${id}`}><img src={add} /></Link> 
      </div>
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

export default Dash