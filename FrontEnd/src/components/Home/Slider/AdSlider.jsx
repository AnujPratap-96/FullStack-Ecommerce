import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdSlider = ({items}) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={items}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="HomeSlider"
      >
        <SwiperSlide>
         <BannerBox image={"./AdBanner/banner1.jpeg"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
         <BannerBox image={"./AdBanner/banner2.jpeg"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
         <BannerBox image={"./AdBanner/banner3.jpeg"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
         <BannerBox image={"./AdBanner/banner4.jpeg"} link={'/'}/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default AdSlider;
