import React from "react";
import hotelData from "./hotelData.json";
import "./body.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import {CiLocationOn} from "react-icons/ci"
import {HiOutlineHome} from "react-icons/hi"
import {BiBed,BiBath} from "react-icons/bi"
import {BsArrowsMove} from "react-icons/bs"
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="item-container">
      {hotelData.hotels.map((hotel, index) => (
        <div key={index} className="upper">
          <div className="banner">
            <div className="image-container">
              <img src={hotel.image} alt="" />
              <div className="status">
              <button className="btn btn-light text-primary">{hotel.status}</button>
              <button className="btn btn-light ">
                {hotel.like ? <FcLikePlaceholder /> : <FcLike />}
              </button>
            </div>
            </div>
           
          </div>
          <div className="m-3">
            <span><CiLocationOn/>{hotel.hotelLocation}</span>
            <h2 ><b>{hotel.hotelName}</b></h2>
            <div className="d-flex flex-row justify-content-around">

            <div className="d-flex flex-column"><HiOutlineHome/>{hotel.numberOfRooms} Room</div>
            <div className="d-flex flex-column"><BiBed/>{hotel.numberOfBeds} Bed</div>
            <div className="d-flex flex-column"><BiBath/>{hotel.numberOfBathrooms} Bath</div>
            <div className="d-flex flex-column"><BsArrowsMove/>{hotel.areaOfRoom} </div>

            </div>
            <hr />
            <div className="d-flex justify-content-around align-items-center">
              <div className="price"><b>{hotel.price}</b>/month</div>
              <Link to={`${hotel.hotelName}`}>
                {" "}
                <button className="btn btn-light text-bold colour-blue">
                  Read More
                </button>
              </Link>
            </div>
            
            </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
