import React from "react";
import "./NewsItem.css";
import image from "../assets/images.jpeg";

const NewsItem = ({ title, description, url, src }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
      <div className="card bg-dark text-light p-3 mx-auto fixed-size-card">
        <img
          src={src ? src : image}
          className="card-img-top card-img-top-fixed"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text ">
            {description
              ? description.slice(0, 120) + "..."
              : "Description doesn't exist"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
