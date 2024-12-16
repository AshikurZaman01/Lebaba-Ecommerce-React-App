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

        </div>
    )
}

export default Home