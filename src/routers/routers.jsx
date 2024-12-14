import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import Shop from "../Components/Pages/Shop/Shop";
import Pages from "../Components/Pages/Pages/Pages";
import Contact from "../Components/Pages/Contact/Contact";

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