import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayOut;