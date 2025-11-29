import React from 'react'
import aboutBg from "../assets/images/about-bg.png"

const About = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${aboutBg})` }}
            >
                <h1 className="font-display text-[42px] font-extrabold">About Us</h1>
                <h2 className="font-heading text-4xl font-bold">Inspired Cooking. Authentic Taste.</h2>
            </div>
        </section>
    )
}

export default About