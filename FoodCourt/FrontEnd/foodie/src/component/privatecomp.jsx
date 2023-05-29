import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function Privatecomp() {
    const person = localStorage.getItem("user")
  return person ? <Outlet/> : <Navigate to="/signup"/>
}

export default Privatecomp

