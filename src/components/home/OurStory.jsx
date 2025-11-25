import React from 'react'
import homeStory from "../../assets/images/home-story.png"

const OurStory = () => {
    return (
        <div className="flex items-center justify-center gap-9 py-16">
            <div className="flex-1">
                <img loading="lazy" src={homeStory} alt="Restaurant Table image" className="w-86 ml-auto" />
            </div>
            <div className="flex-1">
                <h2 className="text-primary font-semibold font-heading text-xl">OUR STORY</h2>
                <h3 className="font-subheading text-lg font-medium py-2">Born From Tradition, Shaped With Vision</h3>
                <p className="text-paragraph w-full md:w-3/4">
                    BASCA began with a simple idea to bring the soul of Indian flavours into a modern dining experience.
                    What started as a passion for authentic spices and homegrown recipes has grown into a space where
                    heritage meets creativity.
                    <br className="py-1" />
                    Every dish we craft carries memories of the streets, kitchens, and cultures that inspired us, refined
                    with contemporary technique and a dedication to quality. Our story is built on warmth, bold flavours,
                    and the belief that food should feel personal, comforting, and unforgettable.
                    <br />
                    At BASCA, we don’t just serve meals{" "}
                    <span className="text-primary">we share the journey behind them.</span>
                </p>
                <div className="py-6 flex items-center gap-6">
                    <div className="flex items center flex-col">
                        <span className="text-primary">95%</span>
                        <h4>GUEST SATISFACTION</h4>
                        <p>Constitently delivering flavours and experiences guests love.</p>
                    </div>
                    <div className="flex items center flex-col">
                        <span className="text-primary">100+</span>
                        <h4>EVENTS CATERED</h4>
                        <p>From intimate dinners to large celebrations, trusted quality every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory