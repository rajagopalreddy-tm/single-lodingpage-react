import axios from  'axios';
import { useRef } from 'react';
import { useState } from 'react';
import React from 'react'

const AddEmp = () => {
    const [res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const post_data=()=>{
    }
    const postEx=async()=>{
      const res=await axios.post('http://localhost:7000/save',{'empid':ref1.current.value,'emp':ref2.current.value,'designation':ref3.current.value,'salary':ref4.current.value,});
      const {data}=res;
      setRes(data);
    }
  return (
    <div>
      EmpId:<input type='text' ref={ref1}/><br></br><br/>
      EmpName:<input type='text' ref={ref2}/><br></br><br/>
      EmpDesig:<input type='text' ref={ref3}/><br></br><br/>
      EmpSal:<input type='text' ref={ref4}/><br></br><br/>
      <button onClick={post_data}>Post</button>
      <p>{JSON.stringify(res)}</p>
    </div>
  )
}
export default AddEmp

