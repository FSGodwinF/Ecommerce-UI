import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import './home.css'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className="Home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home