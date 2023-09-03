import { Menu, ChevronDown, Headphones } from "lucide-react";
import { motion } from "framer-motion"
import "../styles/common.css"
function Header() {
    return (
        <header>
            <nav className="bg-white">
                <div className="w-[90vw] px-6 py-4 mx-auto  bg-green-900 rounded-md">
                    <div className="lg:flex lg:items-center justify-between">
                        <motion.div
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            className="flex items-center justify-evenly gap-5">
                            <div className="flex items-center gap-2">
                                <Menu size={20} color="#ffffff" />
                                <h1 className='text-white font-semibold header-title'>Shop by department</h1>
                            </div>
                            <div className="border h-5 border-gray-200"></div>
                            <div>
                                <div className="flex flex-col text-white capitalize dark:text-gray-300 lg:flex lg:items-center lg:flex-row">
                                    <a href="#" className="   nav-link mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow-300 flex items-center font-semibold">features <ChevronDown size={20} color="#ffffff" /></a>
                                    <a href="#" className=" nav-link mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow-300 flex items-center font-semibold">downloads <ChevronDown size={20} color="#ffffff" /></a>
                                    <a href="#" className=" nav-link mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow-300 flex items-center font-semibold">docs <ChevronDown size={20} color="#ffffff" /></a>
                                    <a href="#" className=" nav-link mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow-300 flex items-center font-semibold">support <ChevronDown size={20} color="#ffffff" /></a>
                                    <a href="#" className=" nav-link mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow-300 font-bold">blog</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                                 initial={
                                    {
                                        x:500,
                                        opacity:0,
                                        scale:0.5
                                    }
                                }
                                animate = {{
                                    x:0,
                                    opacity:1,
                                    scale:1
                                }}
                        className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2 gap-2">
                            <Headphones size={20} color="yellow" />
                            <p className='text-white font-semibold'>91230120930</p>
                        </motion.div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;