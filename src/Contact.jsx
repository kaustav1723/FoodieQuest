import { Headphones, Mail, MoveRight } from "lucide-react"
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="w-[1200px] px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-2  justify-evenly">
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
                        className="p-2 lg:w-6/12 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-orange-200 border py-12 px-12 rounded-lg gap-10">
                            <Headphones size={65} color="#59b946" />
                            <div className="border h-28"></div>
                            <div className="flex-grow">
                                <h2 className="text-gray-400 title-font font-medium">Phone Support</h2>
                                <p className="text-black font-semibold">CALL US 24/7</p>
                                <h1 className="text-2xl text-green-600">(1800)-88-66-991</h1>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={
                            {
                                x: 500,
                                opacity: 0,
                                scale: 0.5
                            }
                        }
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        className="p-2 lg:w-6/12 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-orange-200 border py-12 px-12 rounded-lg gap-10">
                            <Mail size={65} color="#59b946" />
                            <div className="border h-28"></div>
                            <div className="flex-grow">
                                <h2 className="text-gray-400 title-font font-medium">Daily Updown</h2>
                                <p className="text-black font-semibold">SUSCRIBE US</p>
                                <p>Sign up and get a voucher worth $250.00</p>
                                <div className="border rounded-full py-2 mt-2 w-[20vw] flex justify-between items-center px-5">
                                    <input type="email" name="email" id="email" placeholder="Email address" />
                                    <MoveRight size={20} color="#000000" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}
export default Contact;