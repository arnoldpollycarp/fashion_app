import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '/src/assets/logo.png'
import { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10">
      <nav className={`py-2 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
        <div className='flex item-center justify-between'>
         <div className="font-bold text-lg cursor-pointer text-black">
           <Link to="/" className='flex'>
            <img src={logo} alt="logo" className='h-20 mt-0.1 rounded-full shadow-xl' /> 
            <p className='mt-4 ml-2 text-indigo-600'>Fashion App</p>
           </Link>
         </div>

          {/*for large devices*/}
          <div className='lg:flex itme-center gap-3 hidden text-stone-600'>
            <Link to="/dashboard" className="block hover:text-gray-400 py-2 px-4">Home</Link>
            <Link to="/products" className="block hover:text-gray-400 py-2 px-4">Men</Link>
            <a href="/" className="block hover:text-gray-400 py-2 px-4">Women</a>
            <a href="/" className="block hover:text-gray-400 py-2 px-4">About Us</a>
          </div>

          {/* login btn */}

            <div className='lg:flex hidden'>
            <CiShoppingCart className='text-indigo-600 text-3xl mr-5 hover:text-black' />
            <Link to='/login'><button className='h-8 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100'>Login</button></Link>
            </div>

            {/* menu for small devices */}
            <button onClick={toggleMenu} className='lg:hidden text-indigo-600 text-3xl mt-1'>
              <HiMenu />
            </button>
          </div>
          {/* nav items for small devices */}
          {isMenuOpen && (
            <div className="mt-4 bg-indigo-500 rounded-md text-white transition duration-500 ease-in-out">
              <a href="/" className="block hover:text-gray-400 py-2 px-4">Home</a>
              <a href="/" className="block hover:text-gray-400 py-2 px-4">Men</a>
              <a href="/" className="block hover:text-gray-400 py-2 px-4">Women</a>
              <a href="/" className="block hover:text-gray-400 py-2 px-4">About Us</a>
            </div>
          )}
        
      </nav>
    </header>
  )
}
