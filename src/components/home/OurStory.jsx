import React from 'react'
import homeStory from "../../assets/images/home-story.png"

const OurStory = () => {
    return (
        <div className="flex items-center justify-center gap-9 py-16">
            <div className="flex-1">
                <img loading="lazy" src={homeStory} alt="Restaurant Table image" className="w-86 ml-auto" />
            </div>
            <div className="flex-1">
                <h2 className="text-primary font-bold font-heading text-xl pb-2">OUR STORY</h2>
                <h3 className="font-subheading text-lg font-medium py-3">Born From Tradition, Shaped With Vision</h3>
                <div className="flex flex-col gap-3 w-full md:w-3/4">
                    <p>
                        BASCA began with a simple idea to bring the soul of Indian flavours into a modern dining experience.
                        What started as a passion for authentic spices and homegrown recipes has grown into a space where
                        heritage meets creativity.
                    </p>
                    <p>
                        Every dish we craft carries memories of the streets, kitchens, and cultures that inspired us,
                        refined with contemporary technique and a dedication to quality. Our story is built on warmth, bold
                        flavours, and the belief that food should feel personal, comforting, and unforgettable.
                    </p>
                    <p>
                        At BASCA, we don’t just serve meals{" "}
                        <span className="text-primary">we share the journey behind them.</span>
                    </p>
                </div>
                <div className="pt-10 flex items-start gap-4 w-full md:w-3/4">
                    <div className="flex items-center flex-col justify-center">
                        <span className="text-primary font-heading font-bold">95%</span>
                        <h4 className="font-display font-semibold py-1">GUEST SATISFACTION</h4>
                        <p className="text-center">Consistently delivering flavours and experiences guests love.</p>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <span className="text-primary font-heading font-bold">100+</span>
                        <h4 className="font-display font-semibold py-1">EVENTS CATERED</h4>
                        <p className="text-center">
                            From intimate dinners to large celebrations, trusted quality every time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory