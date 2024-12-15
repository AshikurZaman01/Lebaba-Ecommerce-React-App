import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavLinksMobile = () => {
    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Pages", path: "/pages" },
        { id: 4, name: "Contact", path: "/contact" },
    ];

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleLinkClick = () => {
        setIsOpenMenu(false);
    };

    return (
        <div className="visible md:hidden">
            <div>
                <span className="cursor-pointer relative">
                    {isOpenMenu ? (
                        <IoMdCloseCircleOutline
                            className="text-primary-dark"
                            size={30}
                            onClick={() => setIsOpenMenu(false)}
                        />
                    ) : (
                        <IoMenuSharp
                            size={30}
                            onClick={() => setIsOpenMenu(true)}
                        />
                    )}
                </span>
            </div>

            <AnimatePresence>
                {isOpenMenu && (
                    <motion.div
                        className="absolute top-20 right-0 w-[85%] h-[70vh] z-50 flex flex-col justify-start bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-tl-3xl rounded-bl-3xl shadow-lg"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 70, damping: 25 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 opacity-30 rounded-tl-3xl rounded-bl-3xl"
                            style={{
                                backgroundSize: "200% 200%",
                                animation: "gradientShift 3s ease-in-out infinite",
                            }}
                        />
                        <ul className="w-full p-6 relative z-10 space-y-5">
                            {navLinks.map((link) => (
                                <li key={link.id} className="text-2xl text-center">
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-white hover:text-yellow-400 transition-all duration-300 ease-in-out ${isActive ? 'text-yellow-300 font-semibold' : ''}`
                                        }
                                        onClick={handleLinkClick}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavLinksMobile;
