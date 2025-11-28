import React from 'react'
import menuBg from "../assets/images/menu-bg.png"
import MenuItems from '../components/menu/MenuItems';

const Menu = () => {
    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{ backgroundImage: `url(${menuBg})` }}
            >
                <h1 className="font-display text-[42px] font-extrabold">MENU</h1>
                <h2 className="font-heading text-4xl font-bold">A Menu Made to Impress</h2>
            </div>
            <div className="bg-secondary px-14">
                <MenuItems />
            </div>
        </section>
    );
}

export default Menu