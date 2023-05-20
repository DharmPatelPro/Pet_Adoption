import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="shadow-md bg-slate-300  shadow-gray-400">

      <header >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-3xl">Pet Adoption Website</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 title-font text-2xl font-medium hover:text-gray-900"><Link to="/">Home</Link></a>
            {localStorage.getItem('token') && <a class="mr-5 title-font text-2xl font-medium hover:text-gray-900"><Link to="/dashboard">Dashboard</Link></a>}
            <a class="mr-5 title-font text-2xl font-medium hover:text-gray-900"><Link to="/aboutus">About Us</Link></a>
          </nav>
          {!(localStorage.getItem('token')) &&<Link to="/login" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>}
          {/* {localStorage.getItem('token') && <p>log out</p>} */}
          {localStorage.getItem('token') &&<Link to="/login" onClick={() => { localStorage.removeItem("token").then(window.location.reload()) }} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login Out
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>}
        </div>
      </header>

    </nav>
  )
}

export default Navbar