import React from 'react'
import { useState } from 'react'
import { drinksalad } from '../component/data2'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill as Cart } from "react-icons/bs";
import Card from './card';


function Salad() {
    const [salads,setsalad] = useState(drinksalad)
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center apptbg mt-2">
            </div>
    
                <div className="row">
                <Card detail={salads}/>
                </div>
            </div>
            </div>
    
    </>
  )
}

export default Salad