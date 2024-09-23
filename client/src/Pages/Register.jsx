import React from 'react'
import image_1 from '../assets/hero_2.png'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
      <div className=' h-screen flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 my-1 mx-5 md:mx-0 md:my-0'>
        <div className=' w-1/2 max-w-lg'>
        <p className=' text-center text-indigo-600 font-extrabold font-mono text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'>Fashion App</p>
          {/* image section  */}
          <img src={image_1} alt="" className='drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'/>
        </div>

        <div className=' md:w-[700px] w-[400px] border p-2 rounded-md'>
          <div className='text-center'>
            <div className='flex justify-center'>
              <img src={logo} alt="" className='w-[100px] border rounded-full shadow-lg'/>
            </div>
            <h1 className=' text-indigo-500 font-semibold font-mono'>Register</h1>
            <form action="">
              <div className=' grid grid-rows-2 md:grid-cols-2 grid-flow-row space-y-2 gap-1'>
                <input type="text" placeholder='Enter First Name' className='w-full text-gray-400 border rounded-md p-2' />
                <input type="text" placeholder='Enter Last Name' className='w-full text-gray-400 border rounded-md p-2' />

                <input type="email" placeholder='Enter Email' className='w-full text-gray-400 border rounded-md p-2' />
                <input type="text" placeholder='Enter Phone Number (2547xxxxx)' className='w-full text-gray-400 border rounded-md p-2' />

                <input type="Password" placeholder='Enter Password' className='w-full text-gray-400 border rounded-md p-2' />
                <input type="password" placeholder='Comfirm Password' className='w-full text-gray-400 border rounded-md p-2' />
              </div>
              <div className="text-center md:text-left">
          <button
            className=" w-full mt-4 bg-gradient-to-r from-indigo-600 to-indigo-300 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
            </form>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          You have an account?{" "}
          <Link
            className="text-indigo-600 hover:underline hover:underline-offset-4"
            to={'/login'}
          >
            Login
          </Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
