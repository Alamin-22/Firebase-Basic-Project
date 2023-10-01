import { useContext } from "react";
import { AuthContext } from "../../Provider/UserProvider";

const HOme = () => {
    const contextInfo = useContext(AuthContext);
    console.log(contextInfo);
    return (
        <div>
            <h1 className="text-3xl">This is home</h1>
        </div>
    );
};

export default HOme;