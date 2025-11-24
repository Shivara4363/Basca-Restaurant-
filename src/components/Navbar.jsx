import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
                
                {/* <div className="text-2xl font-bold text-gray-900"></div> */}
                <ul className="flex items-center gap-8 text-gray-700 font-medium">
                    <li>
                        <a href="/" className="hover:text-black">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-black">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="hover:text-black">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-black">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar