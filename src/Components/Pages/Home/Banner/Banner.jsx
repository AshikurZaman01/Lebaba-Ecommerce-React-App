import { Link } from "react-router-dom"
import bannerImg from "../../../../assets/images/header.png"

const Banner = () => {
    return (
        <div className="section__container header__container">

            <div className="header__content z-30">

                <h4 className="uppercase">UP TO 20% Discount on</h4>

                <h1 className="">Girl's Fashoin</h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, facere labore, unde beatae, modi sunt aperiam velit ea laudantium neque amet quidem repudiandae tempora et magnam! Laborum impedit autem ex!</p>

                <button className="btn">
                    <Link to="/shop">Explore Now</Link>
                </button>
            </div>

            <div className="header__image md:w-full hidden md:block">
                <img src={bannerImg} alt="" />
            </div>


        </div>
    )
}

export default Banner