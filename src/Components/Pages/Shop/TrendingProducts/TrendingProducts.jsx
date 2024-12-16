import { useState } from "react";
import ProductCards from "../ProductCards/ProductCards"
import productsData from "../../../../assets/data/products.json"

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(4);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4);
    }

    return (
        <div className="max-w-[var(--max-width-1400)] mx-auto py-10 px-4">

            <h2 className="mb-4 text-2xl font-extrabold text-[var(--text-dark)] text-center">Trending Products</h2>

            <p className="max-w-[800px] mx-auto text-[var(--text-light)] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, reprehenderit tenetur nam pariatur porro incidunt eos nostrum ipsa.</p>

            <ProductCards productsData={productsData}></ProductCards>

        </div>
    )
}

export default TrendingProducts