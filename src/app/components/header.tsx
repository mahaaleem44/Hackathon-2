"use client";
import { useState } from 'react';
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaChevronDown, FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-purple-50 ">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-around items-center px-4 md:px-0">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>mihosanul@gmail.com</span>
          </div>
          <a href="/contact-us"><div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </div></a>
          <div className="hidden md:flex space-x-4">
            <div>English <FaChevronDown className="inline" /></div>
            <div>USD <FaChevronDown className="inline" /></div>
            <a href="/login"><div>Login <FaUser className="inline" /></div></a>
            <div>Wishlist <FaHeart className="inline" /></div>
            <div><FaShoppingCart className='inline' /></div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex justify-around items-center py-4 px-4 md:px-0">
          <div className="text-3xl font-bold text-purple-600">Hekto</div>
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
            <a href="/home"><div className='text-pink-600'>Home <RiArrowDropDownLine className="inline" /></div></a>
             
              <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg hidden group-hover:block">
                <a href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products</a>
                <a href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</a>
              </div>
            </div>
            <a href="/home" className="text-gray-700">Pages</a>
            <a href="/products" className="text-gray-700">Products</a>
            <a href="/blog" className="text-gray-700">Blog</a>
            <a href="/home" className="text-gray-700">Shop</a>
            <a href="/contact-us" className="text-gray-700">Contact</a>
          </div>
          <div className="relative hidden md:block">
            <input type="text" className="border border-gray-300 px-4 py-2" placeholder="Search" />
            <button className="absolute right-0 top-0 mt-2 mr-2 text-white bg-pink-500  items-center p-2"><FaSearch /></button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a href="/home" className="text-pink-500">Home</a>
            <a href="/home" className="text-gray-700">Pages</a>
            <a href="/products" className="text-gray-700">Products</a>
            <a href="/blog" className="text-gray-700">Blog</a>
            <a href="/home" className="text-gray-700">Shop</a>
            <a href="/contact-us" className="text-gray-700">Contact</a>
            <div className="relative">
              <input type="text" className="border border-gray-300  px-4 py-2 w-full" placeholder="Search" />
              <button className="absolute right-0 top-0 mt-2 mr-2 text-pink-500 bg-pink"><FaSearch /></button>
            </div>
          </div>
        </div>
      )}

</div>
  );
}
