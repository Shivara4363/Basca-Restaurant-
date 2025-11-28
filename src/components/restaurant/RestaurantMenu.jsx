import React, { useState } from 'react'
import menu1 from "../../assets/images/menu1.png";
import menu2 from "../../assets/images/menu2.png";
import menu3 from "../../assets/images/menu3.png";
import menu4 from "../../assets/images/menu4.png";
import menu5 from "../../assets/images/menu5.png";
import { Link } from 'react-router-dom';

const RestaurantMenu = () => {

    const menuItems = [
        {
            id: 1,
            title: "Starters",
            image: menu1,
            textContent: [
                {
                    heading: "Honey Sesame mogo",
                    description: "Crispy fried cassava in a sticky, honey-sesame glaza",
                    price: "$ 7.99",
                },
                {
                    heading: "Mushroom 65",
                    description: "Crispy mushroom, deep-fried toosed in curry leaves, mustard seed & mild chilli paste",
                    price: "$ 10.99",
                },
                {
                    heading: "Tandoori chicken tikka",
                    description: "Classic tandoori-grilled chicken in yoghurt and spine marinade",
                    price: "$ 12.99",
                },
            ],
        },
        {
            id: 2,
            title: "Main Course",
            image: menu2,
            textContent: [
                {
                    heading: "Kadai Chicken",
                    description:
                        "Tender chicken cooked in a smoky tomato-based gravy with roasted capsicum, onions and aromatic spices ",
                    price: "$ 7.99",
                },
                {
                    heading: "Vintage lamb rogan josh",
                    description:
                        "Slow-braised tender lamb on the bone, simmered 3-4 hrs until marrow melts into a silky, spicebroth",
                    price: "$ 14.99",
                },
                {
                    heading: "Original Butter chicken",
                    description: "Tandoori chicken tikka in chef’s signature creamy tomato-butter sauce.",
                    price: "$ 12.99",
                },
            ],
        },
        {
            id: 3,
            title: "Dessert",
            image: menu3,
            textContent: [
                {
                    heading: "Cheesecake",
                    description: "Rich baked cheesecake layered with silky cream cheese and a golden crisp crust.",
                    price: "$ 6.99",
                },
                {
                    heading: "Raffaelo chessecake",
                    description:
                        "Raffaello cheesecake infused with creamy coconut, almond notes, and a delicate white chocolate finish.",
                    price: "$ 6.99",
                },
                {
                    heading: "Vanilla ice cream",
                    description: "Classic vanilla ice cream made with rich cream and pure Madagascan vanilla.",
                    price: "$ 2.50",
                },
            ],
        },
        {
            id: 4,
            title: "Biryani",
            image: menu4,
            textContent: [
                {
                    heading: "tiger prawn biryani",
                    description: "Spiced prawns layered with mint, corindar, ginger, briyani spices and saffron butter.",
                    price: "$ 17.99",
                },
                {
                    heading: "lamb biryani",
                    description:
                        "Slow cooked tender lamb layered wit mint, coriander,ginger, biryani spice and saffron butter.",
                    price: "$ 15.99",
                },
                {
                    heading: "Chicken biryani",
                    description:
                        "Slow cooked tender chicken layered with mint, coriander, ginger, biryani spice and saffron butter.",
                    price: "$ 2.50",
                },
            ],
        },
        {
            id: 5,
            title: "Beverages",
            image: menu5,
            textContent: [
                {
                    heading: "Mango Lassi",
                    description: "Full package for businesses.",
                    price: "$ 3.50",
                },
                {
                    heading: "peroni",
                    description: "Full package for businesses.",
                    price: "$ 5.00",
                },
                {
                    heading: "Kingfisher",
                    description: "Full package for businesses.",
                    price: "$ 5.00",
                },
            ],
        },
    ];

    // getting selected tab
    const [selected, setSelected] = useState(0);

    return (
        <div className="my-16">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">Menu</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">
                Where Every Dish Deserves Your Attention.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-6">
                <div>
                    <img
                        loading="lazy"
                        src={menuItems[selected].image}
                        className="object-contain object-center max-h-[560px] mx-auto transition-all duration-300"
                        alt="Menu Item image"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-around gap-4 border-2 border-primary rounded-xl p-4 mb-10">
                        {menuItems.map((item, index) => (
                            // tab changing button
                            <button
                                key={item.id}
                                onClick={() => setSelected(index)}
                                className={`cursor-pointer ${
                                    selected === index
                                        ? "border-b-2 bg-linear-to-b from-primary from-50% to-[#FFFFFF] to-100% bg-clip-text text-transparent"
                                        : "text-white"
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    {/* mapping menuItems inside array textContent */}
                    {menuItems[selected]?.textContent.map((content, idx) => (
                        <div className="flex flex-col gap-1 my-8" key={idx}>
                            <div className="flex items-center justify-between gap-2">
                                <h5 className="font-bold whitespace-nowrap text-primary font-heading text-lg">
                                    {content.heading}
                                </h5>
                                {/* border separator */}
                                <div className="flex-1 border-t-2 border-dashed mx-2"></div>
                                <span className="font-semibold font-heading text-primary whitespace-nowrap">
                                    {content.price}
                                </span>
                            </div>
                            <p className="leading-relaxed text-sm">{content.description}</p>
                        </div>
                    ))}
                    <div>
                        <Link to="/menu" className="bg-primary text-center text-black font-display px-8 py-2.5 my-8 text-base font-semibold rounded-lg w-fit cursor-pointer">
                            VIEW ALL
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu