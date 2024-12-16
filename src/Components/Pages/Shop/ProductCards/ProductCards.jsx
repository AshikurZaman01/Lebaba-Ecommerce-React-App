import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

const ProductCards = ({ productsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="relative">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 md:h-64 w-full object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </Link>
            <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button>
                <GiShoppingCart size={30} className="bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-all duration-300" />
              </button>
            </div>
          </div>
          <div className="text-center p-6">
            <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
            <p className="text-lg text-gray-600 mt-2">
              ${product.price}{" "}
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
              )}
            </p>
            <RatingStar rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
    