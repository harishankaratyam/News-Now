import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    let link = `https://newsapi.org/v2/everything?q=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(link)
      .then((resp) => resp.json())
      .then((data) => setArticles(data.articles));
    //setArticles(data.)
    //   let resp = data.json();
    //   console.log(resp);
  }, [category]);
  return (
    <div>
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row px-3 py-3">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              url={news.url}
              src={news.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newsboard;
