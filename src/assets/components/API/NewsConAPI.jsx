import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsConAPI = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '6d305a66b929428ba21e2ce9d99e25ec';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">News Headlines</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow transition transform hover:scale-105 hover:shadow-lg"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="mb-4 rounded-lg w-full h-48 object-cover"
                />
              )}
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsConAPI;
