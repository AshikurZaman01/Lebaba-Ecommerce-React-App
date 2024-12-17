import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Features/Cart/cartSlice'

export const store = configureStore({
    reducer: {
        Cart: cartSlice
    },
})