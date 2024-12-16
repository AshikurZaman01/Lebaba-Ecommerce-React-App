import DealSection from "../DealSection/DealSection"
import TrendingProducts from "../Shop/TrendingProducts/TrendingProducts"
import Banner from "./Banner/Banner"
import Categories from "./Categories/Categories"
import HeroSection from "./HeroSection/HeroSection"

const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Categories></Categories>

            <HeroSection></HeroSection>

            <TrendingProducts></TrendingProducts>

            <DealSection></DealSection>

        </div>
    )
}

export default Home