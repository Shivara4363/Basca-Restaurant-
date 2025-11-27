import React from 'react'
import flavoursImg1 from "../../assets/images/flavours-img1.png"
import flavoursImg2 from "../../assets/images/flavours-img2.png"
import flavoursImg3 from "../../assets/images/flavours-img3.png"
import flavoursImg4 from "../../assets/images/flavours-img4.png"

const Flavours = () => {

    const FlavourCardData = [
        {
            id: 1,
            img: flavoursImg1,
            title: "Firewood Grill Supreme",
            description: "Slow-grilled over natural firewood with deep smoky flavor and chef-crafted seasoning.",
            buttonText: "Order Now",
        },
        {
            id: 2,
            img: flavoursImg2,
            title: "Royal Butter Garlic Prawns",
            description: "Golden-seared prawns tossed in a rich butter–garlic glaze with fresh aromatic herbs.",
            buttonText: "Try Now",
        },
        {
            id: 3,
            img: flavoursImg3,
            title: "Basil Cream Artisanal Pasta",
            description: "Fresh artisanal pasta coated in a silky basil cream sauce with a smooth aromatic finish.",
            buttonText: "Taste It",
        },
        {
            id: 4,
            img: flavoursImg4,
            title: "Stone-Baked Classic Pizza",
            description: "Handcrafted crust baked on stone with premium toppings and perfectly melted richness.",
            buttonText: "View Pizza",
        },
    ];

    return (
        <div className="my-16">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">OUR ICONIC FLAVOURS</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">
                Created with passion, perfected for your palate.
            </h3>
            <div className="flex flex-wrap gap-6 my-8">
                {FlavourCardData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`
                            flex items-center gap-4 w-full md:max-w-[48%]
                            ${index >= 2 ? "flex-row-reverse" : "flex-row"}
                        `}
                    >
                        <img loading="lazy" src={card.img} className="" alt="Flavours Card Image" />
                        <div>
                            <h3 className="font-subheading font-semibold text-lg text-primary py-1.5">{card.title}</h3>
                            <p className="text-sm py-1.5">{card.description}</p>
                            <button className="text-sm font-subheading p-1 mt-1 px-4 border-2 border-dashed border-[#BB6C43] rounded-4xl w-fit cursor-pointer my-2">
                                {card.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Flavours