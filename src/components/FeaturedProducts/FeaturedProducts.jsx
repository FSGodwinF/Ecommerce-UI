import React from 'react'
import './featuredProducts.css'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
  
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/3062624/pexels-photo-3062624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/8072544/pexels-photo-8072544.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Dark Sunglasses",
            isNew:true,
            oldPrice:15,
            price:11
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/3598250/pexels-photo-3598250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Leather Jacket",
            oldPrice:25,
            price:19
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/2061889/pexels-photo-2061889.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "SweatShirt",
            isNew:true,
            oldPrice:14,
            price:8
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2691591/pexels-photo-2691591.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Black flowered sundress",
            oldPrice:12,
            price:8
        },
        
    ];
  
  
    return (
    <div className="featured-products">
        <div className="top-products">
            <h1 className="product-heading">{type} products</h1>
            <p className="product-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Maxime modi sapiente rerum pariatur iusto odio accusamus
             natus deserunt nobis quod. Quo, suscipit. Qui, quaerat corrupti nisi sequi nulla hic animi!
            </p>
        </div>
        <div className="bottom-products">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts