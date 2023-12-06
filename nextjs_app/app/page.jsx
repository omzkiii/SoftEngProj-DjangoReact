// pages/index.js
'use client'

import React, {useEffect, useState, useRef} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {RxDotFilled} from "react-icons/rx"; 
import {ImFire} from "react-icons/im";
import Glider from 'glider-js';
import Link from "next/link";
import 'glider-js/glider.min.css';
import { useLoggedInContext } from '@/contexts/LoggedInContext';



const slides = [
  {
    url: '/homepage_slide1.jpg',
    text: '50% Off'

  }, 
  {
    url: '/homepage_slide2.jpg',
    text: 'Payday Deals'
  },
  {
    url: '/homepage_slide3.jpg',
    text: 'Eary Christmas Discount'
  },
];


const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null);
  const { products} = useLoggedInContext();
  const [featured_prod, setFeatured] = useState([]);
  const gliderRef = useRef(null);
  
  

  useEffect(() => {
    if (currentIndex !== previousIndex) {
    }
    

    setPreviousIndex(currentIndex);
  }, [currentIndex]);
  
  useEffect(() => {
    setFeatured(products.filter(p => p.is_featured))
  }, [products]);

  useEffect(() => {
    if (gliderRef.current) {
      const glide = new Glider(gliderRef.current, {
        slidesToShow: 3,
        slidesToScroll: 4,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
      
      glide.refresh()
    }

  },[featured_prod]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
//style={{backgroundImage: `url(${slides[currentIndex].url})`}}
  return (

    <div className="bg-white flex flex-col items-center justify-center">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 relative group">
      <Link href={`/products/discount/${currentIndex+1}`}> <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}  className=' h-full w-full rounded-2xl center bg-cover duration-500 flex items-center justify-center '>
      <h1 className='text-amber-200 drop-shadow-md text-9xl m-5 text-opacity-100 font-bold' >{slides[currentIndex].text}</h1>
        </div> </Link>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl p-1 cursor-pointer'>
          {/* Left Arrow */}
          <FaChevronLeft onClick={prevSlide} size={35} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl p-1 cursor-pointer'>
          {/* Right Arrow */}
          <FaChevronRight onClick={nextSlide} size={35} />
        </div>
        
        <div className='flex top-3 justify-center -translate-x-0 translate-y-[-160%]'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-4xl cursor-pointer ${
              currentIndex === slideIndex ? 'active' : '' }`}>
              <RxDotFilled />
            </div>
          ))}   
      </div>

      
      </div>
      <div>
      </div>
      <div className="inline-flex items-center justify-center ">
        <hr className=" w-20 h-5 bg-redfire mr-10"/>
        <h1 className="font-black mr-5 text-8xl text-redfire">HOT DEALS</h1>
        <ImFire size={100} className="fill-redfire mr-10"/>
        <hr className="w-96 h-5 bg-redfire"/>
        <hr className="w-36 h-5 bg-redfire "/>
        <hr className="w-8 h-5 bg-redfire "/>
      </div>
      {/*CAROUSEL*/}
      <link rel="stylesheet" type="text/css" href="components/glider.min.css"/>
      <section class="p-slider">
      <div class="glider-contain max-w-[1400px] h-[780px] w-full m-auto py-16 relative group">
        {featured_prod.length !== 0 &&
          <div ref={gliderRef} class="glider">
          {featured_prod.map((product) => (
              <div class="p-box">
                {/*DISCOUNT*/}
                {/* <span class="p-discount font-Bree">-25%</span> */}
                {/*image container*/}
                <div class="p-img-container">
                    <div class="p-img">
                        <a href={`/products?q=${product.name}`}>
                          <img src={product.image} 
                          class="p-img-front" alt="carrots">
                          </img>
                          <img src={product.image}
                          class="p-img-back" alt="carrotsback">
                          </img>
                        </a>
                    </div>
                </div>
                {/*product info*/}
                <div class="p-box-text">
                  <div class="product-category font-Mont">
                    <span>{product.category == "fruit" ? "Fruit": "Vegetable"}</span>
                  </div>
                  <a href="#" class="product-title font-Bree">
                  {product.name}</a>
                  {/*Price-buy*/}
                  <div className="price-buy">
                    <span class="p-price font-Mont " >P{product.price}</span>
                    <a href={`/products?q=${product.name}`} class="p-buy-btn ">Add to Cart</a>
                  </div>
                </div>
            </div>
          ))}

        </div>
        }

        <FaChevronLeft aria-label="Previous" size={25} class="glider-prev fill-redfire" />
        <FaChevronRight aria-label="Next" size={25} class="glider-next fill-redfire"/>
        <div role="tablist" class="dots fill-redfire">          
        </div>
      </div>
      </section>
      <script src="components/glider.min.js"></script>
      
    </div>


  );
  
};

export default MainPage;
