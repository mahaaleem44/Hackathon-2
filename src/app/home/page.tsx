
import Image from "next/image";
import lamp from "@/app/public/lamp.png"
import sofa from "@/app/public/sofa promotional header.png"
import img1 from "@/app/public/img1.png"
import img2 from "@/app/public/img2.png"
import img3 from "@/app/public/img3.png"
import img4 from "@/app/public/img4.png"
import frame1 from "@/app/public/Frame1.png"
import frame2 from "@/app/public/Frame 2.png"
import frame3 from "@/app/public/Frame 3.png"
import frame4 from "@/app/public/Frame4.png"
import frame5 from "@/app/public/Frame5.png"
import frame6 from "@/app/public/Frame 6.png"
import free from "@/app/public/free.png"
import cashback from "@/app/public/cashback.png"
import quality from "@/app/public/premium-quality.png"
import support from "@/app/public/24-hours-support.png"
import sofa1 from "@/app/public/sofa.png"
import img5 from "@/app/public/img5.png"
import img6 from "@/app/public/img6 .png"
import sofa2 from "@/app/public/sofa2.png"
import newsletter from "@/app/public/newsletter.png"
import label from "@/app/public/label.png"
import blog1 from "@/app/public/blog1.png"
import blog2 from "@/app/public/blog2.png"
import blog3 from "@/app/public/blog3.png"

import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";


