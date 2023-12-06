import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="font-extrabold text-AgriAccessOrange text-4xl md:text-6xl lg:text-8xl mb-4">
        Contact Us
      </h1>
     
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
        <h2 className="font-extrabold text-AgriAccessGreen text-2xl md:text-4xl mb-2">Send us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-AgriAccessGreen text-lg mb-2">
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
            <label htmlFor="email" className="block text-AgriAccessGreen text-lg mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border text-black border-green-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-AgriAccessGreen text-white-700 text-lg mb-2">
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
  );
};

export default ContactUsPage;