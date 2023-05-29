import React, { useState } from 'react'
import "../assets/css/card.css"
import CheckOut from './checkout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add } from '../redux/actions/action'

function Card(props) {
    const [cart_data,setcart_data]= useState([])
    const dispatch = useDispatch()
    const sendData = (ele) => {
        dispatch(Add(ele))
    }

    return (
        <>
            <div className="container-fluid mx-auto mt-2 cardbg">
                <div className="row">
                    {
                        props.detail.map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <section>
                                            <div className="cardContainer">
                                                <div className="card" style={{ width: "300px", height: "400px", background: "rgba(100, 51, 51, 0.05)" }}>
                                                    <div className="content">
                                                        <div className="imgBx">
                                                            <img style={{ width: "280px" }} src={item.image} />
                                                        </div>
                                                        <div className="contentBx">
                                                            <h3>{item.name} <br /><span>₹ {item.price}</span> </h3>
                                                        </div>
                                                    </div>
                                                    <ul className="sci" key={index}>
                                                        <li>
                                                            <Link to="/cart" className='cartxt' onClick={(() => sendData(item))}>Add-To-Cart</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/check" className='cartxt'>Order</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card