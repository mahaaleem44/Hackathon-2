// import React from 'react'
// import Image from 'next/image'
// import Grid3 from "@/app/components/grid3"
// import contactimage from "@/app/public/contact image.png"

// const ContactUs = () => {
//   return (
//     <div>
//       <Grid3/>
//       <div className="bg-white text-gray-800 py-12 px-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-spacebet items-start md:items-center ml-52">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-2xl font-bold text-blue-900 mb-4">Information About us</h2>
//           <p className="text-gray-600 mb-4 w-96">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
//           </p>
//           <div className="flex space-x-2">
//             <div className="w-4 h-4 rounded-full bg-purple-600"></div>
//             <div className="w-4 h-4 rounded-full bg-pink-500"></div>
//             <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <h2 className="text-2xl font-bold text-blue-900 mb-4 mt- ">Contact Way</h2>
//           <div className="flex items-center mb-4">
//             <div className="w-4 h-4 rounded-full bg-purple-600 mr-2"></div>
//             <div>
//               <p className="text-gray-600">Tel: 877-67-88-99</p>
//               <p className="text-gray-600">E-Mail: shop@store.com</p>
//             </div>
//           </div>
//           <div className="flex items-center mb-4">
//             <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
//             <div>
//               <p className="text-gray-600">Support Forum</p>
//               <p className="text-gray-600">For over 24hr</p>
//             </div>
//           </div>
//           <div className="flex items-center mb-4">
//             <div className="w-4 h-4 rounded-full bg-orange-400 mr-2"></div>
//             <div>
//               <p className="text-gray-600">20 Margaret st, London</p>
//               <p className="text-gray-600">Great britain, 3NM98-LK</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
//             <div>
//               <p className="text-gray-600">Free standard shipping</p>
//               <p className="text-gray-600">on all orders.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* contact form section */}
//     <div className="bg-white flex items-center justify-around min-h-auto mb-12 ml-52">
      
//       <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
//         <div className="lg:w-1/2">
//           <h1 className="text-4xl font-semibold text-blue-900 mb-4">Get In Touch</h1>
//           <p className="text-gray-600 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
//           </p>
//           <form className="space-y-4">
//             <div className="lg:flex lg:space-x-4">
//               <input className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md" type="text" placeholder="Your Name*" />
//               <input className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md" type="email" placeholder="Your E-mail" />
//             </div>
//             <input className="w-full p-3 border border-gray-300 rounded-md" type="text" placeholder="Subject*" />
//             <textarea className="w-full p-3 border border-gray-300 rounded-md h-32" placeholder="Type Your Messege*"></textarea>
//             <button className="bg-pink-500 text-white px-6 py-3 rounded-md" type="submit">Send Mail</button>
//           </form>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//           <Image
//             src={contactimage}
//             alt="Illustration of two people working on computers with various icons around them"
//             className="w-fit max-w-md"
//             width="400"
//             height="400"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ContactUs


import React from "react";
import Image from "next/image";
import Grid3 from "@/app/components/grid3";
import contactimage from "@/app/public/contact image.png";

const ContactUs = () => {
  return (
    <div>
      <Grid3 />
      <div className="bg-white text-gray-800 py-12 px-28">
        <div className="container  flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* About Us Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Information About Us</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. 
              Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="w-4 h-4 rounded-full bg-pink-500"></div>
              <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
            </div>
          </div>
          
          {/* Contact Way Section */}
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Way</h2>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-600 mr-2"></div>
              <div>
                <p className="text-gray-600">Tel: 877-67-88-99</p>
                <p className="text-gray-600">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
              <div>
                <p className="text-gray-600">Support Forum</p>
                <p className="text-gray-600">For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-orange-400 mr-2"></div>
              <div>
                <p className="text-gray-600">20 Margaret st, London</p>
                <p className="text-gray-600">Great Britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <div>
                <p className="text-gray-600">Free standard shipping</p>
                <p className="text-gray-600">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white flex items-center justify-around py-12 px-28">
        <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
          {/* Form Section */}
          <div className="lg:w-1/2 px-4">
            <h1 className="text-4xl font-semibold text-blue-900 mb-4">Get In Touch</h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis.
            </p>
            <form className="space-y-4">
              <div className="lg:flex lg:space-x-4">
                <input
                  className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  type="text"
                  placeholder="Your Name*"
                />
                <input
                  className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  type="email"
                  placeholder="Your E-mail"
                />
              </div>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                type="text"
                placeholder="Subject*"
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Type Your Message*"
              ></textarea>
              <button
                className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
                type="submit"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center px-4">
            <Image
              src={contactimage}
              alt="Illustration of two people working on computers with various icons around them"
              className="w-fit max-w-sm md:max-w-md lg:max-w-lg"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
