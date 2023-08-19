import React from "react";
import "./index.css";
import Delivery from "../../../src/img/delivery.png";
import Herobg from "../../../src/img/heroBg.png";
import { heroData } from "../../../src/utils/data";

const HomeContainer = () => {
  return (
    <section className="home-cont" id="home">
      <div className="gridbox-blk">
        <div className="bike-para">
          <p className="bike-text">Bike Delivery</p>
          <div className="deli-bike">
            <img src={Delivery} alt="bike" className="deli-bike-img" />
          </div>
        </div>
        <p className="fast-text">
          The Fastest Delivery in{" "}
          <span className="span-deli-text">Your City</span>{" "}
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, autem
          veritatis corrupti voluptatem sunt harum animi nesciunt ullam ut iste
          accusamus similique maxime ea, minima a perspiciatis voluptate atque
          laudantium.
        </p>
        <button type="button" className="order-btn">
          Order Now
        </button>
      </div>
      <div className="heroimg-div">
        <img src={Herobg} alt="herobg" className="hero-img" />

        <div className="overhead-items">
          {heroData &&
            heroData.map((n) => (
              <div key={n.id} className="hovered-items">
                <img src={n.imgSrc} className="icecream-img" />
                <p className="icecream-text1">{n.name}</p>
                <p className="icecream-text2">{n.decp}</p>
                <p className="icecream-price">
                  {" "}
                  <span className="icecream-price-span">₹</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
