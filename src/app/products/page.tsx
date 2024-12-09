import Image from "next/image";
import img1 from "@/app/public/img1.png";
import img2 from "@/app/public/img2.png";
import img3 from "@/app/public/img3.png";
import img4 from "@/app/public/img4.png";
import frame1 from "@/app/public/Frame1.png";
import frame2 from "@/app/public/Frame 2.png";
import frame3 from "@/app/public/Frame 3.png";
import frame4 from "@/app/public/Frame4.png";
import frame5 from "@/app/public/Frame5.png";
import frame6 from "@/app/public/Frame 6.png";

import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductPage = () => {
  return (
    <div>
      {/* Featured Products Section */}
      <div className="container mx-auto py-12 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-900 mb-8">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16 lg:px-44">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={img1}
              alt="Cantilever chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-pink-500 text-lg font-semibold">Cantilever chair</h2>
              <p className="text-gray-500">Code - Y523201</p>
              <p className="text-gray-900">$42.00</p>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <Image
              src={img2}
              alt="Cantilever chair"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow-md">
                <i className="text-blue-500">
                  <CiShoppingCart />
                </i>
              </button>
              <button className="bg-white p-2 rounded-full shadow-md">
                <i className="text-pink-500">
                  <FaRegHeart />
                </i>
              </button>
              <button className="bg-white p-2 rounded-full shadow-md">
                <i className="text-blue-500">
                  <FaSearch />
                </i>
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
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-pink-500 text-lg font-semibold">Cantilever chair</h2>
              <p className="text-gray-500">Code - Y523201</p>
              <p className="text-gray-900">$42.00</p>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={img4}
              alt="Cantilever chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-pink-500 text-lg font-semibold">Cantilever chair</h2>
              <p className="text-gray-500">Code - Y523201</p>
              <p className="text-gray-900">$42.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="bg-white text-gray-800">
        <div className="container mx-auto py-8 px-4 sm:px-8 md:px-16 lg:px-64">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">Latest Products</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-pink-500 font-semibold">New Arrival</a>
            <a href="#" className="text-gray-500">Best Seller</a>
            <a href="#" className="text-gray-500">Featured</a>
            <a href="#" className="text-gray-500">Special Offer</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="text-center">
              <Image src={frame6} alt="Brown chair" className="mx-auto mb-4" width="300" height="300" />
              <p className="text-lg font-semibold">Comfort Handy Craft</p>
              <p className="text-lg">
                <span className="text-red-500 line-through">$65.00</span>
                <span className="text-blue-900">$42.00</span>
              </p>
            </div>
            {/* Product 2 */}
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
            {/* Product 3 */}
            <div className="text-center">
              <Image src={frame3} alt="White chair" className="mx-auto mb-4" width="300" height="300" />
              <p className="text-lg font-semibold">Comfort Handy Craft</p>
              <p className="text-lg">
                <span className="text-red-500 line-through">$65.00</span>
                <span className="text-blue-900">$42.00</span>
              </p>
            </div>
            {/* Product 4 */}
            <div className="text-center">
              <Image src={frame3} alt="Gray chair" className="mx-auto mb-4" width="300" height="300" />
              <p className="text-lg font-semibold">Comfort Handy Craft</p>
              <p className="text-lg">
                <span className="text-red-500 line-through">$65.00</span>
                <span className="text-blue-900">$42.00</span>
              </p>
            </div>
            {/* Product 5 */}
            <div className="text-center">
              <Image src={frame5} alt="Black chair" className="mx-auto mb-4" width="300" height="300" />
              <p className="text-lg font-semibold">Comfort Handy Craft</p>
              <p className="text-lg">
                <span className="text-red-500 line-through">$65.00</span>
                <span className="text-blue-900">$42.00</span>
              </p>
            </div>
            {/* Product 6 */}
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
      </div>
    </div>
  );
};

export default ProductPage;
