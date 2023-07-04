import React from 'react'
import { Link } from 'react-router-dom';

const OfferProduct = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="row">
            <div className="offer-col-2">
                <img src="pablicImages/watch-offer.jpg"/>
                <Link to="/cart" className=' btn '>Buy Now &#8594;</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OfferProduct;
