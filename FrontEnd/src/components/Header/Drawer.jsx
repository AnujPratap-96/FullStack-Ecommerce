/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import { LinkTag } from "./index";
import { IoCloseSharp } from "react-icons/io5";

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

const DrawerComponent = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [openSubcategoryIndex, setOpenSubcategoryIndex] = useState({});

  const toggleCategory = (index) => {
    setOpenCategoryIndex((prev) => (prev === index ? null : index));
  };

  const toggleSubcategory = (categoryIndex, subIndex) => {
    setOpenSubcategoryIndex((prev) => ({
      ...prev,
      [`${categoryIndex}-${subIndex}`]: !prev[`${categoryIndex}-${subIndex}`],
    }));
  };

  return (
    <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Box sx={{ width: 280 }} role="presentation">
        <div className="p-4 flex items-center justify-center bg-gray-100">
          <img src="Logo.jpg" alt="logo" className="h-12 w-auto object-contain" />
        </div>

        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">Shop By Categories</h3>
          <IoCloseSharp
            onClick={() => setIsDrawerOpen(false)}
            className="text-2xl text-gray-600 cursor-pointer hover:text-black transition"
          />
        </div>

        <ul className="w-full p-2">
          {categories.map((category, categoryIndex) => (
            <li key={category.name} className="list-none">
              <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-200 transition font-semibold">
                <LinkTag to={`/category/${encodeURIComponent(category.name)}`} name={category.name} />
                <span onClick={() => toggleCategory(categoryIndex)} className="cursor-pointer">
                  {openCategoryIndex === categoryIndex ? <FaMinusSquare /> : <FaPlusSquare />}
                </span>
              </div>

              {openCategoryIndex === categoryIndex && (
                <ul className="pl-4">
                  {category.subcategories.length > 0 ? (
                    category.subcategories.map((sub, subIndex) => {
                      const hasSubSubcategories = sub.subcategories.length > 0;
                      return (
                        <li key={sub.name} className="list-none">
                          <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 transition">
                            <LinkTag to={`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(sub.name)}`} name={sub.name} />
                            {hasSubSubcategories && (
                              <span onClick={() => toggleSubcategory(categoryIndex, subIndex)} className="cursor-pointer">
                                {openSubcategoryIndex[`${categoryIndex}-${subIndex}`] ? <FaMinusSquare /> : <FaPlusSquare />}
                              </span>
                            )}
                          </div>

                          {openSubcategoryIndex[`${categoryIndex}-${subIndex}`] && hasSubSubcategories && (
                            <ul className="pl-6 text-gray-600">
                              {sub.subcategories.map((subSub) => (
                                <li key={subSub} className="p-1">
                                  <LinkTag to={`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(sub.name)}/${encodeURIComponent(subSub)}`} name={subSub} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })
                  ) : (
                    <li className="p-2 text-gray-500 italic">No subcategories</li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;