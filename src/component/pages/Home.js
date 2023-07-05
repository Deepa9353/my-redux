import React from "react";
import Hero from "../../component/image/Shoping.jpg";
import FeaturedProducts from "./FeaturedProducts";
import OfferProduct from "./OfferProduct";
import Products from "./Products";
import Testomonial from "./Testomonial";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <Carousel className="slid justify-content-center">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="pablicImages/Yes_bank.jpg"
            alt="First slide"
            height="500px"
            width="1000px"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="pablicImages/top-image3.jpg"
            alt="Second slide"
            height="500px"
            width="1000px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="pablicImages/watch-offer.jpg"
            alt="Third slide"
            height="500px"
            width="2000px"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <FeaturedProducts />
        <Products />
        <OfferProduct />
        <Testomonial />
      </div>
    </>
  );
};

export default Home;
