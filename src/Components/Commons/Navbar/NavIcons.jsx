import { FaRegCircleUser } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { RiShoppingBagLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const NavIcons = () => {
    return (
        <div className="flex-1 flex items-center justify-center gap-[2rem] relative ml-0">

            <span>
                <Link to={'/search'}><IoSearch /></Link>
            </span>

            <span>
                <button className="hover:text-primary flex items-center">
                    <RiShoppingBagLine />
                    <sup className="text-sm px-1.5 rounded-full bg-primary text-white text-center">0</sup>
                </button>
            </span>

            <span>
                <Link to={'/login'} className="hover:text-primary">
                    <FaRegCircleUser />
                </Link>
            </span>


        </div>
    )
}

export default NavIcons