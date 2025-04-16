import Slider from "./Slider/HomeSlider"
import CategorySlider from "./Slider/CategorySlider"
import FirstSection from "./FirstSection"
import Products from "./Product"

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Slider/>
      <CategorySlider/>
      <FirstSection/>
      <Products/>
    </div>
  )
}

export default Home
