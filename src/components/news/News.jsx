import React from "react";

const News = ({}) => {
  const newsOne = fetch('https://newsapi.org/v2/everything?q=apple&from=2025-08-24&to=2025-08-24&sortBy=popularity&apiKey=f266f6c19d834a799da92e1b860c9e12')
  const newsTwo = fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-07-25&sortBy=publishedAt&apiKey=f266f6c19d834a799da92e1b860c9e12')
  const newsThree = fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f266f6c19d834a799da92e1b860c9e12')
  const newsFour = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f266f6c19d834a799da92e1b860c9e12')
  const newsFive = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f266f6c19d834a799da92e1b860c9e12')
  return (
    <div className="News">
    </div>
  );
};

export default News;
