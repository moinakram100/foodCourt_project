import React from 'react'
import { useState } from 'react'
import { pizzas } from '../component/data2'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill as Cart } from "react-icons/bs";
import Card from './card';

function Pizza() {

    const [pizza,setpizza] = useState(pizzas)

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center apptbg mt-2">
            </div>
    
                <div className="row">
                <Card detail={pizza}/>
                </div>
            </div>
            </div>
    
    </>
  )
}

export default Pizza