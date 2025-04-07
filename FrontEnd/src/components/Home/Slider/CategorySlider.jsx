import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const CategorySlider = () => {
  return (
    <div className="categoryslider pb-8 pt-4">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          navigation={true}
          className="CategorySwiper"
        >
          <SwiperSlide>
            <Link to={"/fashion"}>
              <div className="py-7 px-3 bg-white rounded-lg  text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/fashion.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/electronics"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/electronics.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/bags"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/bags.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/footwear"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/footwear.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/grocery"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/grocery.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/beauty"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/beauty.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/wellness"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/wellness.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/jewellery"}>
              <div className="py-7 px-3 bg-white rounded-lg text-center flex items-center  justify-center flex-col">
                <img
                  src="./CategorySlider/jwellery.png"
                  alt="fashion"
                  className="w-[60px] hover:scale-110 transition-all duration-300"
                />
                <h3 className="text-sm font-medium mt-3">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
