import React from 'react'
import eventCenter from "../../assets/images/event-center.png"
import eventTopLeft from "../../assets/images/event-img1.png"
import eventTopRight from "../../assets/images/event-img2.png"
import eventBottomLeft from "../../assets/images/event-img3.png"
import eventBottomRight from "../../assets/images/event-img4.png"

const HomeEvent = () => {

    const CardContents = [
        {
            id: 1,
            title: "CORPORTATE DINNERS",
            text: "Professional ambience, curated menus, and flawless service for business events.",
            img: eventTopLeft,
            reverse: true,
        },
        {
            id: 2,
            title: "PRIVATE PARTIES",
            text: "Exclusive spaces with customized food and drinks to elevate every celebration.",
            img: eventTopRight,
            reverse: false,
        },
        {
            id: 3,
            title: "FAMILY CELEBRATIONS",
            text: "Birthdays, anniversaries, and special moments made warm and memorable.",
            img: eventBottomLeft,
            reverse: true,
        },
        {
            id: 4,
            title: "BULK CATERING",
            text: "Premium taste and reliable service delivered perfectly for large events.",
            img: eventBottomRight,
            reverse: false,
        },
    ];

    return (
        <div className="py-4">
            <h2 className="text-primary font-bold font-heading text-xl text-center">EVENT</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">Where Every Event Finds Its Perfect Setting.</h3>
            <div className="relative px-12 py-8">
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 z-2 items-center justify-center">
                    <img src={eventCenter} alt="center logo" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-40 sm:w-[475px] md:w-auto mx-auto md:mx-0">
                    {CardContents.map((card) => (                       
                        <div
                            key={card.id}
                            className={`flex items-center gap-2 md:gap-6 p-3 md:p-6 rounded-x ${
                                card.reverse ? "flex-row" : "flex-row-reverse"
                            }`}
                        >
                            <div className="flex items-center justify-center">
                                <img src={card.img} className="h-full w-full object-contain rounded" alt="About card img" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h3 className="text-base md:text-lg font-semibold text-primary font-subheading">
                                    {card.title}
                                </h3>
                                <p className="text-sm max-w-52">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button className="mb-4 p-3 border rounded-md font-display font-semibold drop-shadow-sm drop-shadow-primary bg-primary text-black leading-4 border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg block mx-auto">
                    Explore All
                </button>
            </div>
        </div>
    )
}

export default HomeEvent