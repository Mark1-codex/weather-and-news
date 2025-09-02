import React from "react";
import { CiSun } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
const Weather = ({}) => {
  return (
    <div className="Weather">
      <div className="weather-card">
        <div className="card-titles">
          <h3 className="card-titles-item">Ukraine</h3>
          <h3 className="card-titles-item">Kyiv</h3>
        </div>
        <h2 className="weather-time">12:00</h2>
        <button className="weather-hourly-forecast">Hourly forecast</button>
        <p className="weather-date">13.10.2025 | Friday</p>
        <CiSun className="weather-icon"/>
        <p className="weather-temperature">22℃</p>
        <p className="smile">￣︶￣</p>
        <div className="weather-settings">
          <div className="weather-setting-leftsection">
            <IoMdRefresh className="weather-settings-leftsection-refresh"/>
            <FaRegHeart className="weather-settings-leftsection-heart"/>
          </div>
          <div className="weather-settings-centralsection">
            <button className="weather-settings-centralsection-button">See more</button>
          </div>
          <div className="weather-settings-rightsection">
            <FaRegTrashCan className="weather-settings-rightsection-trashicon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
