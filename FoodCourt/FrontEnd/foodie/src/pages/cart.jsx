import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import cartReducer from "../redux/reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import '../assets/css/cart.css'
import { Del } from "../redux/actions/action";
import { FaTrashAlt as Delete,FaCartPlus as Empty_Cart } from "react-icons/fa";

function Cart() {
  const [price, setprice] = useState([])

  const data = useSelector((state) => state.cartReducer.carts);
  console.log(data);
  const dispatch = useDispatch()

  const totalPrice = () => {
    let price = 0
    data.map((item) => {
      price = parseInt(item.price) + price
    })
    setprice(price)
  }


  useEffect(() => {
    totalPrice()
  },[])


  return (
    <>
      <div className="container shadow p-3 mb-5 my-3 bg-dark rounded">
        {
          data.length?<h2 className="cartHead">Shopping Cart</h2>:""
        } 
        {data && data.length ?
          (
            data.map((item) => {
              return (
                <div className="container-fluid cardBody ">
                  <div className="row cartSample shadow p-3 bg-white rounded">
                    <div className="col-md-2 cartImage">
                      <img src={item.image} alt="mealImage" />
                    </div>
                    <div className="col-md-2 cart_details">
                      <th className="text-dark">NAME</th>
                      <br />
                      <td className="text-dark">{item.name}</td>
                    </div>
                    <div className="col-md-2">
                      <th className="text-dark">QUANTITY</th>
                      <br />
                      <td className="text-dark">1</td>
                    </div>
                    <div className="col-md-2">
                      <th className="text-dark">PRICE</th>
                      <br />
                      <td className="text-dark">₹ {item.price}</td>
                    </div>
                    <div className="col-md-2">
                      <th className="text-dark">TOTAL PRICE</th>
                      <br />
                      <td className="text-dark">₹ {item.price}</td>
                    </div>
                    <div className="col-md-2">
                      <th className="text-dark">REMOVE</th>
                      <br />
                      <td className="text-dark">
                        <button className="remove_cartItem" onClick={(() => dispatch(Del(item.id)))}>
                          <Delete className="text-danger fs-4" />
                        </button>
                      </td>
                    </div>
                  </div>
                </div>
              )}
            )

          )
          : (
            <div className="container-fluid">
              <div className="row" style={{ height: "80vh" }}>
                <h1 className="empty_cart">Cart is Empty <Empty_Cart/></h1>
              </div>
            </div>
          )}
        {
          data.length ?
            <div className="container-fluid cost_area my-2">
              <div className="row cashSample shadow p-3 mb-5 bg-white rounded">
                <div className="cart_static rounded">
                  <h3>Order Total ({(data.length)} items) :₹ {price}</h3>
                </div>
                <div className="cost_button">
                  <Link to='/menu'>
                    <button className="button-6 bg-secondary text-white" role="button">Continue Shopping</button>
                  </Link>

                  <Link to='/check'>
                    <button className="button-5 btn-5" role="button">Pay</button>
                  </Link>
                </div>
              </div>
            </div>
            :
            ""
        }
      </div>
    </>
  );
}

export default Cart;
