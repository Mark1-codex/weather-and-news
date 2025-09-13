import React, { useEffect, useState } from "react";
import "./News.css"
const News = () => {
  const [newsOne, setNewsOne] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2025-08-24&to=2025-08-24&sortBy=popularity&apiKey=f266f6c19d834a799da92e1b860c9e12')
      .then(res => res.json())
      .then(data => setNewsOne(data.articles[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="News">
      <h2 className="news-title">Top business and marketing headlines today</h2>
      <div className="news-cards">
        <div className="news-cards-item">
          <img src={newsOne?.urlToImage || ""} alt="" className="cards-item-poster"/>
          <h3 className="cards-item-subtitle">{newsOne?.title || "Loading..."}</h3>
        </div>
      </div>
    </div>
  );
};

export default News;