import React, { useState } from 'react'
// cocktail
import cocktailMenu1 from "../../assets/images/cocktail/cocktail-menu1.png"
import cocktailMenu2 from "../../assets/images/cocktail/cocktail-menu2.png"
import cocktailMenu3 from "../../assets/images/cocktail/cocktail-menu3.png"
// canapes
import canapesMenu1 from "../../assets/images/cocktail/canapes-menu1.png"
import canapesMenu2 from "../../assets/images/cocktail/canapes-menu2.png"
import canapesMenu3 from "../../assets/images/cocktail/canapes-menu3.png"

const CocktailAndCanapes = ({ onTabChange  }) => {

    const [active, setActive] = useState(0);

    function handleClick(tab) {
        setActive(tab);
        // send data to parent
        onTabChange(tab);
    }

    const menuItems = [
        {
            id: 1,
            title: "Cocktail",
            textContent: [
                // 1st section of - cocktail
                {
                    contentId: 1,
                    img: cocktailMenu1,
                    imgTitle: "Signature Cocktails",
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
                            heading: "Onion Bhajiya",
                            description: "Rough chopped onion in spiced gram flour batter, crispy golden-fried",
                            price: "$ 7.99",
                        },
                        {
                            heading: "Street style chilli paneer",
                            description: "Indo-chinese stir-fried paneer tossed with onions, peppers & mild chilli paste",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Cauliflower & Broccoli",
                            description: "Crispy cauliflower & broccoli tossed in a street  style manchurain sauce.",
                            price: "$ 10.99",
                        },
                        {
                            heading: "Street style chilli paneer",
                            description: "Indo-chinese stir-fried paneer tossed with onions, peppers & mild chilli paste",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Cauliflower & Broccoli",
                            description: "Crispy cauliflower & broccoli tossed in a street  style manchurain sauce.",
                            price: "$ 10.99",
                        },
                    ],
                },
                // 2nd section of - cocktail
                {
                    contentId: 2,
                    img: cocktailMenu2,
                    imgTitle: "Classic Favourites",
                    items: [
                        {
                            heading: "Tandoori Chicken Tikka",
                            description: "Classic tandoori grilled chicken in yoghurt and spice marinade.",
                            price: "$ 12.99",
                        },
                        {
                            heading: "saffron malai chicken",
                            description: "Tandoori grilled creamy chicken with saffron, cream cheese & mild spices.",
                            price: "$ 12.99",
                        },
                        {
                            heading: "Mango chicken wings",
                            description: "Chicken wings in a tangy mango-mild chilli glaze -sweet, spicy & sticky.",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Tamarind glaze lamb ribs",
                            description: "Smoky tandoori lamb ribs finished with a tangy tamarind glaze.",
                            price: "$ 13.99",
                        },
                        {
                            heading: "pistachio lamb chops",
                            description:
                                "Charcoal-grilled lamb chops in a 16-spice marinade, finished with caramelised pistachio.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Street style chilli Mutton",
                            description: "Fiery wok tossed juicy mutton in mild chilli sauce.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "kebab-e-khas",
                            description:
                                "House special spiced ground lamb kebabs, skewered and grilled on charcol to perfection",
                            price: "$ 13.99",
                        },
                    ],
                },
                // 3rd section of - cocktail
                {
                    contentId: 3,
                    img: cocktailMenu3,
                    imgTitle: "Zero-Proof Creations",
                    items: [
                        {
                            heading: "Tiger  Prawns 65",
                            description:
                                "Tiger Prawn deep fried and toosed in mustard seeds, curry leaf & mild chilli paste.",
                            price: "$ 16.99",
                        },
                        {
                            heading: "tiger prawns pakora",
                            description: "Spiced tiger prawns in a light golden gram flour batter, crisped to perfection.",
                            price: "$ 16.99",
                        },
                        {
                            heading: "lemon & chilli cod",
                            description: "Deep fried cod marinated in lemon zest, mild chilli infused batter.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Tandoori cod",
                            description:
                                "Clay oven-roasted cod, marinated in spiced yogurt, lightly charred, tender, flaky centre.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Tandoori Mango Prawns",
                            description: "Prawns, charcoal grilled with a mango-mild spiced marinade & house spices.",
                            price: "$ 16.99",
                        },
                    ],
                },
            ],
        },
        // --------------------------------- canapes ---------------------------------
        {
            id: 2,
            title: "Canapes",
            textContent: [
                // 1st section of - canapes
                {
                    contentId: 1,
                    img: canapesMenu1,
                    imgTitle: "Signature Canapes",
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
                            heading: "Onion Bhajiya",
                            description: "Rough chopped onion in spiced gram flour batter, crispy golden-fried",
                            price: "$ 7.99",
                        },
                        {
                            heading: "Street style chilli paneer",
                            description: "Indo-chinese stir-fried paneer tossed with onions, peppers & mild chilli paste",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Cauliflower & Broccoli",
                            description: "Crispy cauliflower & broccoli tossed in a street  style manchurain sauce.",
                            price: "$ 10.99",
                        },
                        {
                            heading: "Street style chilli paneer",
                            description: "Indo-chinese stir-fried paneer tossed with onions, peppers & mild chilli paste",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Cauliflower & Broccoli",
                            description: "Crispy cauliflower & broccoli tossed in a street  style manchurain sauce.",
                            price: "$ 10.99",
                        },
                    ],
                },
                // 2nd section of - canapess
                {
                    contentId: 2,
                    img: canapesMenu2,
                    imgTitle: "Global Inspirations",
                    items: [
                        {
                            heading: "Tandoori Chicken Tikka",
                            description: "Classic tandoori grilled chicken in yoghurt and spice marinade.",
                            price: "$ 12.99",
                        },
                        {
                            heading: "saffron malai chicken",
                            description: "Tandoori grilled creamy chicken with saffron, cream cheese & mild spices.",
                            price: "$ 12.99",
                        },
                        {
                            heading: "Mango chicken wings",
                            description: "Chicken wings in a tangy mango-mild chilli glaze -sweet, spicy & sticky.",
                            price: "$ 11.99",
                        },
                        {
                            heading: "Tamarind glaze lamb ribs",
                            description: "Smoky tandoori lamb ribs finished with a tangy tamarind glaze.",
                            price: "$ 13.99",
                        },
                        {
                            heading: "pistachio lamb chops",
                            description:
                                "Charcoal-grilled lamb chops in a 16-spice marinade, finished with caramelised pistachio.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Street style chilli Mutton",
                            description: "Fiery wok tossed juicy mutton in mild chilli sauce.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "kebab-e-khas",
                            description:
                                "House special spiced ground lamb kebabs, skewered and grilled on charcol to perfection",
                            price: "$ 13.99",
                        },
                    ],
                },
                // 3rd section of - canapes
                {
                    contentId: 3,
                    img: canapesMenu3,
                    imgTitle: "Vegetarian Delights",
                    items: [
                        {
                            heading: "Tiger  Prawns 65",
                            description:
                                "Tiger Prawn deep fried and toosed in mustard seeds, curry leaf & mild chilli paste.",
                            price: "$ 16.99",
                        },
                        {
                            heading: "tiger prawns pakora",
                            description: "Spiced tiger prawns in a light golden gram flour batter, crisped to perfection.",
                            price: "$ 16.99",
                        },
                        {
                            heading: "lemon & chilli cod",
                            description: "Deep fried cod marinated in lemon zest, mild chilli infused batter.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Tandoori cod",
                            description:
                                "Clay oven-roasted cod, marinated in spiced yogurt, lightly charred, tender, flaky centre.",
                            price: "$ 15.99",
                        },
                        {
                            heading: "Tandoori Mango Prawns",
                            description: "Prawns, charcoal grilled with a mango-mild spiced marinade & house spices.",
                            price: "$ 16.99",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="py-16">
            <h2 className="text-primary font-bold font-heading text-xl pb-2 text-center">The Cocktail Collection</h2>
            <h3 className="font-subheading text-lg font-medium py-3 text-center">Flavours Designed to Stir the Soul</h3>
            <div className="flex items-center justify-center gap-8 my-8">
                {menuItems.map((item, index) => (
                    // tab changing button
                    <button
                        key={item.id}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer font-heading font-bold text-lg ${
                            active === index
                                ? "border-b-2 bg-linear-to-b from-primary from-50% to-[#FFFFFF] to-100% bg-clip-text text-transparent"
                                : "text-white"
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <h4 className="bg-primary text-center text-white font-heading px-8 py-2.5 my-10 text-base font-semibold rounded-lg w-fit block mx-auto">
                {menuItems[active]?.title}
            </h4>
            <div>
                {menuItems[active]?.textContent?.map((content, index) => (
                    <div
                        key={content.id}
                        className={`flex flex-col md:flex-row ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        } items-start justify-around gap-8 py-10 my-12`}
                    >
                        <div className="flex flex-col gap-6">
                            <img
                                src={content?.img}
                                alt="Menu Item image"
                                className="rounded-lg object-cover transform transition duration-500 ease-in-out hover:rotate-6 hover:scale-110"
                                loading="lazy"
                            />
                            <h4 className="text-center font-heading font-semibold text-xl">{content?.imgTitle}</h4>
                        </div>
                        {/* nested array menu item */}
                        <div className="flex flex-col gap-6">
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

export default CocktailAndCanapes