export default function Home() {
  return (
 


<div className="bg-[#F2F0FF] h-auto"> 
      {/* <div className="container mx-auto px-48 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="relative inline-block mb-4">
              <Image
                src={lamp}
                alt="Hanging lamp"
                className="inline-block "
                width="100"
                height="100"
              />
            </div>
            <p className="text-red-500 font-semibold">
              Best Furniture For Your Castle...
              
            </p>
            <h1 className="text-4xl font-bold text-black mb-4">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <Image
              src={sofa}
              alt="Pink chair"
              className="mx-auto"
              width="400"
              height="400"
            />
           
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div> */}

      <div className="container mx-auto px-4 sm:px-8 lg:px-48 py-8">
  <div className="flex flex-col md:flex-row items-center justify-around">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
      <div className="relative inline-block mb-4">
        <Image
          src={lamp}
          alt="Hanging lamp"
          className="inline-block"
          width="100"
          height="100"
        />
      </div>
      <p className="text-red-500 font-semibold text-sm sm:text-base">
        Best Furniture For Your Castle...
      </p>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
        New Furniture Collection Trends in 2020
      </h1>
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
        Shop Now
      </button>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 relative mt-8 md:mt-0">
      <Image
        src={sofa}
        alt="Pink chair"
        className="mx-auto w-full max-w-xs sm:max-w-md lg:max-w-lg"
        width="400"
        height="400"
      />
    </div>
  </div>

  {/* Dots Section */}
  <div className="flex justify-center mt-8">
    <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
    <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
    <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
  </div>
</div>





      {/* featured products section */}
      <div className="container mx-auto py-12 bg-white">
      <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8 ">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-44">
        {/* Product 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={img1}
            alt="Cantilever chair"
            className="w-fit h-fit object-cover"
          />
          <div className="p-4">
            <h2 className="text-pink-500 text-lg font-semibold">
              Cantilever chair
            </h2>
            <p className="text-gray-500">Code - Y523201</p>
            <p className="text-gray-900">$42.00</p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
          <Image
            src={img2}
            alt="Cantilever chair"
            className="w-fit h-fit object-cover"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="bg-white p-2 rounded-full shadow-md">
              <i className="fas fa-shopping-cart text-blue-500"><CiShoppingCart /></i>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md">
              <i className="fas fa-heart text-pink-500"><FaRegHeart /></i>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md">
              <i className="fas fa-search text-blue-500"><FaSearch /></i>
            </button>
          </div>
          <div className="p-4 bg-indigo-900 text-white">
            <h2 className="text-lg font-semibold">Cantilever chair</h2>
            <p>Code - Y523201</p>
            <p>$42.00</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        </div>
        {/* Product 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={img3}
            alt="Cantilever chair"
            className="w-fit h-fit object-cover"
          />
          <div className="p-4">
            <h2 className="text-pink-500 text-lg font-semibold">
              Cantilever chair
            </h2>
            <p className="text-gray-500">Code - Y523201</p>
            <p className="text-gray-900">$42.00</p>
          </div>
        </div>
        {/* Product 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={img4}
            alt="Cantilever chair"
            className="w-fit h-fit object-cover"
          />
          <div className="p-4">
            <h2 className="text-pink-500 text-lg font-semibold">
              Cantilever chair
            </h2>
            <p className="text-gray-500">Code - Y523201</p>
            <p className="text-gray-900">$42.00</p>
          </div>
        </div>
      </div>
    </div>
    {/* latest products section */}
    {/* <div className="bg-white text-gray-800">
     
      <div className="container mx-auto py-8 px-64">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Leatest Products</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-pink-500 font-semibold">New Arrival</a>
          <a href="#" className="text-gray-500">Best Seller</a>
          <a href="#" className="text-gray-500">Featured</a>
          <a href="#" className="text-gray-500">Special Offer</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src={frame1} alt="Brown chair" className="mx-auto mb-4" width="300" height="300" />
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
          <div className="relative text-center">
            <Image src={frame2} alt="Yellow chair" className="mx-auto mb-4" width="300" height="300" />
            
            <div className="absolute bottom-4 right-4 space-y-2">
              <a href="#" className="text-blue-500"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="text-pink-500"><i className="fas fa-heart"></i></a>
              <a href="#" className="text-blue-500"><i className="fas fa-search"></i></a>
            </div>
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
          <div className="text-center">
            <Image src={frame3} alt="White chair" className="mx-auto mb-4" width="300" height="300" />
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
          <div className="text-center">
            <Image src={frame4} alt="Gray chair" className="mx-auto mb-4" width="300" height="300" />
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
          <div className="text-center">
            <Image src={frame5} alt="Black chair" className="mx-auto mb-4" width="300" height="300" />
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
          <div className="text-center">
            <Image src={frame6} alt="Beige chair" className="mx-auto mb-4" width="300" height="300" />
            <p className="text-lg font-semibold">Comfort Handy Craft</p>
            <p className="text-lg">
              <span className="text-red-500 line-through">$65.00</span>
              <span className="text-blue-900">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div> */}


<div className="bg-white text-gray-800">
  <div className="container mx-auto py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-4">
      Latest Products
    </h2>
    <div className="flex flex-wrap justify-center space-x-4 mb-8">
      <a href="#" className="text-pink-500 font-semibold">New Arrival</a>
      <a href="#" className="text-gray-500">Best Seller</a>
      <a href="#" className="text-gray-500">Featured</a>
      <a href="#" className="text-gray-500">Special Offer</a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center">
        <Image
          src={frame6}
          alt="Brown chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
      <div className="relative text-center">
        <Image
          src={frame2}
          alt="Yellow chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <a href="#" className="text-blue-500"><i className="fas fa-shopping-cart"></i></a>
          <a href="#" className="text-pink-500"><i className="fas fa-heart"></i></a>
          <a href="#" className="text-blue-500"><i className="fas fa-search"></i></a>
        </div>
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
      <div className="text-center">
        <Image
          src={frame3}
          alt="White chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
      <div className="text-center">
        <Image
          src={frame3}
          alt="Gray chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
      <div className="text-center">
        <Image
          src={frame5}
          alt="Black chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
      <div className="text-center">
        <Image
          src={frame6}
          alt="Beige chair"
          className="mx-auto mb-4"
          width="300"
          height="300"
        />
        <p className="text-lg font-semibold">Comfort Handy Craft</p>
        <p className="text-lg">
          <span className="text-red-500 line-through">$65.00</span>
          <span className="text-blue-900">$42.00</span>
        </p>
      </div>
    </div>
  </div>
</div>



    {/* what shopex offer section */}
    {/* <div className="bg-white text-center h-auto">
      
      <div className="container mx-auto py-12 px-60">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">What Shopex Offer!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={free}
              alt="Delivery truck icon"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={cashback}
              alt="Hand holding a coin icon"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={quality}
              alt="Award ribbon icon"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={support}
              alt="Clock with 24/7 text icon"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </div> */}

<div className="bg-white text-center h-auto">
  <div className="container mx-auto py-8 px-4 sm:px-8 lg:px-24">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
      What Shopex Offer!
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <Image
          src={free}
          alt="Delivery truck icon"
          className="mx-auto mb-4"
          width="80"
          height="80"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
          24/7 Support
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <Image
          src={cashback}
          alt="Hand holding a coin icon"
          className="mx-auto mb-4"
          width="80"
          height="80"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
          Cashback Guarantee
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <Image
          src={quality}
          alt="Award ribbon icon"
          className="mx-auto mb-4"
          width="80"
          height="80"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
          Premium Quality
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <Image
          src={support}
          alt="Clock with 24/7 text icon"
          className="mx-auto mb-4"
          width="80"
          height="80"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
          Fast Delivery
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
  </div>
</div>






    {/* unique features section */}
       
    {/* <div className="bg-[#F1F0FF] flex justify-center items-center h-auto">
      
      <div className="flex flex-col md:flex-row items-center md:items-start p-6">
        <div className="relative">
          <div className="absolute inset-0 bg-pink-200 rounded-full w-96 h-96 -z-10"></div>
          <Image
            src={sofa1}
            alt="Blue modern sofa"
            className="w-96 h-96 object-cover"
            width="400"
            height="400"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-2xl font-bold text-indigo-900 mt-12">
            Unique Features Of leatest &amp; Trending Poducts
          </h2>
          <ul className="mt-4 text-gray-600">
            <li className="flex items-center mb-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full inline-block mr-2"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center mb-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li className="flex items-center mb-2">
              <span className="w-3 h-3 bg-teal-500 rounded-full inline-block mr-2"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
          <div className="mt-6 flex flex-col md:flex-row items-center">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold mb-4 md:mb-0 md:mr-4">
              Add To Cart
            </button>
            <div className="text-indigo-900">
              <p className="font-bold">B&amp;B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

<div className="bg-[#F1F0FF] flex justify-center items-center h-auto">
  <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 lg:p-12">
    {/* Image Section */}
    <div className="relative flex-shrink-0 mb-6 sm:mb-0">
      <div className="absolute inset-0 bg-pink-200 rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -z-10"></div>
      <Image
        src={sofa1}
        alt="Blue modern sofa"
        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
        width="400"
        height="400"
      />
    </div>

    {/* Text and Content Section */}
    <div className="text-center sm:text-left mt-6 sm:mt-0 sm:ml-8 lg:ml-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900">
        Unique Features Of Latest &amp; Trending Products
      </h2>
      <ul className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full inline-block mr-2"></span>
          All frames constructed with hardwood solids and laminates
        </li>
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full inline-block mr-2"></span>
          Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails
        </li>
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-teal-500 rounded-full inline-block mr-2"></span>
          Arms, backs, and seats are structurally reinforced
        </li>
      </ul>
      <div className="mt-6 flex flex-col sm:flex-row items-center">
        <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold mb-4 sm:mb-0 sm:mr-4">
          Add To Cart
        </button>
        <div className="text-indigo-900 text-sm sm:text-base lg:text-lg">
          <p className="font-bold">B&amp;B Italian Sofa</p>
          <p>$32.00</p>
        </div>
      </div>
    </div>
  </div>
</div>



    {/* trending products section */}

{/* <div className="bg-white h-auto">
  <div className="container mx-auto py-8 ">
   <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
    Trending Products
   </h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 px-56">
    <div className="bg-white p-4 rounded-lg shadow">
     <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame1} width="200"/>
     <h2 className="text-lg font-semibold text-center">
      Cantilever chair
     </h2>
     <p className="text-center text-gray-500">
      <span className="text-blue-900">
       $26.00
      </span>
      <span className="line-through">
       $42.00
      </span>
     </p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow">
     <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame6} width="200"/>
     <h2 className="text-lg font-semibold text-center">
      Cantilever chair
     </h2>
     <p className="text-center text-gray-500">
      <span className="text-blue-900">
       $26.00
      </span>
      <span className="line-through">
       $42.00
      </span>
     </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
     <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame3} width="200"/>
     <h2 className="text-lg font-semibold text-center">
      Cantilever chair
     </h2>
     <p className="text-center text-gray-500">
      <span className="text-blue-900">
       $26.00
      </span>
      <span className="line-through">
       $42.00
      </span>
     </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
     <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame4} width="200"/>
     <h2 className="text-lg font-semibold text-center">
      Cantilever chair
     </h2>
     <p className="text-center text-gray-500">
      <span className="text-blue-900">
       $26.00
      </span>
      <span className="line-through">
       $42.00
      </span>
     </p>
    </div>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 px-64">
    <div className="bg-pink-100 p-4 rounded-lg shadow">
     <h2 className="text-xl font-bold text-blue-900 mb-2">
      23% off in all products
     </h2>
     <a className="text-pink-500 underline mb-4 block" href="#">
      Shop Now
     </a>
     <Image alt="Product image" className="w-fit h-fit object-cover float-right" height="100" src={img5} width="100"/>
    </div>
    <div className="bg-blue-100 p-4 rounded-lg shadow">
     <h2 className="text-xl font-bold text-blue-900 mb-2">
      23% off in all products
     </h2>
     <a className="text-pink-500 underline mb-4 block" href="#">
      View Collection
     </a>
     <Image alt="Product image" className="w-fit h-fit object-cover float-right mt-12" height="100" src={img6} width="100"/>
    </div>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-96 ">
    <div className="bg-white p-4 rounded-lg shadow flex items-center">
     <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img1} width="100"/>
     <div>
      <h2 className="text-lg font-semibold">
       Executive Seat chair
      </h2>
      <p className="text-gray-500">
       $39.00
      </p>
     </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow flex items-center">
     <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img2} width="100"/>
     <div>
      <h2 className="text-lg font-semibold">
       Executive Seat chair
      </h2>
      <p className="text-gray-500">
       $39.00
      </p>
     </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow flex items-center">
     <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img3} width="100"/>
     <div>
      <h2 className="text-lg font-semibold">
       Executive Seat chair
      </h2>
      <p className="text-gray-500">
       $39.00
      </p>
     </div>
    </div>
   </div>
  </div>
 </div> */}
 <div className="bg-white h-auto">
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
      Trending Products
    </h1>
    {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 px-4 sm:px-6 lg:px-12">
      {/* Product Item */}
      <div className="bg-white p-4 rounded-lg shadow">
        <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame1} width="200" />
        <h2 className="text-lg font-semibold text-center">Cantilever chair</h2>
        <p className="text-center text-gray-500">
          <span className="text-blue-900">$26.00</span>
          <span className="line-through">$42.00</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame6} width="200" />
        <h2 className="text-lg font-semibold text-center">Cantilever chair</h2>
        <p className="text-center text-gray-500">
          <span className="text-blue-900">$26.00</span>
          <span className="line-through">$42.00</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame3} width="200" />
        <h2 className="text-lg font-semibold text-center">Cantilever chair</h2>
        <p className="text-center text-gray-500">
          <span className="text-blue-900">$26.00</span>
          <span className="line-through">$42.00</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <Image alt="Cantilever chair" className="w-full h-48 object-cover mb-4" height="200" src={frame4} width="200" />
        <h2 className="text-lg font-semibold text-center">Cantilever chair</h2>
        <p className="text-center text-gray-500">
          <span className="text-blue-900">$26.00</span>
          <span className="line-through">$42.00</span>
        </p>
      </div>
    </div>

    {/* Promo Banner Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 px-4 sm:px-6 lg:px-12">
      <div className="bg-pink-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          23% off in all products
        </h2>
        <a className="text-pink-500 underline mb-4 block" href="#">Shop Now</a>
        <Image alt="Product image" className="w-fit h-fit object-cover float-right" height="100" src={img5} width="100" />
      </div>
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          23% off in all products
        </h2>
        <a className="text-pink-500 underline mb-4 block" href="#">View Collection</a>
        <Image alt="Product image" className="w-fit h-fit object-cover float-right mt-12" height="100" src={img6} width="100" />
      </div>
    </div>

    {/* Featured Items Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12">
      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img1} width="100" />
        <div>
          <h2 className="text-lg font-semibold">Executive Seat chair</h2>
          <p className="text-gray-500">$39.00</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img2} width="100" />
        <div>
          <h2 className="text-lg font-semibold">Executive Seat chair</h2>
          <p className="text-gray-500">$39.00</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Image alt="Executive Seat chair" className="w-16 h-16 object-cover mr-4" height="100" src={img3} width="100" />
        <div>
          <h2 className="text-lg font-semibold">Executive Seat chair</h2>
          <p className="text-gray-500">$39.00</p>
        </div>
      </div>
    </div>
  </div>
</div>

 {/* discount items section */}

 {/* <div className="bg-white flex items-center justify-around min-h-auto">
     
      <div className="text-center px-52">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Discount Item</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-pink-500 underline">Wood Chair</a>
          <span className="text-gray-500">•</span>
          <a href="#" className="text-gray-500">Plastic Chair</a>
          <span className="text-gray-500">•</span>
          <a href="#" className="text-gray-500">Sofa Collection</a>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">20% Discount Of All Products</h2>
            <h3 className="text-xl text-pink-500 mb-4">Eams Sofa Compact</h3>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 text-gray-500 mb-4">
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
                Material expose like metals
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
                Simple neutral colours
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
                Clear lines and geometric figures
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
                Material expose like metals
              </li>
            </ul>
            <a href="#" className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded">Shop Now</a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-pink-100 rounded-full"></div>
              </div>
              <Image
            src={sofa2}
                alt="A modern, stylish chair with a brown cushion and a unique design"
                className="relative z-10 w-full max-w-3xs mx-auto"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div> */}

