import React from 'react'
import eventBg from "../assets/images/event-bg.png"
import CelebrateWithUs from '../components/events/CelebrateWithUs';
import WhyChooseUs from '../components/events/WhyChooseUs';
import WhatWeOffer from '../components/events/WhatWeOffer';

const Event = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${eventBg})` }}
            >
                <h1 className="font-display text-[42px] font-extrabold">EVENTS</h1>
                <h2 className="font-heading text-4xl font-bold">Celebrate Moments With Flavor & Style</h2>
            </div>
            <div className="bg-secondary px-14">
                <CelebrateWithUs />
                <WhyChooseUs />
                <WhatWeOffer />
            </div>
        </section>
    );
}

export default Event