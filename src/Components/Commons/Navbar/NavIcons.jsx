import { useState } from "react"
import { FaRegCircleUser } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { RiShoppingBagLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartModal from "./CartModal"

const NavIcons = () => {

    const products = useSelector((state) => state.Cart.products)
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="flex-1 flex items-center justify-center gap-[2rem] relative ml-0 text-xl">

            <span>
                <Link to={'/search'}><IoSearch /></Link>
            </span>

            <span>
                <button onClick={handleCartToggle} className="hover:text-primary flex items-center">
                    <RiShoppingBagLine />
                    <sup className="text-sm px-1.5 rounded-full bg-primary text-white text-center">{products.length}</sup>
                </button>
            </span>

            <span>
                <Link to={'/login'} className="hover:text-primary">
                    <FaRegCircleUser />
                </Link>
            </span>

            <div>
                {
                    isCartOpen && <CartModal products={products} isOpen={setIsCartOpen} onClose={handleCartToggle}></CartModal>
                }
            </div>


        </div>
    )
}

export default NavIcons