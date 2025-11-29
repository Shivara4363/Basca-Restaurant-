
import React from 'react'
import letsConnect from "../../assets/images/lets-connect.png"

const LetsConnect = () => {
    return (
        <div className="py-16">
            <div className="flex items-center justify-center flex-wrap gap-6">
                <div className="flex flex-col gap-4">
                    <span className="block font-bold text-primary">24X7</span>
                    <h3 className="font-display text-lg">Reach Out</h3>
                    <p className="max-w-[300px]">
                        Message us anytime for reservations, events, or catering. We’re here around the clock.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="block font-bold text-primary">100%</span>
                    <h3 className="font-display text-lg">Quick Response</h3>
                    <p className="max-w-[300px]">
                        Get fast, clear guidance from our team always dedicated to helping you with confidence, ease, and
                        care.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="block font-bold text-primary">99%</span>
                    <h3 className="font-display text-lg">Confirm & Relax</h3>
                    <p className="max-w-[300px]">
                        Receive your final confirmation and enjoy a near-perfect, seamless dining process.
                    </p>
                </div>
            </div>
            <div className="py-10 flex items-center justify-center flex-wrap gap-12">
                <div className="">
                    <img src={letsConnect} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-subheading text-xl font-semibold">Let’s Connect Over Great Experiences</h3>
                    <p className="max-w-[400px]">
                        Have a question, booking request, or event plan? We’re here to make every step easy. Reach out
                        anytime and our team will guide you quickly, clearly, and with warm hospitality.
                    </p>
                    <h4 className="font-heading text-primary font-semibold text-lg">Opening Hours</h4>
                    <h5 className="font-subheading">Mon - Tue - Closed</h5>
                    <h5 className="font-subheading">Wed - Sun - 5pm to 10:30pm</h5>
                </div>
            </div>
        </div>
    );
}

export default LetsConnect