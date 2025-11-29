import React from 'react'
import eventType1 from "../../assets/images/events/event-type1.png"
import eventType2 from "../../assets/images/events/event-type2.png"
import eventType3 from "../../assets/images/events/event-type3.png"
import eventType4 from "../../assets/images/events/event-type4.png"
import { Link } from 'react-router-dom'

import eventSignature1 from "../../assets/images/events/event-signature1.png"
import eventSignature2 from "../../assets/images/events/event-signature2.png"

const WhatWeOffer = () => {

    const cardData = [
        {
            id: 1,
            title: "Corporate Dinners",
            description: "Elevated dining tailored for professional meetings and formal gatherings. Refined interiors and curated menus that impress every guest. Service designed to keep your event smooth, elegant, and successful.",
            image: eventType1,
            // TODO: copy paste the same with figma everywhere
            rating: "(4.8/5)",
        },
        {
            id: 2,
            title: "Family Celebrations",
            description: "A warm atmosphere perfect for birthdays, anniversaries, and milestones. Thoughtfully crafted dishes that bring families together. Memorable moments made with comfort, flavour, and care.",
            image: eventType2,
            rating: "(4.8/5)",
        },
        {
            id: 3,
            title: "Private Parties",
            description: "Exclusive spaces designed for intimate, stylish celebrations. Custom menus and signature drinks crafted to match your occasion. A premium ambience that turns any event into something special.",
            image: eventType3,
            rating: "(4.8/5)",
        },
        {
            id: 4,
            title: "Bulk Catering",
            description: "Reliable, high-quality catering for large gatherings and corporate events. Flavours that stay consistent, fresh, and crowd-pleasing.  Delivered with precision to ensure a smooth, fulfilling experience.",
            image: eventType4,
            rating: "(4.8/5)",
        },
    ];

    return (
        <div className="py-10">
            <h2 className="text-primary font-bold font-heading text-xl text-center">What we offer</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">
                Where Every Event Finds Its Perfect Setting
            </h3>
            <div className="space-y-10 my-8">
                {cardData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
                            flex flex-col md:flex-row
                            ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
                            items-center gap-10
                        `}
                    >
                        <div className="">
                            <img src={item.image} alt={item.title} className=" object-cover" />
                        </div>
                        <div className="w-full md:w-1/2 gap-4">
                            <h4 className="text-xl font-bold text-primary font-display mb-3">{item.title}</h4>
                            <p className="mb-3">{item.description}</p>
                            <span className="block mb-3 text-[#FFCC00]">Rating {item.rating}</span>
                            <button className="mb-3 p-3 border rounded-md font-display font-semibold drop-shadow-sm drop-shadow-primary bg-primary text-black leading-4 border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg block w-fit">VIEW DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-4 flex items-center justify-center gap-10 flex-wrap">
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-primary font-bold text-xl">Signature Dish</h4>
                    <h5 className="font-subheading text-lg">A Taste You’ll Come Back For</h5>
                    <p className="max-w-[300px]">Discover the dish that defines Basca’s identity rich flavors, refined presentation, and an unforgettable finish. A true standout on every plate.</p>
                    <Link to="/menu" className="mb-3 p-3 border rounded-md font-display font-semibold drop-shadow-sm drop-shadow-primary bg-primary text-black leading-4 border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg block w-fit">Explore All</Link>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <img src={eventSignature1} alt="Event Signature" />
                    <img src={eventSignature2} alt="Event Signature" />
                </div>
            </div>
        </div>
    );
}

export default WhatWeOffer