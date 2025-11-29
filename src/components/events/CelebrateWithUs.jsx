import React from 'react'
import eventReservation from "../../assets/images/events/event-celebrate.png"

const CelebrateWithUs = () => {
    return (
        <div className="py-16">
            <h3 className="text-primary font-bold font-heading text-xl pb-2 text-center">Create Your Moments With Us</h3>
            <div className="flex items-center justify-around flex-wrap flex-column-reverse md:flex-row gap-8 mt-4">
                <div className="flex flex-col gap-8">
                    <h3 className="font-subheading font-semibold text-xl">
                        Celebrate, indulge, and create memories at Basca.
                    </h3>
                    <p className="max-w-md">
                        From themed dining nights to live performances and seasonal specials, our event calendar brings
                        fresh excitement every week. Whether you’re planning a family gathering, a date night, or a
                        corporate meetup, Basca offers the perfect ambience and curated experiences.
                    </p>
                    <button className="mb-4 p-3 border rounded-md font-display font-semibold drop-shadow-sm drop-shadow-primary bg-primary text-black leading-4 border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg block w-fit">
                        Reserve Now
                    </button>
                </div>
                <div className="">
                    <img loading="lazy" className="object-contain" src={eventReservation} alt="Event Reservation" />
                </div>
            </div>
        </div>
    );
}

export default CelebrateWithUs