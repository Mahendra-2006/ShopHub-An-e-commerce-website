import "../src/styles.css"
import headphones from "./assets/bt_headphones.png"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
function App() {
    const addCart = async (body) =>{
      console.log(body);
        await fetch("http://localhost:3000/api/add-cart",{
          method:"POST",
          credentials:"include",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            product_name:body.product_name,
            price:Number(body.price)
          })
        })
        .then((response) =>{
          return response.json();
        })
        .then((data) =>{
          console.log(data);
        }) 
        .catch((err) =>{
          console.log(err);
        })
    }
  const Products = [
    {
      "id":1,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":2,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":3,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":4,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":1,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":1,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    },{
      "id":1,
      "product_name":"Wireless Bluetooth Headphones",
      "features":["Premium noise cancelling headphones with 30-hour battery backup."],
      "price":"400"
    }
  ]
  return (
    <>
    <div className="body"> 
      <div className="headers">
        <h1>ShopHub</h1>
        <div className="input">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search products..." />
        </div>
        <div className="icons">
          <i className="bi bi-suit-heart"></i>
          <Link to="/profile">
            <div>
                <i className="bi bi-person"></i>
            </div>
          </Link>
          <Link to="/cart">
            <div>
                <i className="bi bi-cart"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="categories">
        <Link to="/electronics" className="electronics">
            <div>
              <h5>Electronics</h5>
            </div>
          </Link>
          <div className="clothing">
            <h5>Clothing</h5>
          </div>
          <div className="sports">
            <h5>Sports</h5>
          </div>
      </div>
      <div className="pageBody">
          <div className="content">
            <h1>Discover Amazing Products</h1>
            <p>Shop the latest trends and find everything you need with fast shipping and unbeatable prices</p>
          </div>
            <div className="cards">
              {
                Products && Products.map((Product,index) =>(
                <div className="card" key={index}>
                  <img src={headphones} alt="Image" />
                  <h4>{Product.product_name}</h4>
                  <p>{Product.features}</p>
                  <h4>{Product.price}</h4>
                  <div className="cart">
                    <button onClick={() =>addCart(Product)}>Add to cart</button>
                  </div>
                </div>
                ))
              }
                
            </div>
      </div>
    </div>
    </>
  )
}

export default App
