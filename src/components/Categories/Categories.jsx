import React from 'react'
import './categories.css'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
       <div className="column">
           <div className="row">
               <img className="image-1" src="https://images.pexels.com/photos/2826422/pexels-photo-2826422.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Men</Link>
               </button>
            </div>
           <div className="row">
               <img className="image-1" src="https://images.pexels.com/photos/9502487/pexels-photo-9502487.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Women</Link>
               </button>
               </div>
       </div>
        <div className="column">
           <div className="row">
           <img className="image-1" src="https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Hot Releases</Link>
               </button>
            </div>
        </div> 
       <div className="column column-large">
        <div className="row">
            <div className="column">
                <div className="row">
                <img className="image-1" src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Shoes</Link>
               </button>
                </div>
            </div>
            <div className="column">
                <div className="row">
                <img className="image-1" src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Chic</Link>
               </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img className="image-1" src="https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
               <button className="categories-button">
                   <Link className="link" to="/products/1">Vintage</Link>
               </button>
        </div>
        </div>  
    </div>
  )
}

export default Categories