import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Restaurant from "./src/pages/Restaurant";
import Event from "./src/pages/Event";
import About from "./src/pages/About";


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
                path: "/event",
                element: <Event />
            },
            {
                path: "/about",
                element: <About />
            },

        ]
    }
])

export default router