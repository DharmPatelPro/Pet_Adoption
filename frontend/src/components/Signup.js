import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/user/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authenticationtoken);
            navigate('/')
            window.location.reload()
        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>

            <section class="bg-gray-50">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <p class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        Sigup Page
                    </p>
                    <div class="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-md border-gray-400 shadow-gray-600 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Signup in to your account
                            </h1>
                            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="text" value={credentials.name} onChange={onChange} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="enter your name" required="" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" value={credentials.email} onChange={onChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>

                                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md border-gray-400 shadow-gray-600">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Signup