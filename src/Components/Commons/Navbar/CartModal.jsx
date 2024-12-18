import { MdClose } from "react-icons/md";
import Ordersummary from "./Ordersummary";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../../Redux/Features/Cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {

    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div
            className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity 
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: 'opacity 300ms' }}
        >
            <div
                className={`fixed right-0 top-0 md:w-[45%] w-full bg-white h-full overflow-y-auto shadow-xl rounded-l-lg transform transition-transform 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{
                    transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}
            >
                <div className="flex justify-between items-center p-6 bg-gray-800 text-white rounded-tl-lg">
                    <h4 className="text-2xl font-semibold">Your Cart</h4>
                    <button onClick={onClose} className="text-white hover:text-gray-400">
                        <MdClose className="w-6 h-6" />
                    </button>
                </div>

                <div>
                    {products.length > 0 ?
                        (<div>
                            {products.map((product, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4">
                                    <div className="flex items-center">
                                        <span className="mr-4 px-1 bg-primary text-white rounded-full">0{index + 1}</span>
                                        <img src={product.image} alt="" className="size-12 object-cover mr-4" />
                                        <div>
                                            <h5 className="text-lg font-medium">{product.name}</h5>
                                            <p className="text-gray-600 text-sm">${Number(product.price).toFixed(2)}</p>
                                        </div>

                                        <div className="flex flex-row md:justify-start justify-end items-center mt-2">
                                            <button onClick={() => handleDecrement(product.id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8">-</button>
                                            <span onClick={() => handleRemove(product.id)} className="px-2 text-center mx-1">{product.quantity}</span>
                                            <button onClick={() => handleIncrement(product.id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white">+</button>
                                        </div>

                                        <div className="ml-5">
                                            <button 
                                                onClick={() => handleRemove(product.id)} 
                                                className="text-red-500 hover:text-red-800 mr-4 text-sm">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div>
                                <Ordersummary />
                            </div>
                        </div>) :
                        (<div className="flex justify-center items-center h-[70vh] text-2xl">
                            <h1>Your Cart Is Empty</h1>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
}

export default CartModal;
