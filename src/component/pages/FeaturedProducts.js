import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [featuredData, setFeaturedData] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((val) => {
        setFeaturedData(val.products);
      });
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Featured Products</h1>
          </div>
        </div>
        <div className="row featured-container justify-content-center">
          <Slider {...settings}>
            {featuredData.map((featuerdItems) => {
              const { id, thumbnail, title, price,  brand } =
                featuerdItems;
              return (
                <div className="col-md-3 " key={id}>
                  <div className="card featured-card text-center  mx-2">
                    <img
                      src={thumbnail}
                      className="card-img-top featured-img"
                      alt="..."
                      
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h5>{brand}</h5>
                      <h5>{price}</h5>
                      <Link to={`/featuresProducts/${featuerdItems.id}`} className="btn btn-primary">
                        By Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
