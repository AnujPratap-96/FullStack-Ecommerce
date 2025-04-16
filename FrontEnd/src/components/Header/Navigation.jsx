import { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { LinkTag } from "./index";
import Drawer from "./Drawer";
import { categories } from "../utils/constant";



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
