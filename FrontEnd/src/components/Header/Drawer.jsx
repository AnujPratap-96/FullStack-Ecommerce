/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import { LinkTag } from "./index";
import { IoCloseSharp } from "react-icons/io5";
import { categories } from "../utils/constant"; // Adjust the import path as necessary



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