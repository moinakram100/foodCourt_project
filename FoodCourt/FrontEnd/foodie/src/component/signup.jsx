import React from 'react'
import img from '../assets/images/img1.jpg'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate()
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [mobile,setmobile] = useState("")
    const [password,setpassword] = useState("")
    
    const dataRegister = async ()=>{

         if(!name || !email || !mobile ||!password){
            toast.error("Please Enter your full details !!")
         }
        const data = await fetch("/signup",{
            method : "POST",
            body : JSON.stringify({name,email,mobile,password}),
            headers : {
                "Content-Type":"application/json"
            }
        })
        const result = await data.json()
        console.log(result.message);
        if(result.mobile){
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        }
    }
    return (
        <>
            <img className="loginImage" src={img} alt="login" />
            <div className="container-fluid signUpcard">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12 loginPage">
                            <h3 className='signupText'>SignUp</h3>
                            <div className="mb-3">
                                <input type="text" name='name' placeholder="Full Name" className="textbox" onChange={((e)=>setname(e.target.value))} />
                                <input type="email" name='email' placeholder="Email Address" className="textbox" onChange={((e)=>setemail(e.target.value))}/>
                                <input type="number" name='mobile' placeholder="Mobile" className="textbox" onChange={((e)=>setmobile(e.target.value))}/>
                                <input type="password" name='password' placeholder="Password" className="textbox" onChange={((e)=>setpassword(e.target.value))} />
                                <button className="button" type="submit" onClick={dataRegister}>Register</button>
                            </div>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-center'/>
        </>
    )
}


export default Signup