import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format options for Ukraine
  const optionsDate = { year: "numeric", month: "long", day: "numeric", timeZone: "Europe/Kyiv" };
  const optionsTime = { weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Kyiv" };

  const formattedDate = dateTime.toLocaleDateString("uk-UA", optionsDate);
  const formattedTime = dateTime.toLocaleTimeString("uk-UA", optionsTime);

  return (
    <header className="Header">
      <h1 className="header-title">Weather dashboard</h1>
      <div className="header-container">
        <p className="header-container-text-left">
          Create your personal list of <br /> favorite cities and always be <br /> aware of weather.
        </p>
        <hr className="header-container-text-line" />
        <p className="header-container-text-right">
          {formattedDate} <br /> {formattedTime}
        </p>
      </div>
    </header>
  );
};

export default Header;
