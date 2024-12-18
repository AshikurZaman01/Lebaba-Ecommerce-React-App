import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const isExists = state.products.find((item) => item.id === action.payload.id);

            if (!isExists) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                alert('This product is already in the cart');
            }

            // Update totals after adding an item
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },

        incrementQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
            // Recalculate totals
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },

        decrementQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
            // Recalculate totals
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
            // Recalculate totals
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        }
    }
});

// Utility functions
export const setSelectedItems = (state) => {
    return state.products.reduce((total, product) => total + product.quantity, 0);
}

export const setTotalPrice = (state) => {
    return state.products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTax(state);
}

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
