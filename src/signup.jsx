import './App.css'
import React, { useState } from "react";

const Signup=()=>{
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[uname,setUname]=useState("")
    const[password,setPassword]=useState("")
    const[confirm,setConfirm]=useState("")

    const[errfname,setFnameError]=useState("")
    const[errlname,setLnameError]=useState("")
    const[erruname,setUnameError]=useState("")
    const[errpassword,setPasswordError]=useState("")
    const[errconfirm,setConfirmError]=useState("")

    function submit(){
            if(fname===""){
                setFnameError("Enter First Name")
                // setFnameError("")
            }
            if(lname===""){
                setLnameError("Enter last Name")
                // setLnameError("") 
            }
            if(uname==""){
                setUnameError("Enter User name")
            }
            if(password==""){
                setPasswordError("Enter Password ")
            }
            if(confirm==""){
                setConfirmError("Confirm Password ")
            }
            
         
           

    }
    return(
        <>
        <div class="flex">
            
                <input placeholder="First name" value={fname} type="text" onChange={(e)=>setFname(e.target.value)}/>
                {errfname&&<span> {errfname}</span>}
                <input placeholder="Last name" value={lname} type="text" onChange={(e)=>setLname(e.target.value)}/>
                {errlname &&<span>{errlname}</span>}
     
                <input placeholder="Username" value={uname} type="text" onChange={(e)=>setUname(e.target.value)}/>
                {erruname && <span>{erruname}</span>}
           
                <input placeholder="Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
                {errpassword && <span>{errpassword}</span>}
                <input placeholder="Confirm" value={confirm} type="password" onChange={(e)=>setConfirm(e.target.value)}/>
                {errconfirm && <span>{errconfirm}</span>}
            
            <button onClick={()=>{submit()}}>Submit</button>
            
        </div>
        </>
    )
}
export default Signup;