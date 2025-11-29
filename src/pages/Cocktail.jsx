import React, { useState } from 'react'
import cocktailBg from "../assets/images/cocktail-bg.png"
import canapesBg from "../assets/images/canapes-bg.png"
import CocktailAndCanapes from '../components/cocktail-canapes/CocktailAndCanapes';

const Cocktail = () => {
    // 0 = Cocktail, 1 = Canapes
    const [selectedTab, setSelectedTab] = useState(0);

    const bgImages = {
        0: cocktailBg,
        1: canapesBg,
    };

    return (
        <section>
            <div
                className="bg-contain bg-center bg-repeat h-screen flex items-center justify-center flex-col gap-4"
                style={{
                    backgroundImage: `url(${bgImages[selectedTab]})`,
                }}
            >
                {selectedTab === 0 ? (
                    <>
                        <h1 className="font-display text-[42px] font-extrabold">COCKTAIL</h1>
                        <h2 className="font-heading text-4xl font-bold">Flavours That Spark the Night</h2>
                    </>
                ) : (
                    <>
                        <h1 className="font-display text-[42px] font-extrabold">CANAPES</h1>
                        <h2 className="font-heading text-4xl font-bold">Elegance Served in Miniature</h2>
                    </>
                )}
            </div>
            <div className="bg-secondary px-14">
                <CocktailAndCanapes onTabChange={setSelectedTab} />
            </div>
        </section>
    );
}

export default Cocktail