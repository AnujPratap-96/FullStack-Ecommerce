import Slider from "./Slider/HomeSlider"
import CategorySlider from "./Slider/CategorySlider"
import FirstSection from "./FirstSection"

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Slider/>
      <CategorySlider/>
      <FirstSection/>
    </div>
  )
}

export default Home
