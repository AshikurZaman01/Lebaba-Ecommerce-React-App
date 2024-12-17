import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import Shop from "../Components/Pages/Shop/Shop";
import Pages from "../Components/Pages/Pages/Pages";
import Contact from "../Components/Pages/Contact/Contact";
import CategoryDetails from "../Components/Pages/Home/Categories/CategoryDetails/CategoryDetails";
import SearchProducts from "../Components/Pages/SearchProducts/SearchProducts";

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
                path: "/pages",
                element: <Pages></Pages>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;