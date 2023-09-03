import React from 'react'
import "../styles/daily.css"
import { motion } from 'framer-motion'
function Daily() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    class="secondcontainer mb-16">
    <div class="bx" id="bx-1"></div>
    <div class="bx" id="bx-2"></div>
    <div class="bx" id="bx-3"></div>
    <div class="bx" id="bx-4"></div>
    <div class="bx" id="bx-5"></div>
  </motion.div>

  )
}

export default Daily