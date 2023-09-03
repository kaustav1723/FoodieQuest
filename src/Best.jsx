import React from 'react'

import { Minus} from "lucide-react";
import Star from './images/star.png'
import S from "./images/s.png"
import cake from "./images/cake.png"
import pizza from "./images/pizza.png"
import nood from "./images/nood.png"
import "./styles/common.css"

function Best() {
  return (
   <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-8 mx-auto">
    <h2 className="text-6xl font-serif font-semibold text-center text-lime-500 capitalize lg:text-6xl dark:text-white bitem">Best Items</h2>
    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-full max-w-xs text-center">
        <img className="object-contain object-center w-full h-48 mx-auto rounded-lg" src={cake} alt="avatar" />
        <div className='  flex justify-center items-center' >  <img src={Star} alt="" className='w-28 ' /></div>
        <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 best_subtitle">Italian Cheese Cake</h3>
          <span className="mt-1 text-xl font-semibold  text-lime-500 dark:text-gray-300">$23</span>
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          {/* <Minus color="#9c5ed9"  className="items-center"/> */}
          <p className="leading-relaxed  text-center text-black text-xl font-bold cart">Add To Cart +</p>
        </div>
      </div>
      <div className="w-full max-w-xs text-center">
        <img className="object-contain object-center w-full h-48 mx-auto rounded-lg" src={pizza} alt="avatar" />
        <div className='  flex justify-center items-center' >  <img src={Star} alt="" className='w-28 ' /></div>
        <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 best_subtitle">Mexican Pizza</h3>
          <span className="mt-1 text-xl font-semibold  text-lime-500">$19</span>
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold cart">Add To Cart +</p>
        </div>
      </div>
      <div className="w-full max-w-xs text-center">
        <img className="object-contain object-center w-full h-48 mx-auto rounded-lg best_subtitle" src={nood} alt="avatar" />
        <div className='  flex justify-center items-center' >  <img src={Star} alt="" className='w-28 ' /></div>
        <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 best_subtitle">Wonders Noodles</h3>
          <span className="mt-1 text-xl font-semibold  text-lime-500">$24</span>
          {/* <Minus color="#9c5ed9"  className="items-center"/> */}
          <div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold cart">Add To Cart +</p>
        </div>
      </div>
      <div className="w-full max-w-xs text-center">
        <img className="object-contain object-center w-full h-48 mx-auto rounded-lg" src={S} alt="avatar" />
        <div className='  flex justify-center items-center' >  <img src={Star} alt="" className='w-28 ' /></div>
        <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 best_subtitle">Double Decker Sandwich</h3>
          <span className="mt-1 text-xl font-semibold  text-lime-500">$21</span>
          {/* <Minus color="#9c5ed9"  className="items-center"/> */}<div className=' flex justify-center items-center'> <div className='border border-gray-600 w-10'></div></div>
          <p className="leading-relaxed  text-center text-black text-xl font-bold  cart">Add To Cart +</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Best