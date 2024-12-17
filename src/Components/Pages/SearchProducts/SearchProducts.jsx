import { useState, useEffect } from "react";
import productsData from "../../../assets/data/products.json";
import ProductCards from "../Shop/ProductCards/ProductCards";

const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productsData);  // Initialize with all products

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredProducts(productsData); // Show all products if no search query
        } else {
            const filtered = productsData.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered); // Filtered products based on search
        }
    }, [searchQuery]); // Runs whenever searchQuery changes

    return (
        <>
            {/* Section for heading and subheader */}
            <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold capitalize">Search Products</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!
                    </p>
                </div>
            </section>

            {/* Section for search bar */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <input
                            type="text"
                            placeholder="Search For Products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-3/4 p-3 rounded-xl shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                        />
                        <button
                            onClick={() => setSearchQuery(searchQuery)} // Trigger re-filter when search button is clicked
                            className="w-full md:w-auto py-3 px-8 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
                        >
                            Search
                        </button>
                    </div>

                    {/* Display filtered products */}

                </div>

                <div className="mt-20">
                    {filteredProducts.length > 0 ? (
                        <ProductCards productsData={filteredProducts} />
                    ) : (
                        <p className="text-center text-gray-500 mt-4">No products found</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default SearchProducts;
