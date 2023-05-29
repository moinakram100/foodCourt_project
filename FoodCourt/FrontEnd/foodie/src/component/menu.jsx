import React from 'react'
import '../assets/css/menu.css'
import { Link } from 'react-router-dom'
import { lunch,appetizer,dessert,salads,pizzas} from '../component/data2'
import { useState } from 'react'
import Card2 from './card2'

function Menu() {
    const [data, setdata] = useState(lunch)
    const [appt, setappt] = useState(appetizer)
    const [desserts, setdesserts] = useState(dessert)
    const [salad, setsalads] = useState(salads)
    const [pizza, setpizza] = useState(pizzas)
  return (
    <>
    <div className="container-fluid">
        <div className="row mt-2">
            <ul className='menulist'>
                <li><h4 className='my-1'>Appetizer</h4></li>
                <li className='my-2'><h6><Link to="/appetizer" className='viewlink'>view all</Link></h6></li>
            </ul>
            <Card2 detail={appt} />
        </div>


        <div className="row mt-2">
            <ul className='menulist'>
                <li><h4 className='my-1'>Lunch or Dinner</h4></li>
                <li className='my-2'><h6><Link to="/lunch" className='viewlink'>view all</Link></h6></li>
            </ul>
            <Card2 detail={lunch} />
        </div>


        <div className="row mt-2">
            <ul className='menulist'>
                <li><h4 className='my-1'>Desserts</h4></li>
                <li className='my-2'><h6><Link to="/dessert" className='viewlink'>view all</Link></h6></li>
            </ul>
            <Card2 detail={desserts} />
        </div>


        <div className="row mt-2">
            <ul className='menulist'>
                <li><h4 className='my-1'>Salads and Drinks</h4></li>
                <li className='my-2'><h6><Link to="/salad" className='viewlink'>view all</Link></h6></li>
            </ul>
            <Card2 detail={salads} />
        </div>


        <div className="row mt-2">
            <ul className='menulist'>
                <li><h4 className='my-1'>Pizza's and Burgers</h4></li>
                <li className='my-2'><h6><Link to="/pizza" className='viewlink'>view all</Link></h6></li>
            </ul>
            <Card2 detail={pizza} />
        </div>
    </div>
    </>
  )
}

export default Menu