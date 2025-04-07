import { LiaShippingFastSolid } from "react-icons/lia";
import AdSlider from "./Slider/AdSlider";

const FirstSection = () => {
  
  return (
    <section className="py-16 bg-white ">
      <div className="container ">
        <div className="freesShiping w-3/4 m-auto py-5 px-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
          <div className="col1 flex items-center gap-4">
            <LiaShippingFastSolid className="text-5xl" />
            <span className="text-2xl font-semibold">FREE SHIPPING</span>
          </div>
          <div className="col2 flex items-center ">
            <p className="font-medium">Free Delivery Now on Your First Order and over $200</p>
          </div>
          <div>
            <p className="font-bold text-4xl">- Only $200</p>
          </div>
        </div>
        <AdSlider items={4}/>
      </div>
    </section>
  );
};

export default FirstSection;
