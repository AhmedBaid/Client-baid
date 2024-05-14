import React, { useState, useEffect } from "react";
import "./login.css";
import Logo from "../../public/assets/logo2.png";

export default function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const body = { email, password };
        try {
            const response = await fetch("http://localhost:4500/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
                credentials: "include",
            });
            const parseRes = await response.json();

            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                setError("Email ou mot de passe incorrect");
            }
        } catch (err) {
            console.error(err.message);
            setError("An error occurred, please try again later");
        }
    };
    useEffect(() => {
        let timer;
        if (error) {
            timer = setTimeout(() => {
                setError(null);
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [error]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            {error ? (
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "10%",
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                    }}>
                    <div
                        classNameName="flex items-center p-4 mb-4 text-md text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                        role="alert">
                        <span classNameName="sr-only">Info</span>
                        <div>
                            <span classNameName="font-medium">{error}</span>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-64 h-32 mr-2" src={Logo} alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Authentification
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-primary-800">
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        // <div classNameName="login-box">
        //     <form onSubmit={handleLogin}>
        //         <div classNameName="user-box">
        //             <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //             <label>Username</label>
        //         </div>
        //         <div classNameName="user-box">
        //             <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //             <label>Password</label>
        //         </div>
        //         {error && <div classNameName="error-message">{error}</div>}
        //         <center>
        //             <button type='submit'>Allez!!</button>
        //             <span>

        //             </span>
        //         </center>
        //     </form>
        // </div>
    );
}
