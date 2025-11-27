import React from 'react'
import restaurantBg from "../assets/images/restaurant-bg.png"
import RestaurantAbout from '../components/restaurant/RestaurantAbout'
import RestaurantMenu from '../components/restaurant/RestaurantMenu'
import Flavours from '../components/restaurant/Flavours'
import Testimonials from '../components/restaurant/Testimonials'

const Restaurant = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${restaurantBg})` }}
            >
                <h1 className="font-display text-[42px] font-extrabold">WELCOME TO BASCA</h1>
                <h2 className="font-heading text-3xl font-bold">WHERE FLAVOUR MEETS ELEGANCE</h2>
                <button className="bg-primary text-black font-display px-8 py-3 font-semibold rounded-xl">RESERVE NOW</button>
            </div>
            <div className="bg-secondary px-14">
                <RestaurantAbout />
                <RestaurantMenu />
                <Flavours />
                <Testimonials />
            </div>
        </section>
    )
}

export default Restaurant