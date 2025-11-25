import React, { useState } from 'react'
import logo from "../assets/images/logo-og.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

      const [isOpen, setIsOpen] = useState(false);
    
        const toggleMenu = () => setIsOpen((prev) => !prev);
        const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full absolute top-0 left-0 z-1 flex items-center justify-between md:justify-evenly gap-16  my-6">
            <div>
                <img src={logo} alt="Bee's Logo" className="h-16 w-16" />
            </div>
            <div className="hidden md:flex gap-6 items-center">
                <Link to={"/"} className="hover:text-primary px-1 font-semibold">
                    Home
                </Link>
                <Link
                    to={"restaurant"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    Restaurant
                </Link>
                <Link
                    to={"cocktail"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    Coktail V
                </Link>
                <Link
                    to={"event"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    Event
                </Link>
                <Link
                    to={"about"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    About
                </Link>
                <Link
                    to={"blogs"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    Blogs
                </Link>
                <Link
                    to={"contact"}
                    className="border-b-2 px-1 font-semibold border-transparent hover:border-primary transition duration-300"
                >
                    Contact
                </Link>
            </div>

            <div
                className={`hamburger md:hidden cursor-pointer ${isOpen ? "change" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="icon1 block w-7 h-1 bg-white my-1"></span>
                <span className="icon2 block w-7 h-1 bg-white my-1"></span>
                <span className="icon3 block w-7 h-1 bg-white my-1"></span>
            </div>
            {/*  Mobile Menu  */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#242934]/95 flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-10 rounded-xl">
                    <Link to={"/"} className="text-primary hover:text-primary" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to={"restaurant"} className="hover:text-primary" onClick={closeMenu}>
                        Restaurant
                    </Link>
                    <Link to={"cocktail"} className="hover:text-primary" onClick={closeMenu}>
                        Cocktail
                    </Link>
                    <Link to={"event"} className="hover:text-primary" onClick={closeMenu}>
                        Event
                    </Link>
                    <Link to={"about"} className="hover:text-primary" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to={"blogs"} className="hover:text-primary" onClick={closeMenu}>
                        Blogs
                    </Link>
                    <Link to={"contact"} className="hover:text-primary" onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar