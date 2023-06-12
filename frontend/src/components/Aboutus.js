import React from 'react'

function Aboutus() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container flex flex-wrap px-5 py-10 mx-auto items-center">
                    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About us</h1>
                        <p class="leading-relaxed text-base">Welcome to our pet adoption website! We are passionate about finding loving homes for animals in need and connecting them with caring individuals and families. </p><br/>
                        <p class="leading-relaxed text-base">This portal helps bringing together dogs, cats, and other animals available to adopt. Anyone can view and apply to available animals for adoption at one place, rather than having to check each rescue individually. </p><br/>
                        <p class="leading-relaxed text-base">We are grateful for your interest in our pet adoption website, and we hope that through our platform, you'll find your perfect companion and make a lasting difference in an animal's life. Happy adoption!</p><br/>   
                        <a href='https://github.com/DharmPatelPro/Pet_Adoption.git'
                            target="_blank"
                            rel="noreferrer"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            class="mb-2 flex w-36  rounded px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            style={{ backgroundColor: "#333" }}>

                            Visit Github&nbsp;<svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col md:w-1/2 md:pl-12">
                        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">By students of RCTI(CE)</h2>
                        <nav class="flex flex-wrap list-none -mb-1">
                            <li class="lg:w-full mb-1 w-full">
                                <a class="text-gray-600 hover:text-gray-800">Dharm Patel (206400307030)</a>
                            </li>
                            <li class="lg:w-full mb-1 w-full">
                                <a class="text-gray-600 hover:text-gray-800">Devanshu Jadav(206400307044)</a>
                            </li>
                            <li class="lg:w-full mb-1 w-full">
                                <a class="text-gray-600 hover:text-gray-800">Kalash Mehta (206400307031)</a>
                            </li>
                           
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus