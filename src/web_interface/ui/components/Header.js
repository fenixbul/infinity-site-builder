import React from "react";

const Footer = () => {
  return (
    <header class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* <!-- Logo (left) --> */}
        <div class="flex-shrink-0">
          <a href="#" class="text-xl font-bold">
            <img src="/logo.svg" alt="Logo" class="h-8 w-auto" />
          </a>
        </div>
        
        {/* <!-- Navigation (middle) --> */}
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-300 hover:text-white">Home</a>
          <a href="#" class="text-gray-300 hover:text-white">About</a>
          <a href="#" class="text-gray-300 hover:text-white">Services</a>
          <a href="#" class="text-gray-300 hover:text-white">Contact</a>
        </nav>
        
        {/* <!-- Actions (right) --> */}
        <div class="flex items-center space-x-4">
          <button class="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
            Sign In
          </button>
          <button class="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600">
            Sign Up
          </button>
        </div>
        
        {/* <!-- Mobile Menu Button --> */}
        <div class="md:hidden">
          <button class="text-gray-400 hover:text-white focus:outline-none">
            {/* <!-- Mobile Menu Icon (hamburger) --> */}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
};

export default Footer;