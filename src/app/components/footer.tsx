
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#EEEFFB] text-[#151875] flex flex-col justify-between">
     

      <main className="flex-grow">
        {/* Main content goes here */}
      </main>

      <footer className="bg-[#EEEFFB] pt-24 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Hekto</h2>
              <div className="flex mb-4">
                <input type="email" placeholder="Enter Email Address" className="p-2 border border-gray-300 rounded-l-md focus:outline-none" />
                <button className="bg-[#fb2e86] text-white p-2 rounded-r-md">Sign Up</button>
              </div>
              <p className="text-sm">Contact Info</p>
              <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">Catagories</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Laptops & Computers</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Cameras & Photography</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Smart Phones & Tablets</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Video Games & Consoles</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Waterproof Headphones</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">Customer Care</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">My Account</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Discount</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Returns</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Orders History</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Order Tracking</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">Pages</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Browse the Shop</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Category</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Pre-Built Pages</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Visual Composer Elements</a></li>
                <li className="mb-2"><a href="#" className="text-sm">WooCommerce Pages</a></li>
              </ul>
            </div>
          </div>
        </div>
        </footer>
        <div className="bg-[#E7E4F8] py-4  container mx-auto px-4 flex justify-around items-center">
           <p className="text-sm">©Webecy - All Rights Reserved</p>
           <div className="flex space-x-4">
             <a href="#" className="text-[#151875]"><FaFacebook /></a>
             <a href="#" className="text-[#151875]"><FaTwitter /></a>
             <a href="#" className="text-[#151875]"><FaInstagram /></a>
           </div>
         </div>

        
   
    </div>
  );
}
