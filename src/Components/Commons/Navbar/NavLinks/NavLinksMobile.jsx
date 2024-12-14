import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const NavLinksMobile = () => {

    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Pages", path: "/pages" },
        { id: 4, name: "Contact", path: "/contact" },
    ];

    const [isOpenMenu, setIsOpenMenu] = useState(false);


    return (
        <div className="visible md:hidden">

            <div>

                <span className="cursor-pointer">
                    {isOpenMenu ? <IoMdCloseCircleOutline size={25} onClick={() => setIsOpenMenu(false)} /> : <IoMenuSharp size={25} onClick={() => setIsOpenMenu(true)} />}
                </span>

            </div>


        </div>
    )
}

export default NavLinksMobile