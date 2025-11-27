import React from 'react'
import cardImg from "../../assets/images/inside-img1.jpg"
import cardImg2 from "../../assets/images/inside-img2.jpg"
import cardImg3 from "../../assets/images/inside-img3.jpg"

const InsideCard = () => {

    const cardData = [
        {
            id: 1,
            title: "Finding the Perfect Wine for Every Dish",
            img: cardImg,
            text: "Learn how our sommeliers balance taste, texture, and aroma to create unforgettable pairings.",
        },
        {
            id: 2,
            title: "How Fresh Ingredients Shape Every Basca Dish",
            img: cardImg2,
            text: "A behind-the-scenes look at how our chefs source and craft flavor from the finest local produce.",
        },
        {
            id: 3,
            title: "Tips from Basca for Perfect Private Events",
            img: cardImg3,
            text: "Make every celebration effortless and elegant with guidance from our events team.",
        },
    ];

    return (
        <div className="mt-8">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">INSIDE THE WORLD OF BASCA</h2>
            <p className="text-center w-full md:max-w-xl mx-auto py-2">
                From chef insights and seasonal creations to hosting tips and culinary trends, our blog brings you closer to the heart of Basca  where food, art, and passion come together beautifully.
            </p>
            <div className="flex items-start justify-center gap-6 py-4 mt-4">
                {cardData.map((card) => (
                    <div className="flex flex-col gap-4 justify-start p-6 border-2 border-primary rounded-3xl max-w-[360px]" id={card.id}>
                        <h3 className="font-subheading font-semibold text-lg text-primary pb-2">{card.title}</h3>
                        <img loading="lazy" src={card.img} className="h-[150px] w-[308px] rounded-xl" alt="Card image" />
                        <p className="text-sm">{card.text}</p>
                        <button className="text-left text-sm font-subheading p-1 mt-1 px-3 border-2 border-dashed border-[#BB6C43] rounded-4xl w-fit">Discover Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InsideCard