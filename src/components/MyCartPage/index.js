import React from 'react'
import "./MyCartPage.css"
import {Link} from "react-router-dom"

function index() {
    return (
        <div className="my-cart">
            <EmptyCart/>
        </div>
    )
}

const EmptyCart = () =>{
    return(
        <div className="empty-cart">
            <h2>cart</h2>
            <img src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/05/demo-0243497479.png" alt="" />
            <h3>Your cart is currently empty</h3>
           <Link to="/">
            <button>Return to homepage</button>
           </Link>
        </div>
    )
}

export default index
