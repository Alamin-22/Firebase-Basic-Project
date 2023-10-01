import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import HOme from "../Components/Home/HOme";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ORders from "../Components/Orders/ORders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Profile/Profile";
import DashBoard from "../Components/DashBoard/DashBoard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: "/",
                element: <HOme></HOme>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/orders",
                element: <PrivateRoute><ORders></ORders></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },

        ]
    },
]);
export default router;