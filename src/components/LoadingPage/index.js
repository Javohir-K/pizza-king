import React from 'react'
import "./LoadingPage.css"
import PizzaImg from "./animated.gif"
function index() {
    return (
        <div className="loading-wrapper">
            <div className="loading">
                <img src={PizzaImg} alt="" />
            </div>
        </div>
    )
}

export default index
