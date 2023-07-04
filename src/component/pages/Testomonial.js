import React from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";
const Testomonial = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row featured-container justify-content-center">
        <div className="col-md-3 ">
            <div className="card testimonial-card text-center  mx-2">
              <img
                src="pablicImages/cart-articale.png"
                className="card-img-top "
                alt="..."
                height="200px"
                width="200px"
              />
              <div className="card-body">
                <div className="quotes">
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  mollitia, consequatur non doloremque error impedit.
                  <br />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarHalfFill />
                  <RiStarLine />
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card testimonial-card text-center  mx-2">
              <img
                src="pablicImages/best-cachong.png"
                className="card-img-top "
                alt="..."
                height="200px"
                width="200px"
              />
              <div className="card-body">
                <div className="quotes">
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  mollitia, consequatur non doloremque error impedit.
                  <br />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarHalfFill />
                  <RiStarLine />
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card testimonial-card text-center  mx-2">
              <img
                src="pablicImages/cart-articale.png"
                className="card-img-top "
                alt="..."
                height="200px"
                width="200px"
              />
              <div className="card-body">
                <div className="quotes">
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                  <FaQuoteLeft />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  mollitia, consequatur non doloremque error impedit.
                  <br />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarHalfFill />
                  <RiStarLine />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testomonial;
