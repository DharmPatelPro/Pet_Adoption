import React from 'react'

function Aboutus() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About us</h1>
                        <p class="leading-relaxed text-base">Welcome to our pet adoption website! We are passionate about finding loving homes for animals in need and connecting them with caring individuals and families. </p><br/>
                        <p class="leading-relaxed text-base">This portal helps bringing together dogs, cats, and other animals available to adopt. Anyone can view and apply to available animals for adoption at one place, rather than having to check each rescue individually. </p><br/>
                        <p class="leading-relaxed text-base">We are grateful for your interest in our pet adoption website, and we hope that through our platform, you'll find your perfect companion and make a lasting difference in an animal's life. Happy adoption!</p><br/>   
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