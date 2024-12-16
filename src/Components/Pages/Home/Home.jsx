import Blogs from "../Blogs/Blogs"
import DealSection from "../DealSection/DealSection"
import Services from "../Services/Services"
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

            <Services></Services>

            <Blogs></Blogs>

        </div>
    )
}

export default Home