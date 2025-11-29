import React from 'react'
import contactBg from "../assets/images/contact-bg.png"
import LetsConnect from '../components/contact/LetsConnect'
import ReserveTable from '../components/contact/ReserveTable'

const Contact = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${contactBg})` }}
            >
                <h1 className="font-display text-[42px] font-extrabold">CONTACT US</h1>
                <h2 className="font-heading text-4xl font-bold">Plan Your Next Celebration With Ease</h2>
            </div>
            <div className="bg-secondary px-14">
                <LetsConnect />
                <ReserveTable />
            </div>
        </section>
    )
}

export default Contact