import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import productsData from "../../../../../assets/data/products.json";
import ProductCards from "../../../Shop/ProductCards/ProductCards";

const CategoryDetails = () => {

    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const filtered = productsData.filter((product) => product.category === categoryName.toLowerCase());
        setFilteredProducts(filtered);
    }, [categoryName])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>

            <section className="section__container bg-primary-light">

                <h2 className="section__header capitalize">{categoryName}</h2>

                <p className="section__subheader">Browse a diverse range of categories, from chick dress to versatile accessories. Elevate your style today!</p>

            </section>

            <div className="section__container">
                <ProductCards productsData={filteredProducts}></ProductCards>
            </div>

        </>
    )
}

export default CategoryDetails