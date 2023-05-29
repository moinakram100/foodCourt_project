import React from 'react'
import { useState } from 'react'
import { dinlunch } from '../component/data2'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill as Cart } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Add } from '../redux/actions/action';
import Card from './card';

function Lunchdinner() {

    const [lunch,setlunch] = useState(dinlunch)
    const dispatch = useDispatch()
    //console.log(dispatch);

    const datafind = (catg)=>{
             const fdata  = dinlunch.filter((item)=>{
                return item.category==="veg"
             })
             setlunch(fdata)
    }
    const nonvegdatafind = (catg)=>{
             const fdata  = dinlunch.filter((item)=>{
                return item.category==="non-veg"
             })
             setlunch(fdata)
    }
    const send = (e) =>{
        dispatch(Add(e))
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
                    <Card detail={lunch}/>
                </div>
                
            </div>
            </div>
    
    </>
  )
}

export default Lunchdinner