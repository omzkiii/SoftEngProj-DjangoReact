import React from 'react';

const AboutPage = () => {
  return (

    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className='max-w w-full object-top top-[10px]'>
          <img src="https://eos.com/wp-content/uploads/2020/02/technologies-in-agriculture.jpg.webp"
          className='max-w w-full m-auto object-top md:brightness-50 relative'>
          </img>
          <p className="absolute text-white font-Bree text-9xl font-black tracking-widest	
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-24 cursor-default"
          >OUR STORY</p>

      </div>

      <div className="text-center md:w-3/4 lg:w-1/2">
        <p className="text-4xl text-green mb-8 font-Bebas text-center mt-[100px] cursor-default">
          AgriAccess was born out of a vision to revolutionize the agricultural supply chain.
          Recognizing the challenges faced by both businesses and customers in the industry, we set out
          to create a seamless platform that would bridge the gap between agricultural enterprises and
          their clients. Established with a commitment to innovation and efficiency, AgriAccess has
          become a trusted name in facilitating smoother transactions and connections within the
          agricultural community.
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row md:w-3/4 lg:w-1/2">
        <div className="md:w-1/2">
        <h2 className="text-Lime font-bold text-7xl md:text-5xl lg:text-8xl mb-4 font-Bree 
          mt-[20px]
          hover:text-AgriAccessOrange transition-color ease-in duration-500 cursor-default">
            MISSION
          </h2>
          <p className="text-2xl text-green  font-Mont mr-10 mb-20 cursor-default">
            AgriAccess empowers agricultural businesses and customers through a streamlined platform,
            enhancing efficiency in inventory management and order processing.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-Lime font-bold text-5xl md:text-5xl lg:text-8xl mb-4 font-Bree ml-[120px]
          mt-[20px] hover:text-AgriAccessOrange transition-color ease-in duration-500 cursor-default">
            VISION
          </h2>
          <p className="text-2xl text-green font-Mont ml-[120px] mb-[20px] cursor-default">
            AgriAccess envisions a future where agricultural transactions are effortless, fostering
            growth and sustainability in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
