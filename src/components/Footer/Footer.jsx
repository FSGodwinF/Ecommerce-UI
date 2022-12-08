import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Corrupti fugit nihil dolores blanditiis, 
             ea deserunt sequi sed a optio nesciunt praesentium, 
             error ipsa quasi unde nostrum nemo accusantium delectus, 
             non alias dolorem aliquid distinctio. 
             Sapiente ut sequi fugiat veniam eligendi.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
        <span>
          Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. 
           Cupiditate voluptate, sequi quas, delectus deleniti ut laborum enim animi vel vitae obcaecati. 
           Eum esse expedita minus et recusandae possimus id quo!
        </span>
        </div>
      </div>
      <div className="bottom">
      <div className="bottom-left">
        <span className="logo">
          TheFGEEshop
        </span>
        <span className="copyright">
        &#169; Copyright 2022. All Rights Reserved
        </span>
      </div>
      <div className="bottom-right">
        <img src="/img/payment.png" alt="" />
      </div>
      </div>
      </div>
  )
}

export default Footer