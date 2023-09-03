import React from 'react'
import { Facebook, Youtube, Instagram, Twitter,Copyright } from "lucide-react";
function Foot() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

            <h2 className="title-font font-medium text-gray-900 text-center tracking-widest text-sm mb-3">STORE LOCATION</h2>
          </a>
          <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego </p>
          <p className="mt-2 text-sm text-gray-900">Monday -Sunday </p>
          <p className="mt-2 text-sm text-black font-semibold">8:00am - 4:00pm </p>
          <p className="mt-2 text-sm text-gray-900">Tuesday </p>
          <p className="mt-2 text-sm text-black font-semibold">9:00am - 6:00pm </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Information</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Connect</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Services</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Check Out</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Dairy item</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Non Veg</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Affordable</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">My Account</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Account</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Connect</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Shipping</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">FShop</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 text-center">Ask Anything?</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ACCEPT PAYMEMT</h2>
            <nav className="list-none mb-10">
              <li>

                <div className='font-bold flex justify-center items-center gap-2'> <h3>Follow</h3><Facebook color="#3a9513" /><Youtube color="#3a9513" /><Instagram color="#3a9513" /><Twitter color="#3a9513" /></div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow-lg">
        <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row justify-center ">

          <p className="flex justify-center items-center gap-1 font-bold">Copyright <Copyright size={20} /> 2023 <span className="text-green-500">Freshto</span> All Rights Reserved</p>
          {/* <p>Copyright</p> */}

        </div>
      </div>
    </footer>


  )
}

export default Foot