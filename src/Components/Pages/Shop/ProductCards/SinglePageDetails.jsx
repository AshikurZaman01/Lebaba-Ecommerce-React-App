import { useEffect, useState } from "react";
import productData from "../../../../assets/data/products.json";
import RatingStar from "./RatingStar";

const SinglePageDetails = ({ productId, setProductName }) => {

    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        const findData = productData.find((product) => product.id === parseInt(productId));
        setSingleProduct(findData);
    }, [productId]);

    setProductName(singleProduct?.name);

    if (!singleProduct) return <div>Loading...</div>;

    return (
        <div className="section_container mt-10 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="flex flex-col items-center md:flex-row gap-12 md:gap-24">
                {/* Image Section */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.name}
                        className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
                    />
                </div>

                {/* Product Details Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-start items-start">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-4">{singleProduct.name}</h3>

                    <p className="text-2xl text-primary font-bold mb-4">
                        ${singleProduct.price}
                        <span className="text-gray-500 line-through ml-2">${singleProduct.price + 70}</span>
                    </p>

                    <p className="text-lg text-gray-600 mb-6">{singleProduct.description}</p>

                    <div className="space-y-4">
                        {/* Category & Color */}
                        <div className="flex items-center">
                            <strong className="text-gray-800">Category: </strong>
                            <p className="ml-2 text-primary">{singleProduct.category}</p>
                        </div>
                        <div className="flex items-center">
                            <strong className="text-gray-800">Color: </strong>
                            <p className="ml-2 text-primary">{singleProduct.color}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center">
                            <strong className="text-gray-800">Rating: </strong>
                            <div className="ml-2">
                                <RatingStar rating={singleProduct.rating} />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex gap-6">
                        <button className="bg-primary text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors">
                            Add to Cart
                        </button>
                        <button className="bg-transparent border-2 border-primary text-primary py-3 px-8 rounded-full font-semibold text-lg hover:bg-primary-light transition-colors">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePageDetails;
