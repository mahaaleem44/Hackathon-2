import React from 'react'
import Image from 'next/image'
import blog1 from "@/app/public/blog1.png"
import blog2 from "@/app/public/blog2.png"
import blog3 from "@/app/public/blog3.png"

import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Latest Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={blog1}
              alt="Modern living room with a black sofa and a white chest of drawers"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-user mr-2 text-pink-500"><FaPenNib /></i>
                Sober Ali
                <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500"><FaRegCalendarAlt />
                </i>
                21 August, 2020
              </div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">Top essential Trends in 2021</h2>
              <p className="text-gray-600 mb-4">
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-blue-600 font-semibold">Read More</a>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={blog2}
              alt="Living room with blue and white pillows on a white sofa"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-user mr-2 text-pink-500"><FaPenNib /></i>
                Surfuaxon
                <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500"><FaRegCalendarAlt />
                </i>
                21 August, 2020
              </div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">Top essential Trends in 2021</h2>
              <p className="text-gray-600 mb-4">
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-blue-600 font-semibold">Read More</a>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={blog3}
              alt="Living room with a grey sofa and a yellow pillow"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-user mr-2 text-pink-500"><FaPenNib /></i>
                Sober Ali
                <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500"><FaRegCalendarAlt />
                </i>
                21 August, 2020
              </div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">Top essential Trends in 2021</h2>
              <p className="text-gray-600 mb-4">
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-blue-600 font-semibold">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage;
