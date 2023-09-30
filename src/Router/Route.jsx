import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import HOme from "../Components/Home/HOme";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";



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
            
        ]
    },
]);
export default router;