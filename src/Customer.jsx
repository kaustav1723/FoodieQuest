 import "./styles/common.css"
 import { motion } from "framer-motion";
 
 const Customer = () => {
  return (
      <>
          <section className="text-gray-600 body-font">

              <motion.div
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration: 1.5}}
              className="w-[1200px] px-5 mx-auto flex flex-wrap gap-8">
                  <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                      <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1682207151076-ef57791d7437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxmcnVpdCUyMGZhcm1pbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60" alt="stats" />
                  </div>
                  <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                      <div className="w-full sm:p-4 px-4 mb-3">
                          <h1 className="title-font font-bold text-3xl mb-3 text-green-900 customer_heading">A shop for good people by <br /> good people</h1>
                          <div className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis, laudantium id porro provident accusamus esse ducimus consequuntur officia quasi sit consequatur ea, illum praesentium tempora corrupti velit facilis. Inventore, minima optio. Asperiores nam ad nulla aliquam tenetur deleniti fuga commodi molestiae ex ipsum, enim, eum repudiandae recusandae soluta similique.</div>
                      </div>
                      <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                          <a href="http://" className="underline text-green-900">More location</a>
                      </div>
                  </div>
              </motion.div>
              <motion.div
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration: 1.5}}
              className="w-[1200px] px-5 py-10 mx-auto flex flex-wrap">
                  <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                      <div className="w-full sm:p-4 px-4 mb-3">
                          <h1 className="title-font font-bold text-3xl mb-3 text-green-900">A shop for good people by <br /> good people</h1>
                          <div className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis, laudantium id porro provident accusamus esse ducimus consequuntur officia quasi sit consequatur ea, illum praesentium tempora corrupti velit facilis. Inventore, minima optio. Asperiores nam ad nulla aliquam tenetur deleniti fuga commodi molestiae ex ipsum, enim, eum repudiandae recusandae soluta similique.</div>
                      </div>
                      <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                          <a href="http://" className="underline text-green-900">More location</a>
                      </div>

                  </div>
                  <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                      <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1624734486332-74fa62123f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZydWl0JTIwZmFybWluZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="stats" />
                  </div>
              </motion.div>

          </section>

      </>
  )
}
export default Customer;