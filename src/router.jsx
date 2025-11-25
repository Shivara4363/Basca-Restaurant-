import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Event from "./pages/Event";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Cocktail from "./pages/Cocktail";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/restaurant",
                element: <Restaurant />
            },
            {
                path: "/cocktail",
                element: <Cocktail />
            },
            {
                path: "/event",
                element: <Event />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])

export default router
