import { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { LinkTag } from "./index";
import Drawer from "./Drawer";

const categories = [
  {
    name: "Fashion",
    subcategories: [
      { name: "Men", subcategories: ["T-Shirts", "Casual Shirts", "Jeans", "Jackets"] },
      { name: "Women", subcategories: ["Kurta & Suits", "Saree", "Dresses", "Tops"] },
      { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Jeans", "Dresses"] },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      { name: "Mobiles", subcategories: ["Smartphones", "Feature Phones", "Accessories"] },
      { name: "Laptops", subcategories: ["Gaming Laptops", "Business Laptops", "2-in-1 Laptops"] },
      { name: "Home Appliances", subcategories: ["Refrigerators", "Microwaves", "Washing Machines"] },
    ],
  },
  {
    name: "Bags",
    subcategories: [
      { name: "Men", subcategories: ["Backpacks", "Laptop Bags", "Messenger Bags"] },
      { name: "Women", subcategories: ["Handbags", "Tote Bags", "Clutches"] },
      { name: "Kids", subcategories: ["School Bags", "Lunch Bags", "Travel Bags"] },
    ],
  },
  {
    name: "Footwear",
    subcategories: [
      { name: "Men", subcategories: ["Casual Shoes", "Formal Shoes", "Sneakers"] },
      { name: "Women", subcategories: ["Heels", "Flats", "Sandals"] },
      { name: "Kids", subcategories: ["Sports Shoes", "School Shoes", "Flip Flops"] },
    ],
  },
  {
    name: "Groceries",
    subcategories: [
      { name: "Fruits & Vegetables", subcategories: ["Fresh Fruits", "Fresh Vegetables", "Organic Produce"] },
      { name: "Dairy & Eggs", subcategories: ["Milk", "Cheese", "Butter", "Eggs"] },
      { name: "Snacks", subcategories: ["Chips", "Biscuits", "Nuts & Dry Fruits"] },
    ],
  },
  {
    name: "Beauty",
    subcategories: [
      { name: "Makeup", subcategories: ["Lipstick", "Foundation", "Eyeliner"] },
      { name: "Skincare", subcategories: ["Moisturizers", "Sunscreen", "Face Wash"] },
      { name: "Haircare", subcategories: ["Shampoo", "Conditioner", "Hair Oil"] },
    ],
  },
  {
    name: "Wellness",
    subcategories: [
      { name: "Health Supplements", subcategories: ["Vitamins", "Protein Powders", "Omega-3"] },
      { name: "Personal Care", subcategories: ["Sanitizers", "Handwash", "Feminine Hygiene"] },
      { name: "Medical Supplies", subcategories: ["Masks", "Thermometers", "First Aid Kits"] },
    ],
  },
];

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-5">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full flex items-center hover:!text-primary"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <RiMenu2Fill className="text-lg" /> Shop By Categories
              <LiaAngleDownSolid className="text-sm ml-auto" />
            </Button>
          </div>

          <div className="col2 w-[60%]">
            <ul className="flex items-center justify-between w-full font-semibold relative">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="list-none relative"
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => {
                    setHoveredCategory(null);
                    setHoveredSubCategory(null);
                  }}
                >
                  <LinkTag to={`/${category.name.toLowerCase()}`} name={category.name} />

                  {/* Subcategory Dropdown */}
                  {hoveredCategory === category.name && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-52 z-10">
                      {category.subcategories.map((sub) => (
                        <li
                          key={sub.name}
                          className="relative group px-4 py-2 hover:bg-gray-100"
                          onMouseEnter={() => setHoveredSubCategory(sub.name)}
                        >
                          <LinkTag to={`/${category.name.toLowerCase()}/${sub.name.toLowerCase()}`} name={sub.name} />

                          {/* Sub-subcategory Dropdown */}
                          {hoveredSubCategory === sub.name && (
                            <ul className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 w-52 z-20">
                              {sub.subcategories.map((item) => (
                                <li key={item} className="px-4 py-2 hover:bg-gray-100">
                                  <LinkTag
                                    to={`/${category.name.toLowerCase()}/${sub.name.toLowerCase()}/${item.toLowerCase()}`}
                                    name={item}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col3 w-[20%]">
            <p className="text-sm font-semibold flex items-center gap-3 cursor-pointer">
              <GoRocket className="text-lg" />
              <span className="hover:text-primary">Free International Delivery</span>
            </p>
          </div>
        </div>
      </nav>

      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navigation;
