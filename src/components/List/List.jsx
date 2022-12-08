import React from 'react'
import './list.css'
import Card from '../Card/Card'

const List = () => {
  
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/3062624/pexels-photo-3062624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/8072544/pexels-photo-8072544.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Dark Sun Shades",
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
    <div className="list">
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List