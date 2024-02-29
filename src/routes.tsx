import { createBrowserRouter } from "react-router-dom";
import App from "./_pages/App";
import Focus from "./_pages/Focus";
import Default from "./_layouts/Default";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Default/>,
        children:[{
            path: "/",
            element:<App/>
        },
        {
            path:"/tweet",
            element: <Focus/>
        }]
    }
])