import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center md:w-3/4 lg:w-1/2">
        <h1 className="font-extrabold text-green-500 text-4xl md:text-6xl lg:text-8xl mb-4">
          Our Story
        </h1>
        <p className="text-lg text-green-700 mb-8">
          AgriAccess was born out of a vision to revolutionize the agricultural supply chain.
          Recognizing the challenges faced by both businesses and customers in the industry, we set out
          to create a seamless platform that would bridge the gap between agricultural enterprises and
          their clients. Established with a commitment to innovation and efficiency, AgriAccess has
          become a trusted name in facilitating smoother transactions and connections within the
          agricultural community.
        </p>
      </div>
      <div className="mb-8 md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://eos.com/wp-content/uploads/2020/02/technologies-in-agriculture.jpg.webp"  // Placeholder URL, replace with your actual image URL
          alt="Agricultural Landscape"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:w-3/4 lg:w-1/2">
        <div className="md:w-1/2">
          <h2 className="font-extrabold text-green-500 text-4xl md:text-5xl lg:text-6xl mb-4">
            Mission
          </h2>
          <p className="text-lg text-green-700 mb-8">
            AgriAccess empowers agricultural businesses and customers through a streamlined platform,
            enhancing efficiency in inventory management and order processing.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="font-extrabold text-green-500 text-4xl md:text-5xl lg:text-6xl mb-4">
            Vision
          </h2>
          <p className="text-lg text-green-700 mb-8">
            AgriAccess envisions a future where agricultural transactions are effortless, fostering
            growth and sustainability in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
