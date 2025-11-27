import React from 'react'
import restaurantAbout from "../../assets/images/restaurant-about.png"
// client images
import clientImg1 from "../../assets/images/client-img1.png"
import clientImg2 from "../../assets/images/client-img2.png"
import clientImg3 from "../../assets/images/client-img3.png"
import clientImg4 from "../../assets/images/client-img4.png"

const RestaurantAbout = () => {
    return (
        <div className="py-16">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">ABOUT US</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">
                Every Dish Begins With A Thoughtful Touch
            </h3>
            <p className="text-center w-full md:max-w-xl mx-auto">
                At BASCA, every dish is crafted with care and creativity. We blend premium ingredients, elegant
                presentation, and warm ambience to create flavors you’ll remember.
            </p>
            <div className="flex items-center justify-between gap-4 my-12">
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-primary font-bold font-heading text-xl">20K+</h3>
                        <h4 className="font-display font-semibold text-lg">DINNERS SERVED</h4>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold font-heading text-xl">98%</h3>
                        <h4 className="font-display font-semibold text-lg">GUEST SATISFACTION</h4>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold font-heading text-xl">30K+</h3>
                        <h4 className="font-display font-semibold text-lg">HAPPY CUSTOMERS</h4>
                    </div>
                </div>
                <div className="">
                    <img loading="lazy" src={restaurantAbout} alt="About img" />
                </div>
                <div className="flex flex-col gap-6 justify-center">
                    <h3 className="text-primary font-bold font-heading text-lg text-center">
                        1,00+ <br /> Bulk Orders Client
                    </h3>
                    <div className="flex -space-x-2">
                        <img
                            src={clientImg1}
                            className="w-12 h-12 rounded-full  border-[red!important] border-2"
                            alt="Client image"
                        />
                        <img
                            src={clientImg2}
                            className="w-12 h-12 rounded-full border-2 border-primary"
                            alt="Client image"
                        />
                        <img
                            src={clientImg3}
                            className="w-12 h-12 rounded-full border-2 border-primary"
                            alt="Client image"
                        />
                        <img
                            src={clientImg4}
                            className="w-12 h-12 rounded-full border-2 border-primary"
                            alt="Client image"
                        />
                    </div>
                    <button className="bg-primary text-center text-black font-display px-6 py-2.5 my-8 text-base font-semibold rounded-xl w-fit">
                        EXPLORE NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantAbout