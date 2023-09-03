import "../styles/common.css"
import HM from "../images/hm.png"
import Fr from "../images/fr.png"
import del from "../images/del.png"
import na from "../images/na.png"
import { motion } from "framer-motion";
export const Features = () => {

  return (
    <>
      <section>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 1.5}}
          className="w-[1200px] mx-auto flex items-center justify-evenly my-10">
          <div className="flex items-center gap-4 p-5">
            <img className="object-cover w-12 h-12 rounded-full" src={HM} alt />
            <div>
              <h2 className="text-green-900 font-bold fea">Hand Made</h2>
              <p className="text-gray-600 pfea">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5">
            <img className="object-cover w-12 h-12 rounded-full" src={Fr} alt />
            <div>
              <h2 className="text-green-900 font-bold fea">100% fresh</h2>
              <p className="text-gray-600 pfea">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5">
            <img className="object-cover w-12 h-12 rounded-full" src={del} alt />
            <div>
              <h2 className="text-green-900 font-bold fea">Superfast Delivery</h2>
              <p className="text-gray-600 pfea">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex items-center gap-4  p-5">
            <img className="object-cover w-12 h-12 rounded-full" src={na} alt />
            <div>
              <h2 className="text-green-900 font-bold fea">100% natural</h2>
              <p className="text-gray-600 pfea">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>

  )
}
export default Features