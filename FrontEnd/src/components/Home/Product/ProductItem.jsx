import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoIosGitCompare } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import {MdZoomOutMap} from "react-icons/md";
const ProductItem = () => {
  return (
    <div className="product-item w-full overflow-hidden  border-1 border-black rounded-md shadow-md bg-white">
      <div className="product-image group w-full h-[240px] overflow-hidden rounded-t-md relative">
        <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" alt="product-imgae" className="w-full  "/>
        <span className="flex items-center absolute top-2 left-2 z-50 bg-primary text-white rounded-md p-1 text-[12px] font-medium">20%</span>
        <div className="flex flex-col absolute top-[-200px] right-0 items-center z-50 gap-2 w-[50px] transition-all duration-200 group-hover:top-3 opacity-0 group-hover:opacity-100">
      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  text-black group"><FiHeart className="text-lg !text-black group-hover:text-white hover:!text-white"/></Button>
      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  text-black group"><IoIosGitCompare className="text-lg !text-black group-hover:text-white hover:!text-white"/></Button>
      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  text-black group"><MdZoomOutMap className="text-lg !text-black group-hover:text-white hover:!text-white"/></Button>
  
        </div>
      </div>
      <div className="info w-full px-3 py-5">
         <h6 className="text-[13px] hover:text-primary transition-all"><Link to={"/"}>CLAFOUTIS</Link></h6>
         <h3 className="text-sm font-medium mt-1 text-black hover:text-primary transition-all"><Link to={"/"}>Men Opaque Casual Shirt</Link></h3>
        <Rating name="read-only" value={4} size="small" readOnly className=" mt-1"/>
        <div className="flex items-center justify-between">
                  <span className="old line-through font-medium text-gray-500">$58.60</span>
                  <span className="new text-primary font-semibold  ">$49.60</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
