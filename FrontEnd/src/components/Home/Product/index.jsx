import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "./ProductSlider";

import { useState } from "react";
const Products = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between ">
          <div className="leftsec">
            <h3 className="text-xl font-semibold">Popular Products</h3>
            <p className="text-base font-medium">
              Check out our most popular products
            </p>
          </div>
          <div className="rightsec w-[60%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Fashion" />
              <Tab label="Electronics" />
              <Tab label="Bags" />
              <Tab label="Footwear" />
              <Tab label="Groceries" />
              <Tab label="Beauty" />
              <Tab label="Wellness" />
              <Tab label="Jewelry" />
              
            </Tabs>
          </div>
        </div>
      <ProductSlider items={5}/>
      </div>
    </section>
  );
};

export default Products;
