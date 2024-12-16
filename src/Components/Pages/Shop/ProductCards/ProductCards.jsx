import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"
import RatingStar from "./RatingStar"


const ProductCards = ({ productsData }) => {
    console.log(productsData)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {
                productsData.map((product, index) => (

                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">

                        <div className="relative">

                            <Link to={`/shop/${product.id}`}>
                                <img src={product.image} alt={product.name} className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300" />
                            </Link>

                            <div className="hover:block absolute top-3 right-3">
                                <button>
                                    <GiShoppingCart size={30} className="bg-primary p-1.5 text-white hover:bg-primary-dark" />
                                </button>
                            </div>

                        </div>

                        <div className="text-center p-4">

                            <h4>{product.name}</h4>

                            <p>${product.price} {product?.oldPrice ? <s>${product?.oldPrice}</s> : null}</p>

                            <RatingStar rating={product.rating}></RatingStar>

                        </div>


                    </div>

                ))
            }

        </div>
    )
}

export default ProductCards