<div className="bg-white flex items-center justify-center min-h-auto py-8">
  <div className="text-center px-8 sm:px-12 md:px-32 lg:px-52">
    <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">Discount Item</h1>
    <div className="flex justify-center space-x-4 mb-8">
      <a href="#" className="text-pink-500 underline">Wood Chair</a>
      <span className="text-gray-500">•</span>
      <a href="#" className="text-gray-500">Plastic Chair</a>
      <span className="text-gray-500">•</span>
      <a href="#" className="text-gray-500">Sofa Collection</a>
    </div>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-left md:pr-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-2">20% Discount Of All Products</h2>
        <h3 className="text-xl text-pink-500 mb-4">Eams Sofa Compact</h3>
        <p className="text-sm sm:text-base text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="grid grid-cols-2 gap-x-6 text-sm sm:text-base text-gray-500 mb-4">
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
            Material expose like metals
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
            Simple neutral colours
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
            Clear lines and geometric figures
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-pink-500 mr-2"><FaCheck /></i>
            Material expose like metals
          </li>
        </ul>
        <a href="#" className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded">Shop Now</a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 sm:w-64 h-48 sm:h-64 bg-pink-100 rounded-full"></div>
          </div>
          <Image
            src={sofa2}
            alt="A modern, stylish chair with a brown cushion and a unique design"
            className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  </div>
