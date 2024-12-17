import { useState, useEffect } from "react";
import productsData from "../../../assets/data/products.json";
import ProductCards from "../Shop/ProductCards/ProductCards";

const SearchProducts = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredProducts(productsData);
        } else {
            const filtered = productsData.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery]);

    return (
        <>
            <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight">Search Products</h2>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">
                        Explore a wide variety of products across different categories. Find your perfect style today!
                    </p>
                </div>
            </section>

            {/* Search Section */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-3/4 p-4 rounded-xl shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder:text-gray-500"
                        />

                        <button
                            onClick={() => setSearchQuery(searchQuery)}
                            className="w-full md:w-auto py-4 px-8 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Results Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredProducts.length > 0 ? (
                        <ProductCards productsData={filteredProducts} />
                    ) : (
                        <p className="text-center text-gray-500 mt-4 text-lg">No products found</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default SearchProducts;
