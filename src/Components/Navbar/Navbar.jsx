import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/UserProvider";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                console.log("User LogOut SuccessFully")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const Links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/login"}>LogIn</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
        {
            user && <>
                <li><NavLink to={"/profile"}>Profile</NavLink></li>
                <li><NavLink to={"/dashboard"}>DashBoard</NavLink></li>
                <li><NavLink to={"/orders"}>Purchase</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Agun<span className="text-yellow-300">Web</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-sm">Sing Out</a>
                    </>
                        :
                        <Link to={"/login"} className="btn btn-sm">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;