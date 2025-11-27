import React from 'react'
import heroBg from "../assets/images/landing-bg.png"
import OurStory from '../components/home/OurStory';
import HomeEvent from '../components/home/HomeEvent';
import InsideCard from '../components/home/InsideCard';

const Home = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <h1 className="font-display text-5xl font-extrabold">BASCA AWAITS YOU</h1>
                <h2 className="font-heading text-3xl font-bold">WHERE PASSION SHAPES EVERY PLATE</h2>
                <button className="bg-primary text-black font-display px-8 py-3 font-semibold rounded-xl">RESERVE NOW</button>
            </div>
            <div className="bg-secondary px-14">
                <OurStory />
                <HomeEvent />
                <InsideCard />
            </div>
        </section>
    );
}

export default Home