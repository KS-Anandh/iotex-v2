import React, { useState } from 'react'
import Code from './Code';
import Doc from './Doc';
import Examples from './Examples';

const Guide = () => {
    const [page,setPage]=useState(0);
  return (
    <div className='ducumentaion'>
         <div className="switch">
             <button onClick={()=>{setPage(0)}} style={{background:page==0?"orange":""}}>Code Guide</button>
             <button onClick={()=>{setPage(1)}} style={{background:page==1?"orange":""}}>Web Guide</button>
             <button onClick={()=>{setPage(2)}} style={{background:page==2?"orange":""}}>Examples</button>
         </div>
         {page==0?<Code/>:page==1?<Doc/>:<Examples/>}
    </div>
  )
}

export default Guide