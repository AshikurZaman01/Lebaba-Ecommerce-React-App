import { useState } from "react";
import ProductCards from "../ProductCards/ProductCards";
import productsData from "../../../../assets/data/products.json";

const TrendingProducts = () => {
   
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4);
    };

    return (
        <div className="max-w-[1400px] mx-auto py-16 px-6 bg-gradient-to-r from-blue-50 to-white">
            <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-800">
                Trending Products
            </h2>
            <p className="max-w-[800px] mx-auto text-lg text-center text-gray-500 mb-10">
                Discover the most popular and trending products of the season. Find
                everything you need with amazing offers.
            </p>

            <ProductCards productsData={productsData.slice(0, visibleProducts)} />

            <div className="text-center mt-12">
                {visibleProducts < productsData.length && (
                    <button
                        className="px-6 py-3 bg-primary text-white rounded-full shadow-lg text-lg font-semibold hover:bg-primary-dark transform transition-all duration-300 hover:scale-105"
                        onClick={loadMoreProducts}
                    >
                        Load More
                    </button>
                )}
            </div>

            
        </div>
    );
};

export default TrendingProducts;