</div>

 

{/* top categories section */}
{/* <div className="bg-white flex flex-col items-center justify-center min-h-auto p-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        Top Categories
      </h1>
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0">
        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
            <Image
              src={frame1}
              alt="Gray chair with wooden legs"
              className="w-32 h-32 object-contain"
            />
            <div className="absolute bottom-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                View Shop
              </button>
            </div>
          </div>
          <p className="mt-4 text-xl text-blue-900">Mini LCW Chair</p>
          <p className="text-lg text-gray-600">$56.00</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
            <Image
              src={sofa1}
              alt="White chair with wooden legs"
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="mt-4 text-xl text-blue-900">Mini LCW Chair</p>
          <p className="text-lg text-gray-600">$56.00</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
            <Image
              src={sofa2}
              alt="Gray chair with pink cushion and metal legs"
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="mt-4 text-xl text-blue-900">Mini LCW Chair</p>
          <p className="text-lg text-gray-600">$56.00</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
            <Image
              src={frame3}
              alt="Gray chair with wooden legs"
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="mt-4 text-xl text-blue-900">Mini LCW Chair</p>
          <p className="text-lg text-gray-600">$56.00</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-200 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-200 rounded-full mx-1"></span>
      </div>
    </div> */}

<div className="bg-white flex flex-col items-center justify-center min-h-auto p-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10 text-center">
    Top Categories
  </h1>
  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8 space-y-8 sm:space-y-0">
    {/* Category 1 */}
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
        <Image
          src={frame1}
          alt="Gray chair with wooden legs"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
        />
        <div className="absolute bottom-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            View Shop
          </button>
        </div>
      </div>
      <p className="mt-4 text-lg sm:text-xl text-blue-900">Mini LCW Chair</p>
      <p className="text-sm sm:text-lg text-gray-600">$56.00</p>
    </div>

    {/* Category 2 */}
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
        <Image
          src={sofa1}
          alt="White chair with wooden legs"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
        />
      </div>
      <p className="mt-4 text-lg sm:text-xl text-blue-900">Mini LCW Chair</p>
      <p className="text-sm sm:text-lg text-gray-600">$56.00</p>
    </div>

    {/* Category 3 */}
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
        <Image
          src={sofa2}
          alt="Gray chair with pink cushion and metal legs"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
        />
      </div>
      <p className="mt-4 text-lg sm:text-xl text-blue-900">Mini LCW Chair</p>
      <p className="text-sm sm:text-lg text-gray-600">$56.00</p>
    </div>

    {/* Category 4 */}
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
        <Image
          src={frame3}
          alt="Gray chair with wooden legs"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
        />
      </div>
      <p className="mt-4 text-lg sm:text-xl text-blue-900">Mini LCW Chair</p>
      <p className="text-sm sm:text-lg text-gray-600">$56.00</p>
    </div>
  </div>

  {/* Pagination or Navigation */}
  <div className="flex justify-center mt-8">
    <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
    <span className="w-3 h-3 bg-pink-200 rounded-full mx-1"></span>
    <span className="w-3 h-3 bg-pink-200 rounded-full mx-1"></span>
  </div>
