import React, { useState } from 'react'
import menuStarter1 from "../../assets/images/menu/menu-starter1.png"
import menuStarter2 from "../../assets/images/menu/menu-starter2.png"
import menuStarter3 from "../../assets/images/menu/menu-starter3.png"

const MenuItems = () => {

    const menuItems = [
        {
            id: 1,
            title: "Starters",
            textContent: [
                {
                    contentId: 1,
                    img: menuStarter1,
                    imgTitle: "Title 1",
                    items: [
                        {
                            heading: "Honey Sesame mogo",
                            description: "Crispy fried cassava in a sticky, honey-sesame glaza",
                            price: "$ 7.99",
                        },
                        {
                            heading: "Mushroom 65",
                            description:
                                "Crispy mushroom, deep-fried toosed in curry leaves, mustard seed & mild chilli paste",
                            price: "$ 10.99",
                        },
                        {
                            heading: "Tandoori chicken tikka",
                            description: "Classic tandoori-grilled chicken in yoghurt and spine marinade",
                            price: "$ 12.99",
                        },
                    ],
                },
                // 2nd section of starter
                {
                    contentId: 2,
                    img: menuStarter2,
                    imgTitle: "Title 2",
                    items: [
                        {
                            heading: "Honey Sesame mogo",
                            description: "Crispy fried cassava in a sticky, honey-sesame glaza",
                            price: "$ 7.99",
                        },
                        {
                            heading: "Mushroom 65",
                            description:
                                "Crispy mushroom, deep-fried toosed in curry leaves, mustard seed & mild chilli paste",
                            price: "$ 10.99",
                        },
                        {
                            heading: "Tandoori chicken tikka",
                            description: "Classic tandoori-grilled chicken in yoghurt and spine marinade",
                            price: "$ 12.99",
                        },
                    ],
                },
                // 3rd section of starter
                {
                    contentId: 3,
                    img: menuStarter3,
                    imgTitle: "Title 3",
                    items: [
                        {
                            heading: "Honey Sesame mogo",
                            description: "Crispy fried cassava in a sticky, honey-sesame glaza",
                            price: "$ 7.99",
                        },
                        {
                            heading: "Mushroom 65",
                            description:
                                "Crispy mushroom, deep-fried toosed in curry leaves, mustard seed & mild chilli paste",
                            price: "$ 10.99",
                        },
                        {
                            heading: "Tandoori chicken tikka",
                            description: "Classic tandoori-grilled chicken in yoghurt and spine marinade",
                            price: "$ 12.99",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: "Main Course",
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
        <div className="py-16">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">Food Menu</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">Flavors Worth Craving</h3>
            <div className="flex items-center justify-center gap-8 my-8">
                {menuItems.map((item, index) => (
                    // tab changing button
                    <button
                        key={item.id}
                        onClick={() => setSelected(index)}
                        className={`cursor-pointer font-heading font-bold text-lg ${
                            selected === index
                                ? "border-b-2 bg-linear-to-b from-primary from-50% to-[#FFFFFF] to-100% bg-clip-text text-transparent"
                                : "text-white"
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <h4 className="bg-primary text-center text-white font-heading px-8 py-2.5 my-10 text-base font-semibold rounded-lg w-fit block mx-auto">
                {menuItems[selected]?.title}
            </h4>
            <div>
                {menuItems[selected]?.textContent?.map((content, index) => (
                    <div
                        key={content.id}
                        className={`flex flex-col md:flex-row ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        } items-start justify-between gap-8 py-10 my-12`}
                    >
                        <div className="flex flex-col">
                            <img
                                src={content?.img}
                                alt="Menu Item image"
                                className="rounded-lg object-cover transform transition duration-500 ease-in-out hover:rotate-6 hover:scale-110"
                                loading="lazy"
                            />
                            {/* TODO: style heading */}
                            <h4 className="">{content?.imgTitle}</h4>
                        </div>
                        {/* nested array menu item */}
                        <div className="flex flex-col gap-4">
                            {content?.items?.map((item, idx) => (
                            <div id={idx} className="flex flex-col gap-1 text-left overflow-hidden my-2">                              
                                <div className="flex items-center justify-between gap-2">
                                    <h5 className="font-bold whitespace-nowrap text-primary font-heading text-lg">
                                        {item?.heading}
                                    </h5>
                                    {/* border separator */}
                                    <div className="flex-1 border-t-2 border-dashed mx-2"></div>
                                    <span className="font-semibold font-heading text-primary whitespace-nowrap">
                                        {item?.price}
                                    </span>
                                </div>
                                <p className="leading-relaxed text-sm">{item?.description}</p>   
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuItems