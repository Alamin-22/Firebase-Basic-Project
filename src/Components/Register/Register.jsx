import { useContext } from "react";
import { AuthContext } from "../../Provider/UserProvider";

const Register = () => {

    const { CreateUser } = useContext(AuthContext);




    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        // create user in FireBase
        CreateUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })


    }



    return (
        <div>
            <div className="relative ">
                <img src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full" alt="" />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex  items-center justify-center xl:flex-row">
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Sign up for updates
                                    </h3>
                                    <form onSubmit={handleRegister}>
                                        <div className="mb-1 sm:mb-2">
                                            <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                                                Full Name
                                            </label>
                                            <input placeholder="John" required type="text" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                name="name" />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label htmlFor="email" className="inline-block mb-1 font-medium">
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="john.doe@example.org"
                                                required
                                                type="email"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label htmlFor="password" className="inline-block mb-1 font-medium" >
                                                Password
                                            </label>
                                            <input placeholder="Your Password" required
                                                type="password"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="password"
                                                name="password" />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <input type="submit" value="Register" className="btn btn-secondary text-white w-full" />
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;