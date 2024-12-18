import { useEffect, useState } from "react";
import productsData from "../../../assets/data/products.json";
import ProductCards from "./ProductCards/ProductCards";
import Left from "./LeftSIdePortion/Left";

const filterProducts = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRange: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity },
    ]
};

const Shop = () => {
    const [products, setProducts] = useState(productsData);
    const [filterState, setFilterState] = useState({
        categories: 'all',
        colors: 'all',
        priceRange: ''
    });

    const applyFilters = () => {

        let filteredProducts = [...productsData];

        // Filter by category
        if (filterState.categories && filterState.categories !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.categories);
        }

        // Filter by color (fixing color filtering to handle a string)
        if (filterState.colors && filterState.colors !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.colors); // Compare color as a string
        }

        // Filter by price range
        if (filterState.priceRange && filterState.priceRange !== '') {
            const range = filterState.priceRange.split('-').map(Number);
            const min = range[0];
            const max = range[1] || Infinity;
            filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
        }

        setProducts(filteredProducts);
    };

    useEffect(() => {
        applyFilters();
    }, [filterState]);

    const clearFilters = () => {
        setFilterState({
            categories: 'all',
            colors: 'all',
            priceRange: ''
        });
    };

    return (
        <>
            <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 text-center">
                <h2 className="text-3xl font-bold uppercase mb-2">Shop Page</h2>
                <p className="text-lg">Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
            </section>

            <section className="container mx-auto my-8 px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Side Filters */}
                    <Left
                        filterProducts={filterProducts}
                        filterState={filterState}
                        setFilterState={setFilterState}
                        clearFilters={clearFilters}
                    />

                    {/* Right Side Products */}
                    <div className="flex-1">
                        <h3 className="text-xl font-medium mb-4 text-gray-700">Products Available: {products.length}</h3>
                        <ProductCards productsData={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
