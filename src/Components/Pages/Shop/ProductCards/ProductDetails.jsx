import { IoIosArrowUp } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import SinglePageDetails from "./SinglePageDetails";
import { useState } from "react";

const ProductDetails = () => {

    const { id } = useParams();

    const [productName, setProductName] = useState('');

    return (
        <>
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 text-center">
                <h2 className="text-4xl font-semibold mb-4">Product Details</h2>

                <div className="flex items-center justify-center gap-4">
                    <span className="hover:text-blue-300 transition-all duration-300"><Link to={"/"}>home</Link></span>
                    <IoIosArrowUp size={20} className="rotate-90" />
                    <span className="hover:text-blue-300 transition-all duration-300"><Link to={'/shop'}>shop</Link></span>
                    <IoIosArrowUp size={20} className="rotate-90" />
                    <span className="hover:text-blue-300 transition-all duration-300"><Link to={'/shop'}>{productName}</Link></span>
                </div>
            </section>

            <div>
                <SinglePageDetails productId={id} setProductName={setProductName}></SinglePageDetails>
            </div>

        </>
    );
}

export default ProductDetails;
