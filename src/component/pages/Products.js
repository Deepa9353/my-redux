import React, { useEffect, useState } from "react";
import {BiRupee} from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { addToCart } from "../store/cartCountSlice";

const Products = () => {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoding] = useState(false);
  let componentMounted = true;

  

  useEffect(() => {
    const getproducts = async () => {
      setLoding(true);
      const response = await fetch ("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoding(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getproducts();
  }, []);

  const Loading = () => {
    return <>
   Loading.......
    </>;
  };
  const filterProducts=(cat)=>{
   const updatedList= data.filter((x)=>x.category===cat);
   setFilter(updatedList);
  }


  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-3"onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-3"onClick={()=>filterProducts("men's clothing")}>men's clothing</button>
          <button className="btn btn-outline-dark me-3"onClick={()=>filterProducts("women's clothing")}>
            women's clothing
          </button>
          <button className="btn btn-outline-dark me-3"onClick={()=>filterProducts("jewelery")}>jewelery</button>
          <button className="btn btn-outline-dark me-3"onClick={()=>filterProducts("electronics")}>electronics</button>
        </div>
        {filter.map((items) => {
          return (
            <>
              <div className="col-md-3 mb-4"key={items.id}>
                <div className="card h-100 card-products text-center p-4" >
                <img src={items.image} className="card-img-top" alt={items.title} height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title">{items.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      <BiRupee/> {items.price}
                    </p>
                    <NavLink to={`/products/${items.id}`} className="btn btn-outline-dark" >
                      By Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Letest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-ceneter">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
