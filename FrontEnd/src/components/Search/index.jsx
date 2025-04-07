
import Button from '@mui/material/Button';
import {IoSearch} from "react-icons/io5"


const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-sm relative p-2">
      <input
        type="text"
        placeholder="Search for Product"
        className="w-full h-full p-1 focus:outline-none bg-inherit text-sm placeholder:text-black"
      />
   <Button className='!absolute top-1 right-1 z-10 !w-[37px] !min-w-[30px] !h-[37px] !rounded-full !text-black' ><IoSearch className='text-gray-600 text-[22px]'/></Button>
    </div>
  );
};

export default Search;
