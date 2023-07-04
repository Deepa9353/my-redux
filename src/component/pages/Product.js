import React, { useEffect, useState } from 'react'
import { useParams,NavLink, Link } from 'react-router-dom';
import {RiStarFill,RiStarHalfFill,RiStarLine} from "react-icons/ri";
import {FaRupeeSign} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartCountSlice';


const Product = () => {
  

    const{id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading, setLoading]=useState(false);
    const dispatch = useDispatch();

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    }

    useEffect(()=>{
        const getProduct=async ()=>{
           setLoading(true);
           const response = await fetch (`https://fakestoreapi.com/products/${id}`);
           setProduct(await response.json());
           setLoading(false);
        }
        getProduct();
    },[id]);

    const Loading =()=>{
        return(
            <>
              Loading...
            </>
        )
    }
    const ShowProduct=()=>{
        return(
            <>
              <div className="col-md-6" key={product.id}>
                <Link to="/ cart" onClick={()=>handleAddToCart(product)}>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </Link>
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating{product.rating && product.rating.rate}
                    <RiStarFill/><RiStarFill/><RiStarFill/><RiStarHalfFill/><RiStarLine/>
                </p>
                <h3 className="display-6 fw-bold my-4">
                   <FaRupeeSign/>{product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <Link to ="/cart" className="btn btn-outline-dark px-4 py-2" onClick={()=>handleAddToCart(product)} >
                    Add to Cart
                </Link>
                <NavLink to="/" className="btn btn-dark ms-2 px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                continue Shopping
                </NavLink>
              </div>
            </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
            {loading? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
