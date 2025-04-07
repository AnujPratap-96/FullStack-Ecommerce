import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="HomeSlider"
        >
          <SwiperSlide>
            <div className="rounded-2xl overflow-hidden">
              <img src="./HomeSlider/SliderImage1.jpg" alt="Image 1" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl overflow-hidden">
              <img src="./HomeSlider/SliderImage2.jpg" alt="Image 1" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl overflow-hidden">
              <img src="./HomeSlider/SliderImage3.jpg" alt="Image 1" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl overflow-hidden">
              <img src="./HomeSlider/SliderImage4.jpg" alt="Image 1" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
