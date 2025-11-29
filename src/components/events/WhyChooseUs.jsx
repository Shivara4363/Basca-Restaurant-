import React from 'react'
import eventWhy1 from "../../assets/images/events/event-why1.png"
import eventWhy2 from "../../assets/images/events/event-why2.png"
import eventWhy3 from "../../assets/images/events/event-why3.png"
import eventWhy4 from "../../assets/images/events/event-why4.png"
import eventWhy5 from "../../assets/images/events/event-why5.png"

const WhyChooseUs = () => {

    const whyChooseCard = [
        {
            id: 1,
            img: eventWhy1,
            title: "Quality You Can Taste",
            description: "Our dishes are crafted with carefully selected ingredients and perfected flavors.",
        },
        {
            id: 2,
            img: eventWhy2,
            title: "Premium Dining Experience",
            description: "Elegant ambience, fine textures, and warm lighting create a truly refined atmosphere.",
        },
        {
            id: 3,
            img: eventWhy3,
            title: "Artistic Culinary Craft",
            description: "We blend artistry and technique to deliver plates that look as good as they taste.",
        },
        {
            id: 4,
            img: eventWhy4,
            title: "Reliable, Professional Service",
            description: "Timely service and attention to detail ensure a smooth dining experience every time.",
        },
        {
            id: 5,
            img: eventWhy5,
            title: "Trusted by Top Clients",
            description: "From families to top brands, guests choose BASCA for excellence they can rely on.",
        },
    ];

    return (
        <div className="my-10">
            <h2 className="text-primary font-bold font-heading text-xl text-center">Why Choose Us</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">
                The Difference You Can Taste, Trust, and Remember.
            </h3>
            <div className="flex item-center justify-center flex-wrap gap-6 my-6">
                {whyChooseCard.map((card) => (
                    <div id={card.id} className="flex flex-col items-center justify-center gap-4">
                        <img src={card.img} className="h-[377px] w-[210px]" alt="Event Why Choose Image" />
                        <h4 className="text-primary font-headings font-semibold">{card.title}</h4>
                        <p className="max-w-[210px] text-sm">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs