import React from 'react'
import { useState } from 'react'
import { appetdata } from '../component/data2'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill as Cart } from "react-icons/bs";
import Card from './card';
function Appt() {

    function reducer(state,action){
        switch(action.type){
            case 'veg':
                return {}
        }
    } 
    const [appetizer,setappetizer] = useState(appetdata)

    const datafind = (catg)=>{
             const fdata  = appetdata.filter((item)=>{
                return item.category==="veg"
             })
             setappetizer(fdata)
    }
    const nonvegdatafind = (catg)=>{
             const fdata  = appetdata.filter((item)=>{
                return item.category==="non-veg"
             })
             setappetizer(fdata)
    }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center apptbg mt-2">
            <button className="button-5 m-1" role="button" onClick={(()=>datafind("veg"))}>Veg</button>
            <button className="button-5 m-1" role="button" onClick={(()=>nonvegdatafind("non-veg"))}>Non-veg</button>
            </div>
    
                <div className="row">
                    <Card detail={appetizer}/>
                </div>
            </div>
            </div>
    </>
  )
}

export default Appt