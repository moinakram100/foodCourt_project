import React from 'react'
import img from '../assets/images/img1.jpg'
import { Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate()
    const [email,setemail] = useState("")    
    const [password,setpassword] = useState("") 
    
    const loginData = async() =>{

       if(!email || !password){
        toast.info("please Enter your Email and Password!!")
       }
       else{
           const data = await fetch("/login",{
               method:"POST",
               body:JSON.stringify({email,password}),
               headers:{
                   "Content-Type":"application/json"
               }
           })
           const result = await data.json()
           if(result.mobile){
               localStorage.setItem("user",JSON.stringify(result))
               navigate("/")
               toast("successful")
           }
           else{
               toast.error("Invalid Email or Password")
           }
       }
       }

    useEffect(()=>{
        const person = localStorage.getItem("user")
        if(person){
            navigate("/")
        }
    },[])

    return (
        <>
            <img className="loginImage" src={img} alt="login" />
            <div className="container-fluid logincard">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-11 loginPage">
                        
                            <h3 className='signupText'>Login</h3>
                            <div className="mb-1">
                                <input type="email" placeholder="Email Address" className="textbox" onChange={((e)=>setemail(e.target.value))}/>

                                <input type="password" placeholder="Password" className="textbox" 
                                onChange={((e)=>setpassword(e.target.value))} />

                                <button className="button" type="submit" onClick={loginData}>Login</button>
                            </div>
                            <div className="d-grid justify-content-left">
                                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                    <Link href=""> forgot Password</Link>
                                </button>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit"><Link to="/signup"> Register</Link>
                                </button>
                            </div>

                    </div>
                </div>
            </div>
            <ToastContainer position='top-center'/>
        </>
    )
}

export default Login