import React, {useState} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './slider.css'
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    
    const data = [
        "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=740&t=st=1669986413~exp=1669987013~hmac=c127e5a0d9e9e8697025ef7fe6759cfff7e39a82071855f5c6fda0a489635366",
        "https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?w=740&t=st=1669986584~exp=1669987184~hmac=bee6ae19f2e3b265ead157aeb2d21ac9652cb22275903810ed209e344db2dc99",
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=740&t=st=1669986679~exp=1669987279~hmac=5944e6eae15fa480d391720b55eebc176cc861bdf7a09f061d2b4575af45f8cd",
        "https://img.freepik.com/free-photo/fashion-portrait-mix-race-woman-with-brown-skin-curly-african-hairstyle-vivid-pink-background-wearing-silver-winter-jacket-grey-hat_273443-123.jpg?w=740&t=st=1669986548~exp=1669987148~hmac=5b1e3d43e73d83f1148a9e369db4cf9f21aadce6283da0f9ad25268e4ffd7ae7",

    ];
  
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 3: (prev)=> prev - 1);
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 3 ? 0: (prev)=> prev + 1)
    }
  
    return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div>
        <div className="arrows">
            <div className="arrow" onClick={prevSlide}>
            <KeyboardArrowLeftIcon/>
            </div>
            <div className="arrow" onClick={nextSlide}>
            <KeyboardArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider