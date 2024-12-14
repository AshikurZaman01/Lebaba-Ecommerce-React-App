import Logo from "./Logo";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks/NavLinks";
import NavLinksMobile from "./NavLinks/NavLinksMobile";

const Navbar = () => {



    return (
        <header className="fixed-nav-bar w-nav">

            <nav className="flex items-center justify-center max-w-screen-xl mx-auto px-[1rem] py-[2rem]">

                <NavLinks></NavLinks>


                <div className="flex-1 ">

                    <div className="flex items-center justify-center px-10">
                        <Logo></Logo>
                        <NavIcons></NavIcons>
                    </div>
                </div>

                <NavLinksMobile></NavLinksMobile>
            </nav>

        </header>
    );
};

export default Navbar;
