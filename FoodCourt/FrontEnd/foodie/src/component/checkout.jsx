import React, { useState } from 'react'
import "../assets/css/checkout.css"
import checkOutImage from "../assets/images/check.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CheckOut() {

    const [card_name, setCard_name] = useState('')
    const [card_num, setCard_num] = useState('')
    const [card_type, setCard_type] = useState('')
    const [card_expire, setcard_expire] = useState('')
    const [card_cvv, setcard_cvv] = useState('')

    const getCheckoutData = async() => {
        if (!card_name || !card_num || !card_type || !card_expire || !card_cvv) {
            toast.info("Enter your card details!!")
        }
        else{
            const data = await fetch("/payment",{
                method : "POST",
                body : JSON.stringify({card_name,card_num,card_type,card_expire,card_cvv}),
                headers : {
                    "Content-Type":"application/json"
                }
            })
            const result = await data.json()
            if(result.result=="Done"){
                toast.success(result.message)
            }
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-md-12">
                        <div className="mainscreen">
                            <div className="checkCard">
                                <div className="leftside">
                                    <img
                                        src={checkOutImage}
                                        className="product"
                                        alt="Shoes"
                                    />
                                </div>
                                <div className="rightside">
                                    <h2 className='checkHeading'>Payment Information</h2>
                                    <p>Cardholder Name</p>
                                    <input type="text" className="inputbox" onChange={(e => setCard_name(e.target.value))} name="name" required />
                                    <p>Card Number</p>
                                    <input type="number" className="inputbox" onChange={(e => setCard_num(e.target.value))} name="card_number" id="card_number" required />

                                    <p>Card Type</p>
                                    <select className="inputbox" defaultValue={"default"} onChange={(e => setCard_type(e.target.value))} name="card_type" id="card_type" required>
                                        <option value="defaut" disabled>Select a Card Type</option>
                                        <option value="Visa">Visa</option>
                                        <option value="RuPay">RuPay</option>
                                        <option value="MasterCard">MasterCard</option>
                                    </select>
                                    <div className="expcvv">

                                        <p className="expcvv_text">Expiry</p>
                                        <input type="date" className="inputbox" name="exp_date" id="exp_date" onChange={(e => setcard_expire(e.target.value))} required />

                                        <p className="expcvv_text2">CVV</p>
                                        <input type="password" onChange={(e => setcard_cvv(e.target.value))} className="inputbox" name="cvv" id="cvv" required />
                                    </div>
                                    <p></p>
                                    <button type="submit" onClick={getCheckoutData} className=" checkoutBtn">CheckOut</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer position='top-center' />
        </>
    )
}

export default CheckOut