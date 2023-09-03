import { Search, User, Heart, ShoppingBasket, IndianRupee } from "lucide-react"
export default function TopBar() {
    return (
        <>
            <section>
                <div className="topBar flex w-[1200px] justify-between items-center py-8 mx-auto">
                    <h1 className="text-black font-bold text-4xl">LOGO</h1>
                    <div className="search border w-[600px] py-2 px-5 rounded-full bg-gray-10 flex justify-between items-center bg-gray-100">
                        <div className="flex items-center gap-3">
                            <Search size={20} />
                            <p className="text-gray-500">Search products</p>
                        </div>
                        <h3 className="font-bold">Search</h3>
                    </div>
                    <div className="cart-items flex justify-evenly items-center gap-2">
                        <div className="user border flex justify-center items-center rounded-full bg-blue-200 h-9 w-9"><User size={16} /></div>
                        <div className="like border flex justify-center items-center rounded-full bg-yellow-200 h-9 w-9"><Heart size={16} /></div>
                        <div className="cart border flex justify-center items-center rounded-full bg-pink-100 h-9 w-9"><ShoppingBasket size={16} /></div>
                        <p className="font-bold text-black flex items-center"><IndianRupee size={13} strokeWidth={3} />0.00</p>
                    </div>
                </div>
            </section>
        </>
    )
}