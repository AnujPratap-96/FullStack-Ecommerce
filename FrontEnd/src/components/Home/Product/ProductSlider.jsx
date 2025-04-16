/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {  Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";

const ProductSlider = ({items}) => {
  return (
    <div className="product-slider py-3">
      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={true}
        className="CategorySwiper"
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
