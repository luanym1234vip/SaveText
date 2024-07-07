import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Empty from "../pages/Empty.jsx"
const AuthLayout = () => {
    return <Outlet />
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <Empty />,
        children: [
            {
                element: <Home />,
                path: "/",
            }
        ]
    }
])