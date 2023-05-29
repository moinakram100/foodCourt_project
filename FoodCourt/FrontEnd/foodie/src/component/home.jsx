import React from "react";
import home from "../assets/images/home.jpg";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import chef from "../assets/images/chef.jpeg";
import chef1 from "../assets/images/chef1.jpg";

function Home() {
  return (
    <>
      <img className="homeImg" src={home} alt="home" />
      <div className="container-fluid">
        <div className="row myform text-center">
          <div className="col-md-11 col-sm-11 col-11">
            <h1 className="mainText1">WELCOME TO FOODCOURT</h1>
            <h2 className="mainText2">Eat Healthy and Natural Food</h2>
            <h3 className="mainText3">
              FoodCourt is a restaurent,bar and coffee roastery located in
              Noida. We have awesome recipes and most talented chefs in town.
            </h3>

            <button className="button-6 mx-2 mt-2" role="button">
              <Link className="nav-link" to="/menu">
                Order Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="homepage">

        <div className="chefbox my-3">
          <h1 className="cheftxt text-center text-white">
            Made for you <br />
            with love{" "}
          </h1>
          <div className="chefTalk shadow p-3 mb-5 bg-white rounded">
            <img
              src={chef}
              style={{ width: "250px", height: "250px", borderRadius: "50%" }}
              alt=""
            />
            <div className="chefTalk1">
              <h2 className="">Best Chef In Field </h2>
              <p >
                Our Chefs are culinary professionals trained in all aspects of
                food preparation. Their main responsibilities include planning
                menus, overseeing the kitchen staff, and ensuring that the food
                meets high-quality standards.
              </p>
            </div>
          </div>
          <div className="chefTalk shadow p-3 mb-5 bg-white rounded">
            <div className="chefTalkInner">
              <h2 className="">Our Chef's Choice </h2>
              <p >
                Get the most out of your night by letting our Culinary Brigade get creative.
                Expand your horizons! the menu remains a surprise until the night of yoyr dinner.
              </p>
            </div>
            <img
              src={chef1}
              style={{ width: "250px", height: "250px", borderRadius: "50%", float: "right" }}
              alt=""
            />
          </div>
        </div>

        <h1 className="text-center text-white cheftxt">Testimonials</h1>
        <div className="test  shadow p-3 mb-5 bg-white rounded">
          <figure className="innerTest">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="testimonial1" className="profile" />
            <figcaption>
              <h2>Nargis</h2>
              <blockquote>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.</blockquote>
            </figcaption>
          </figure>
          <figure className="innerTest hover">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="testimonial2" className="profile" />
            <figcaption>
              <h2>Binay Tyagi</h2>
              <blockquote>The ambiance is very welcoming and charming. Amazing wines, food & service. Staff are extremely knowledgeable and make great recommendations.</blockquote>
            </figcaption>
          </figure>
          <figure className="innerTest">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="testimonial3" className="profile" />
            <figcaption>
              <h2>Anuska singh</h2>
              <blockquote>I have to say, I enjoyed every single bite of the meal in. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. </blockquote>
            </figcaption>
          </figure>

        </div>
      </div>
    </>
  );
}

export default Home;
