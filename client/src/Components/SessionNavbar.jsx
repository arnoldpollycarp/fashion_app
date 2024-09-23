import React from 'react'
import { useEffect, useState } from 'react'
import logo from '/src/assets/logo.png'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SessionNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY > 0){
            setIsSticky(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll)
      }, [])

  return (
    <div>
      <header className="w-full fixed top-0 left-0 right-0 z-10">
        <nav className={`py-2 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
            <div className='flex item-center justify-between'>
            <div className="font-bold text-lg cursor-pointer text-black">
            <Link to="/" className='flex'>
                <img src={logo} alt="logo" className='h-20 mt-0.1 rounded-full shadow-xl' /> 
                <p className='mt-4 ml-2 text-indigo-600'>Fashion App</p>
            </Link>
            </div>

            <div className='lg:flex'>
            
            <Link to='/'><FaHome className='text-indigo-600 text-3xl mr-5 hover:text-black' /> Home </Link>
            </div>
           
            </div>
        </nav>
      </header>
      
    </div>
  )
}
