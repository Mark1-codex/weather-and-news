import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Weather.css";
import { IoMdRefresh } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Weather = () => {
  const [query, setQuery] = useState("");       // input field
  const [weather, setWeather] = useState(null); // weather data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dateTime, setDateTime] = useState(new Date()); // 👈 state for live time
  let input = useRef();

  const API_KEY = "094984553ec37c0484609b00bac9f1a6"; // 👈 replace with your key
  let location = "";

  const buttonClickHandler = () => {
    location = input.current.value;
  };

  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Could not fetch weather. Check spelling or try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(query);
  };

  // 👇 Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = dateTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  });

  const timeStr = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // 👈 add seconds for live effect
  });

  return (
    <div className="Weather">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="weather-search">
        <input
          ref={input}
          type="text"
          placeholder="Search location (e.g. New York, US)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="weather-search-input"
        />
        <button
          type="submit"
          className="weather-search-btn"
          onClick={buttonClickHandler}
        >
          🔍
        </button>
      </form>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Weather Card */}
      {weather && (
        <div className="weather-cards">
          <div className="weather-card">
            <div className="card-titles">
              <h3 className="card-titles-item">{weather.sys.country}</h3>
              <h3 className="card-titles-item">{weather.name}</h3>
            </div>

            <h2 className="weather-time">{timeStr}</h2>
            <button className="weather-hourly-forecast">Hourly forecast</button>
            <p className="weather-date">{dateStr}</p>

            <img
              src={
                weather.weather[0].icon
                  ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                  : null
              }
              alt={weather.weather[0].description}
              className="weather-icon"
            />
            <p className="weather-temperature">
              {Math.round(weather.main.temp)}℃ 
            </p>

            <div className="weather-settings">
              <div className="weather-setting-leftsection">
                <IoMdRefresh
                  className="weather-settings-leftsection-refresh"
                  onClick={() => fetchWeather(query || "New York, US")}
                />
                <FaRegHeart className="weather-settings-leftsection-heart" />
              </div>
              <div className="weather-settings-centralsection">
                <button className="weather-settings-centralsection-button">
                  See more
                </button>
              </div>
              <FaRegTrashCan className="weather-settings-rightsection-trashicon" />
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default Weather;
