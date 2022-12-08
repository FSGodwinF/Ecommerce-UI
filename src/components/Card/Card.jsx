import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="images">
        {item.isNew && <span className="is-new">Hot Release</span>}
        <img src={item.img} alt="" className="product-image" />
        <img src={item.img2} alt="" className="product-image-two" />
      </div>
      <h2 className="product-title">{item.title}</h2>
      <div className="product-price">
        <h3 className="old-price">${item.oldPrice}</h3>
        <h3 className="price">${item.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card