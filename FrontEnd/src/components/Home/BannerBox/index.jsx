/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BannerBox = ({ image, link }) => {
  return (
    <>
      <div className="box overflow-hidden rounded-lg shadow-lg group  ">
        <Link to={link}>
          <img src={image} alt="Banner" className="w-full group-hover:scale-105 group-hover:rotate-2 transition-all"/>
        </Link>
      </div>
    </>
  );
};

export default BannerBox;
