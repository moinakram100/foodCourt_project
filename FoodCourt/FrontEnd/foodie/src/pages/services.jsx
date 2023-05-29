import React from 'react'
import img from "../assets/images/services.jpg"
import "../assets/css/service.css"
import { MdDeliveryDining as Deliver,MdWineBar as Vine,MdWifi as Wifi } from "react-icons/md";
import { GiSofa as Lounge } from "react-icons/gi";
import { FaBirthdayCake as Bday,FaCreditCard as Card } from "react-icons/fa";


function Services() {
  return (
    <>
    <div className="container-fluid">

      <div className="services">
        <img src={img} className='sImage' alt="service_image" />
        <h1 className='sText text-center'>the best place <br /> <span className='sSpan'>to have a good meal & Services</span> </h1>
        <h1 className='sHeading text-center'>WELCOME TO <span style={{ color: "red" }}>AT RESTAURANT</span></h1>
        <h4 className='sHeading2 text-center text-secondary'>It's time to celebrate the best <br /> <span style={{ color: "#0033ff" }}>event Organizers </span></h4>

        <div className="service_card">
          <div className="row">
            <div className="col-md-4">
            <figure>
            <img src="https://www.bookeventz.com/blog/wp-content/uploads/2016/09/birthday_party.jpg" alt="Mountains" />
          </figure>
            </div>
            <div className="col-md-4">
            <figure>
            <img src="https://1.bp.blogspot.com/_5Qyaj-ZMjCM/TN49llaFiQI/AAAAAAAAAKI/OtD-HwuoBOQ/s1600/PB190750.JPG" alt="Mountains" />
          </figure>
            </div>
            <div className="col-md-4">
            <figure>
            <img src="http://markaz-organizer.com/wp-content/uploads/2015/11/One_Day_Event_Organizer_Surabaya_-62-31-91439578_MARKAZ_organizer.jpg" alt="Mountains" />
          </figure>
            </div>
          </div>
         
        </div>

        <div className="services_menu my-5">
          <h2 className='text-center text-primary underline'>OUR SERVICES</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Deliver className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Delivery</h2>
                  <h6>Order food online and get delicious meals delivered to your doorstep from EatSure India's most recommended food delivery service.</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Vine className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Bar</h2>
                  <h6>It is the counter area of the bar where guest orders their drinks. It is an area where bottles of liquors and rows of sparkling glassware are displayed.</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Wifi className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Free Wi-Fi</h2>
                  <h6>Providing free restaurant WiFi to help people stay connected as they enjoy their food makes good business sense in a lot of ways. </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Lounge className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Lounge</h2>
                  <h6> Not only having unlimited good food, coffee and snacks, the lounge is a little space of quietness in the very crowded restaurant. </h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Bday className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Event</h2>
                  <h6>Indulged in offering a full complement of catering services to fit any party or event plans, we have gained huge market in this domain.</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceCard1">
                <div className="card-avatar">
                  <Card className='fs-1' />
                </div>
                <div className="card-details">
                  <h2>Card Payment</h2>
                  <h6>The customer can recharge the card with Cash, Credit Card or PayTM. Card Balance refund, security policy, validity can be customized. </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services