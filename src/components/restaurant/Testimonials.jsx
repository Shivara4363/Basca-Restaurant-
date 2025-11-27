import React from 'react'
import testimonialClient1 from "../../assets/images/testimonial-client.jpg"
import testimonialClient2 from "../../assets/images/testimonial-client1.jpg"

const Testimonials = () => {
    return (
        <div className="py-16 ">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">Testimonial</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">Hear Why Guests Choose BASCA.</h3>
            <div className="flex item-center justify-center gap-10 my-4">
                <div className="flex items-center gap-6">
                    <img
                        loading="lazy"
                        src={testimonialClient1}
                        className="h-72 w-52 rounded-lg"
                        alt="Client Testimonial"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="max-w-sm">Every dish felt thoughtfully crafted. The flavors were unforgettable</p>
                        {/* TODO: Start + rating */}
                        <span className="text-primary font-heading">--- Aarav M</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <img
                        loading="lazy"
                        src={testimonialClient2}
                        className="h-72 w-52 rounded-lg"
                        alt="Client Testimonial"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="max-w-sm">Beautiful ambience, warm service, and food that truly stands out.</p>
                        {/* TODO: Start + rating */}
                        <span className="text-primary font-heading">--- Rhea t</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials