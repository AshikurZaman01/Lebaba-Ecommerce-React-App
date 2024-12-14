import { NavLink } from "react-router-dom"

const NavLinks = () => {

    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Pages", path: "/pages" },
        { id: 4, name: "Contact", path: "/contact" },
    ];


    return (
        <ul className="flex-1  items-center gap-[2rem] hidden md:flex">

            {navLinks.map((item) => (

                <li key={item.id} className="font-[500] transition-all">

                    <NavLink
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "text-[1.2rem] font-[800] text-primary-dark"
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

    )
}

export default NavLinks