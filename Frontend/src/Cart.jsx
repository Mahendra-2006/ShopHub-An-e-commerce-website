import React from 'react'
import headphones from "../src/assets/bt_headphones.png"
import { useState } from 'react'
import { useEffect } from 'react';
function Cart() {
    const [products , setproducts] = useState([]);
    const removeCart = async (id) =>{
      await fetch(`http://localhost:3000/api/remove-cart/${id}`,{
        method:"DELETE",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        }
      })
    }
    useEffect(() =>{
      fetch("http://localhost:3000/api/get-cart",{
        credentials:"include"
      })
      .then((response) =>{
        return response.json();
      })  
      .then((data) =>{
        setproducts(data.Cart.items);
      })
      .catch((err) =>{
        console.log(err);
      })
    },[products]);
  return (
    <div className="body">
        <div className="cartName">
            <h1 className="cartName">Shopping Cart</h1>
        </div>
        <div className="cartwholepage">
            <div className="cartPage">
                <div className="cart-body">
                    <div className="cart-cards">
                {
                    products?.length > 0 ? (
                      products.map((product,index) =>(
                        <div className="cart-card" key={index}>
                            <img src={headphones} alt="Image" />
                            <div className="contents">
                                <h5>{product.product_name}</h5>
                                <h4>{product.price}</h4>
                            </div>
                            <button onClick={() =>removeCart(product._id)}>Remove</button>
                        </div>
                ))):(
                  <div className="elseCase">
                        <h4>Your cart is empty</h4>
                  </div>
                )
                }
            </div>
        </div>
        </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="orders-details">
                    <div className="subtotal">
                        <h6>Subtotal</h6>
                        <h6>120</h6>
                    </div>
                    <div className="shipping">
                        <h6>Shipping</h6>
                        <h6>Free</h6>
                    </div>
                </div>
                <div className="total">
                    <h4>Total</h4>
                    <h4>120</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart