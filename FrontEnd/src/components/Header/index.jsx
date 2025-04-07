/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "../Search";
import Navigation from "./Navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import Tooltip from '@mui/material/Tooltip';


export const LinkTag = ({ to, name }) => {
  return (
    <Link
      className="hover:text-[#ff5252] transition text-[16px]"
      to={to}
    >
      {name}
    </Link>
  );
};


const CartIcon = ({ count, Name, name }) => {
  return (
    <Tooltip title={name}>
      <div className="relative w-9 h-10 flex items-center cursor-pointer">
        <Name className="w-7 h-7 text-gray-800 hover:text-primary transition-colors duration-300" />
        {count > 0 && (
          <span className="absolute -top-[0.5px] -right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    </Tooltip>
  );
};


const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-stripe py-3 border border-t-1 border-b-1 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-1/2">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-center">
              <ul className="flex items-center gap-3 font-medium">
                <li className="list-none">
                  <LinkTag to={"/help-center"} name={"Help Center"} />
                </li>
                <li className="list-none">
                  <LinkTag to={"/order-track"} name={"Order Tracking"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border border-b-1 border-gray-300">
        <div className="container flex items-center justify-between w-full">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="Logo.jpg" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center p-5">
            <ul className="flex items-center gap-3 w-full justify-end">
              <li className="list-none font-medium">
                <LinkTag to={"/login"} name={"Login"} /> |{" "}
                <LinkTag to={"/register"} name={"Register"} />
              </li>
              <li className="list-none">
              <CartIcon count={4} Name={IoIosGitCompare} name={"compare"}/>
              </li>
              <li className="list-none">
              <CartIcon count={4} Name={FiHeart} name={"wishlist"}/>
              </li>
              <li className="list-none">
              <CartIcon count={4} Name={AiOutlineShoppingCart} name={"cart"}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <Navigation/>
    </header>
  );
};

export default Header;
