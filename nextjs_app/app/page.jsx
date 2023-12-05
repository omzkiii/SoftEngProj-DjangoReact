// pages/index.js
'use client'

import React, {useEffect, useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {RxDotFilled} from "react-icons/rx"; 
import {ImFire} from "react-icons/im";
import Glider from 'glider-js';
import 'glider-js/glider.min.css';


const slides = [
  {
    url: '/homepage_slide1.jpg'
  }, 
  {
    url: '/homepage_slide2.jpg'
  },
  {
    url: '/homepage_slide3.jpg'
  },
];


const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null);
  

  useEffect(() => {
    if (currentIndex !== previousIndex) {
    }
    

    setPreviousIndex(currentIndex);
  }, [currentIndex]);
  
  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 4,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });

  });

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

  return (

    <div className="bg-white flex flex-col items-center justify-center">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className=' h-full w-full rounded-2xl center bg-cover duration-500 brightness-75'>
        </div>
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
        <div class="glider">
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-25%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://5.imimg.com/data5/MF/JK/MY-38213580/fresh-carrot-500x500.jpg" 
                      class="p-img-front" alt="carrots">
                      </img>
                      <img src="https://shop.mayani.ph/cdn/shop/products/carrots_fe186fb0-7287-4cc7-9150-413763f510b6.png?v=1699245215"
                      class="p-img-back" alt="carrotsback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>VEGETABLE</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Carrots</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P300</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-30%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/kale.jpg" 
                      class="p-img-front" alt="kalefront">
                      </img>
                      <img src="https://getfreshswansea.co.uk/wp-content/uploads/2020/07/kale.jpg"
                      class="p-img-back" alt="kaleback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>VEGETABLE</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Kale</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P198</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-50%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg"
                      class="p-img-front" alt="cabbagefront">
                      </img>
                      <img src="https://greengarden.ph/cdn/shop/products/LINE_ALBUM_PICTURE_230412_85.jpg?v=1681290016"
                      class="p-img-back" alt="cabbageback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>VEGETABLE</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Tomatoes</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P300</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-15%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://storage.googleapis.com/images-sof-prd-9fa6b8b.sof.prd.v8.commerce.mi9cloud.com/product-images/zoom/4664.jpg" 
                      class="p-img-front" alt="tomatofront">
                      </img>
                      <img src="https://vaigaifoods.co.uk/wp-content/uploads/2023/02/Tomato.jpg"
                      class="p-img-back" alt="tomatoback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>VEGETABLE</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Tomatoes</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P200</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-40%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://www.harighotra.co.uk/images/Shutterstock/Potatoes_560x560.jpg" 
                      class="p-img-front" alt="potatofront">
                      </img>
                      <img src="https://saremco.com.pk/wp-content/uploads/2020/10/SANTE-POTATOES.png"
                      class="p-img-back" alt="carrotsback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>VEGETABLE</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Potatoes</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P60</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
          {/*Product box*/}
          <div class="p-box">
            {/*DISCOUNT*/}
            <span class="p-discount font-Bree">-20%</span>
            {/*image container*/}
            <div class="p-img-container">
                <div class="p-img">
                    <a href="#">
                      <img src="https://halal786.in/wp-content/uploads/2020/11/Orange.jpg" 
                      class="p-img-front" alt="orangefront">
                      </img>
                      <img src="https://irati-ingredients.fr/wp-content/uploads/2016/08/product-09.jpg"
                      class="p-img-back" alt="orangeback">
                      </img>
                    </a>
                </div>
            </div>
            {/*product info*/}
            <div class="p-box-text">
              <div class="product-category font-Mont">
                <span>FRUIT</span>
              </div>
              <a href="#" class="product-title font-Bree">
              Orange</a>
              {/*Price-buy*/}
              <div className="price-buy">
                <span class="p-price font-Mont " >P290</span>
                <a href="#" class="p-buy-btn ">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>

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
