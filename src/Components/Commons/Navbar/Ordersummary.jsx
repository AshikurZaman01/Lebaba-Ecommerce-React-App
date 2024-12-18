import { useSelector } from "react-redux";

const OrderSummary = () => {
    const { tax, taxRate, grandTotal, selectedItems, totalPrice } = useSelector((state) => state.Cart);

    return (
        <div className="bg-primary-light mt-5 text-base">
            <div className="px-6 space-y-5">
                <h2 className="text-2xl font-bold text-text-dark">Order Summary</h2>

                <p>Selected Items: {selectedItems}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Tax ({(taxRate * 100).toFixed(0)}%): ${tax.toFixed(2)}</p>
                <p className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default OrderSummary;
