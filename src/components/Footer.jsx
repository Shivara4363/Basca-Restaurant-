import React from 'react'
import logo from "../assets/images/logo-og.png"

const Footer = () => {

    const Year = new Date().getFullYear();
  
    return (
        <div className="bg-secondary px-16 py-10 text-center">
                    <div className="mt-16">
                        <div className="flex items-center justify-between flex-wrap gap-6 md:gap-10">
                            <div className="text-center max-w-60 mx-auto">
                                <img src={logo} className="w-22 h-22 mx-auto" alt="Footer Logo img" />
                                <h2 className="text-xl font-semibold">
                                    Taste the Experience, Live the Moment
                                </h2>
                                <div className="flex items-center justify-center gap-4 py-4">
                                    <a className="border border-primary p-1.5 text-center rounded-full cursor-pointer">
                                        {/* <img src={Discord} alt="Discord icon" /> */}
                                    </a>
                                    <a className="border border-primary p-2 px-3 text-center rounded-full cursor-pointer">
                                        {/* <img src={Fb} alt="Facebook icon" /> */}
                                    </a>
                                    <a className="border border-primary p-1.5 text-center rounded-full cursor-pointer">
                                        {/* <img src={Ig} alt="Instagram icon" /> */}
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 p-2">
                                <div className="flex items-start justify-between flex-col md:flex-row flex-wrap gap-10 md:gap-4 text-start pt-6">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="pb-4 text-base md:text-lg font-semibold text-primary">
                                            QUICK 
                                        </h2>
                                        <a href="#menu">Home</a>
                                        <a href="#booktable">About us</a>
                                        <a href="#">Restaurant</a>
                                        <a href="#blogs">Event</a>
                                        <a href="#blogs">Blogs</a>
                                        <a href="#blogs">Contact</a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="pb-4 text-base md:text-lg font-semibold text-primary">
                                            RESOURCES
                                        </h2>
                                        <a href="#home">Cocktails</a>
                                        <a href="#about">Canapes</a>
                                        <a href="#testimonials">Testimonials</a>
                                        <a href="#testimonials">Signature Dish</a>
                                        <a href="#testimonials">Why Choose Us</a>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <a href="" className="flex items-center gap-4">
                                            {/* <img src={Location} alt="Location icon" /> */}
                                            <span>4-6 North Hill, Colchester, CO1 1DZ</span>
                                        </a>
                                        <a href="mailto:info@bascaindian.co.uk" className="flex items-center gap-4">
                                            {/* <img src={Mail} alt="Mail icon" /> */}
                                            <span>info@bascaindian.co.uk</span>
                                        </a>
                                        <a href="tel:01206 573005" className="flex items-center gap-4">
                                            {/* <img src={Phone} alt="Phone icon" /> */}
                                            <span>01206 573005</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-right mt-4">
                                    {/* <img src={ShivaraLogo} className="ml-auto" alt="Shivara logo img" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-right pt-4 px-2">
                        <p className="">Basca Restaurant © {Year}. All Rights Reserved | Powered by Shivara</p>
                    </div>
                </div>
    )
}

export default Footer