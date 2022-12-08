import React from 'react'
import './cart.css';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  
    const items = [
        {
            id:1,
            img: "https://images.pexels.com/photos/2899707/pexels-photo-2899707.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Dark Sunglasses",
            desc: "Dark sunglasses",
            isNew:true,
            oldPrice:15,
            price:11
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/3598250/pexels-photo-3598250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Leather Jacket",
            desc: "heavy duty jackets",
            oldPrice:25,
            price:19
        },
    ]
  
    return (
    <div className="cart">
        <h1 className="cart-items">Items in your Cart</h1>
        {items?.map(data=>(
            <div className="cart-item" key="data.id">
                <img className="cart-image" src={data.img} alt=""/>
                <div className="cart-details">
                    <h1 className="cart-title">{data.title}</h1>
                    <p  className="cart-description">{data.desc?.substring(0,100)}</p>
                    <div className="cart-price">
                        1 x ${data.price}
                    </div>
                </div>
                <DeleteOutlined className="delete-icon"/>
            </div>
        ))}
        <div className="total-items">
            <span>SUBTOTAL</span>
            <span>$30</span>
        </div>
        <button className="checkout-button">PROCEED TO CHECKOUT</button>
        <span className="clear-cart">Clear Cart</span>
    </div>
  )
}

export default Cart