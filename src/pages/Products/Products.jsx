import React, {useState} from 'react'
import List from '../../components/List/List'
import './products.css'
import { useParams } from 'react-router'


const Products = () => {
  
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(999);
  const [sort, setSort] = useState(null);

  
  
  return (
    <div className="products">
      <div className="products-left">
        <div className="filter-item">
          <h2 className="products-title">Product Categories</h2>
          <div className="input-item">
            <input type="checkbox" id="1" value={1}/>
            <label className="input-label" htmlFor="1">Men</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="2" value={2}/>
            <label className="input-label" htmlFor="2">Women</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="3" value={3}/>
            <label className="input-label" htmlFor="3">Shoes</label>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="products-title">Price</h2>
          <div className="input-item">
            <span className="range-start">0</span>
            <input type="range" min={0} max={999} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span className="range-end">{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="products-title">Sort</h2>
          <div className="input-item">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
            <label className="input-label" htmlFor="asc">Price (lowest)</label>
          </div>
          <div className="input-item">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("asc")}/>
            <label className="input-label" htmlFor="asc">Price (highest)</label>
          </div>
        </div>
      </div>
      <div className="products-right">
        <img
        src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="products-right-image" 
          />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products