import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Pages", path: "/pages" },
        { id: 4, name: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed-nav-bar w-nav">
            <nav className="flex items-center justify-center max-w-screen-xl mx-auto px-[1rem] py-[2rem]">
                <ul className="flex-1 flex items-center gap-[2rem]">

                    {navLinks.map((item) => (

                        <li key={item.id} className="font-[500] hover:text-red-500 transition-all">

                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-[1.2rem] font-[800] text-dark"
                                        : isPending
                                            ? "text-gray-400"
                                            : ""
                                }
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
