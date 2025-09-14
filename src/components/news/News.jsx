import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [newsOne, setNewsOne] = useState(null);
  const [newsTwo, setNewsTwo] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=f266f6c19d834a799da92e1b860c9e12"
    )
      .then((res) => res.json())
      .then((data) => {
        const article = data.articles?.[0] || null;
        setNewsOne(article);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=f266f6c19d834a799da92e1b860c9e12"
    )
      .then((res) => res.json())
      .then((data) => {
        // take the 2nd article if it exists, otherwise reuse the 1st
        const article = data.articles?.[1] || data.articles?.[0] || null;
        setNewsTwo(article);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="News">
      <h2 className="news-title">Top business and marketing headlines today</h2>
      <div className="news-cards">
        <div className="news-cards-item">
          <img
            src={newsOne?.urlToImage || ""}
            alt=""
            className="cards-item-poster"
          />
          <h3 className="cards-item-subtitle">
            {newsOne?.title || "Loading..."}
          </h3>
        </div>
        <div className="news-cards-item">
          <img
            src={newsTwo?.urlToImage || ""}
            alt=""
            className="cards-item-poster"
          />
          <h3 className="cards-item-subtitle">
            {newsTwo?.title || "Loading..."}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default News;