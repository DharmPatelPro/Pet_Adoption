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
            <a class="mr-5 title-font text-2xl font-medium hover:text-gray-900"><Link to="/dashboard">Dashboard</Link></a>
            <a class="mr-5 title-font text-2xl font-medium hover:text-gray-900"><Link to="/login">Login</Link></a>
          </nav>

        </div>
      </header>

    </nav>
  )
}

export default Navbar