import { createSlice } from '@reduxjs/toolkit'

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
                state.products.push({ ...action.payload, quantity: 1 })
            } else {
                alert('This product is already in the cart')
            }

            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);

        }
    }

})

export const setSelectedItems = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity)
})

export const setTotalPrice = (state) => state.products.reduce((total, product) => {
    return Number(total + (product.price * product.quantity))
})

export const setTax = (state) => setTotalPrice(state) * state.taxRate

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTax(state)
}

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;