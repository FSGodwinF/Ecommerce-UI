import React, {useState} from 'react'
import './product.css';


import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Balance from '@mui/icons-material/Balance';

const Product = () => {
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1)


  const images = [
    "https://images.pexels.com/photos/2899707/pexels-photo-2899707.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  
  return (
    <div className="product">
    <div className="product-left">
      <div className="product-images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)} className="selected-image" />
        <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)} className="selected-image"/>
      </div>
      <div className="main-product-images">
        <img src={images[selectedImage]} alt="" className="main-product-image" />
      </div>
    </div>
    <div className="product-right">
      <h1 className="main-product-title">Dark Sunglasses</h1>
      <span className="main-product-price">$59.99</span>
      <p className="main-product-description">
        This is a series of high-definition luxury sun glasses by Faden. 
        This eyewear is suitable for men and women.
      </p>
      <div className="quantity">
        <button className="set-quantity" onClick={()=>setQuantity((prev)=>prev===1 ? 1 :prev-1)}>-</button>
          {quantity}
        <button className="set-quantity" onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
      </div>
      <button className="add-item-to-cart">
        <AddShoppingCart/> ADD TO CART
      </button>
      <div className="product-links">
        <div className="product-item">
          <FavoriteBorder/> ADD TO WISH LIST
        </div>
        <div className="product-item">
          <Balance/> ADD TO COMPARE
        </div>
      </div>
      <div className="product-info">
        <span className="product-brand">Vendor: FADEN</span>
        <span className="product-type">Product Type: Eyewear</span>
        <span className="product-gender">Tag: Men, Women</span>
      </div>
    </div>
    </div>
  )
}

export default Product