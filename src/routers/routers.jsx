import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import Shop from "../Components/Pages/Shop/Shop";
import Pages from "../Components/Pages/Pages/Pages";
import Contact from "../Components/Pages/Contact/Contact";
import CategoryDetails from "../Components/Pages/Home/Categories/CategoryDetails/CategoryDetails";
import SearchProducts from "../Components/Pages/SearchProducts/SearchProducts";
import ProductDetails from "../Components/Pages/Shop/ProductCards/ProductDetails";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:categoryName',
                element: <CategoryDetails></CategoryDetails>
            },
            {
                path: '/search',
                element: <SearchProducts></SearchProducts>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/shop/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/pages",
                element: <Pages></Pages>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }

])

export default router;