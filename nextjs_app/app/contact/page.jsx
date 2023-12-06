import React from 'react';

const ContactUsPage = () => {
  return (
    <div>

        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
          <div className='max-w w-full relative'>
            <img src="https://img.freepik.com/premium-photo/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon_52701-38.jpg"
              className='max-w w-full m-auto object-top md:brightness-50'
              alt="Contact"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
              <p className="text-white font-Bree text-8xl font-black tracking-widest pb-24">
                CONTACT US
              </p>
            </div>
          </div>
        </div>


        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">


              
              
        <p className="text-lg text-black mb-8">
          We would love to hear from you! Whether you have questions about our services, want to
          collaborate, or just want to say hello, feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-extrabold text-AgriAccessOrange text-2xl md:text-4xl mb-2">Our Address</h2>
            <p className="text-black">
              123 Agriculture Street, Green Valley, Philippines
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-AgriAccessOrange text-2xl md:text-4xl mb-2">Contact Information</h2>
            <p className="text-black">
              Email: agriaccess@gmail.com <br />
              Phone: +6391 234 5678
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-extrabold text-AgriAccessOrange text-2xl md:text-4xl mb-2">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-green-700 text-AgriAccessGreen text-lg mb-2">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full text-black p-2 border border-green-500 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-green-700 text-AgriAccessGreen text-lg mb-2">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 text-black   border border-green-500 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-green-700 text-AgriAccessGreen text-lg mb-2">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full text-black p-2 border border-green-500 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-AgriAccessOrange text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
        </div>
    </div>
   
  );
};

export default ContactUsPage;

