import React from 'react'
import burger1 from "../images/pngwing.com.png"
import Biri from "../images/biri.png"
import Sand from "../images/sand.png"
import mock from "../images/mock.png"
import { Minus} from "lucide-react";
import star from "../images/star.png"
import "../styles/common.css"
function Card() {
  return (
    <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font font-sans mb-2 text-gray-900 topic">FEATURED PRODUCT</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-content object-center mb-6" src={burger1} alt="content" />
         <div className='  flex justify-center items-center' >  <img src={star} alt="" className='w-28 ' /></div>
          <h3 className="tracking-widest text-center text-indigo-500 text-2xl font-sans  title-font font-bold topi abc">Chicken Burger</h3>
          <h2 className="text-lg   title-font mb-4 text-center text-lime-500 font-extrabold">$20</h2>
         <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold def">Add To Cart +</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-content object-content  mb-6" src={Sand} alt="content" />
           <div className='  flex justify-center items-center' >  <img src={star} alt="" className='w-28 ' /></div>
          <h3 className="tracking-widest text-center text-indigo-500 text-2xl font-sans  title-font font-bold topi abc">Prawn Sandwich</h3>
          <h2 className="text-lg text-center text-lime-500 font-extrabold title-font mb-4">$18</h2>
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold def">Select Option +</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-content object-content  mb-6" src={mock}  alt="content" />
          <div className='  flex justify-center items-center' >  <img src={star} alt="" className='w-28 ' /></div>
          <h3 className="tracking-widest text-center text-indigo-500 text-2xl font-sans  title-font font-bold topi abc">Love Mohito</h3>
          <h2 className="text-lg text-center text-lime-500 font-extrabold title-font mb-4">$15</h2>
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold def">Read More +</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-content object-content mb-6" src={Biri} alt="content" />
          <div className='  flex justify-center items-center' >  <img src={star} alt="" className='w-28 ' /></div>
          <h3 className="tracking-widest text-center text-indigo-500 text-2xl font-sans  title-font font-bold topi abc">Biriyani</h3>
          <h2 className="text-lg text-center text-lime-500 font-extrabold title-font mb-4">$25</h2>
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold def">Add To Cart +</p>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default Card