</div>





    {/* newsletter section */}
    {/* <div className="flex items-center justify-center min-h-auto bg-white">
      <div className="text-center">
        <div className="relative">
          <Image
            src={newsletter}
            alt="Background with a shelf and decorative items"
            layout="responsive"
            width={1289}
            height={512}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
              Get Leatest Update By Subscribe <br /> Our Newslater
            </h1>
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white text-lg font-semibold rounded">
              Shop Now
            </button>
          </div>
          <Image className="  mx-auto"  src={label} alt="label"></Image>
        </div>
      </div>
    </div> */}

<div className="flex items-center justify-center min-h-auto bg-white">
  <div className="text-center w-full">
    <div className="relative">
      <Image
        src={newsletter}
        alt="Background with a shelf and decorative items"
        layout="responsive"
        width={1289}
        height={512}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center px-4 md:px-8">
          Get Latest Update By Subscribe <br /> Our Newsletter
        </h1>
        <button className="mt-4 px-6 py-2 bg-pink-500 text-white text-lg sm:text-xl md:text-2xl font-semibold rounded">
          Shop Now
        </button>
      </div>
      <Image className="mx-auto mt-4 sm:mt-6 md:mt-8" src={label} alt="label" />
    </div>
  </div>
</div>



{/*  latest blog section */}
{/* <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Latest Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-32"> */}
          {/* Blog Post 1 */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          </div> */}
          {/* Blog Post 2 */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          </div> */}
          {/* Blog Post 3 */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
</div> */}

<div className="bg-white text-gray-800">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
      Latest Blog
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Blog Post 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={blog1}
          alt="Modern living room with a black sofa and a white chest of drawers"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <i className="fas fa-user mr-2 text-pink-500">
              <FaPenNib />
            </i>
            Sober Ali
            <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500">
              <FaRegCalendarAlt />
            </i>
            21 August, 2020
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-pink-500 mb-2">
            Top essential Trends in 2021
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
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
            <i className="fas fa-user mr-2 text-pink-500">
              <FaPenNib />
            </i>
            Surfuaxon
            <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500">
              <FaRegCalendarAlt />
            </i>
            21 August, 2020
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-pink-500 mb-2">
            Top essential Trends in 2021
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
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
            <i className="fas fa-user mr-2 text-pink-500">
              <FaPenNib />
            </i>
            Sober Ali
            <i className="fas fa-calendar-alt ml-4 mr-2 text-yellow-500">
              <FaRegCalendarAlt />
            </i>
            21 August, 2020
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-pink-500 mb-2">
            Top essential Trends in 2021
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            More off this less hello samlande lied much over tightly circa horse taped mightly
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
     
 





  );
}
