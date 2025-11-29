import React, { useState } from 'react'
// starter
import menuStarter1 from "../../assets/images/menu/menu-starter1.png"
import menuStarter2 from "../../assets/images/menu/menu-starter2.png"
import menuStarter3 from "../../assets/images/menu/menu-starter3.png"
// main course
import menuMainCourse1 from "../../assets/images/menu/menu-maincourse1.png"
import menuMainCourse2 from "../../assets/images/menu/menu-maincourse2.png"
import menuMainCourse3 from "../../assets/images/menu/menu-maincourse3.png"
import menuMainCourse4 from "../../assets/images/menu/menu-maincourse4.png"
import menuMainCourse5 from "../../assets/images/menu/menu-maincourse5.png"
// dessert
import menuDessert from "../../assets/images/menu/menu-dessert.png"
// biryani
import menuBiryani1 from "../../assets/images/menu/menu-biryani1.png"
import menuBiryani2 from "../../assets/images/menu/menu-biryani2.png"
// beverages
import menuBeverages from "../../assets/images/menu/menu-beverages.png"

const MenuItems = () => {

    const menuItems = [
        {
            id: 1,
            title: "Starters",
            textContent: [
                {
                    contentId: 1,
                    img: menuStarter1,
                    imgTitle: "veg Starters",
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
                // 2nd section of starter
                {
                    contentId: 2,
                    img: menuStarter2,
                    imgTitle: "Non-veg Starters",
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
                // 3rd section of starter
                {
                    contentId: 3,
                    img: menuStarter3,
                    imgTitle: "Seafood Starters",
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
        {
            id: 2,
            title: "Main Course",
            textContent: [
                // 1st  section of - main course
                {
                    contentId: 1,
                    img: menuMainCourse1,
                    imgTitle: "veg Starters",
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
                // 2nd section of - main course
                {
                    contentId: 2,
                    img: menuMainCourse2,
                    imgTitle: "Non-veg Starters",
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
                // 3rd section of - main course
                {
                    contentId: 3,
                    img: menuMainCourse3,
                    imgTitle: "Seafood Starters",
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
                // 4th section of - main courser
                {
                    contentId: 4,
                    img: menuMainCourse4,
                    imgTitle: "Seafood Starters",
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
                // 5th section of - main course
                {
                    contentId: 5,
                    img: menuMainCourse5,
                    imgTitle: "Seafood Starters",
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
        {
            id: 3,
            title: "Dessert",
            textContent: [
                // 1st section of - dessert
                {
                    contentId: 1,
                    img: menuDessert,
                    imgTitle: "",
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
            ],
        },
        {
            id: 4,
            title: "Biryani",
            textContent: [
                // 1st section of biryani
                {
                    contentId: 1,
                    img: menuBiryani1,
                    imgTitle: "Biryani Specials",
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
                // 2nd section of biryani
                {
                    contentId: 2,
                    img: menuBiryani2,
                    imgTitle: "Rice Dishes",
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
            ],
        },
        {
            id: 5,
            title: "Beverages",
            textContent: [
                // 1st section of - beverages
                {
                    contentId: 1,
                    img: menuBeverages,
                    imgTitle: "",
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

export default MenuItems