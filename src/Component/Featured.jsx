import React from 'react'
import { motion } from "framer-motion"

export const Featured = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div className="h-[200px] w-full md:h-[200px] md:w-[300px]">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Laptop" className="h-full w-full rounded-md object-cover" />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            About Macbook{'{'}" "{'}'}
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1={7} y1={17} x2={17} y2={7} />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </h1>

        </div>
      </div>
    </motion.div>

  )
}
export default Featured
