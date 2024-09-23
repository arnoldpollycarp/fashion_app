import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { MdDashboard, MdOutlineSettings, MdOutlinePowerSettingsNew, MdOutlineHelpOutline, MdKeyboardArrowRight } from "react-icons/md";


export default function SideNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuList = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard className='text-2xl -mt-1'/>
    },
    {
      name: "Products",
      path: "/products",
      icon: <FaShoppingBasket className='text-2xl -mt-1' />
    }

  ]
  return (
  
    <div className={`bg-gradient-to-t ${open ? "w-60" : "w-20"} duration-500 p-3 from-indigo-600 to-indigo-300 lg:flex flex-col relative`}>
      <div className='flex-1 border-b-2 md:flex-1'>
        {/* logo part */}
        <div className='flex flex-row h-[100px] border-b-2'>
            <img src={logo} alt="logo" className={`h-20 mt-0.1 rounded-full shadow-xl ${!open && "rotate-[360deg]"}`} /> 
            <p className={`text-white font-extrabold pt-6 pl-4 duration-500 ${!open && "hidden"}`}>Fashion App</p>
        </div>
        <div className='flex flex-col text-white font-bold space-y-4 p-3'>
          {
            menuList.map((item) => (
              <Link to={item.path}
              className={`hover:bg-slate-100 hover:text-gray-400 border-0 rounded-md p-2 flex flex-row gap-2 ${pathname === item.path ? "bg-slate-100 text-gray-400" : ""}`}
              >
               {item.icon}
                <p className={`duration-500 ${!open && "hidden"}`}>{item.name}</p>
              </Link>
            ))
          }
         
         </div>
      </div>
      <div className='text-white flex flex-col'>
        <Link to='dashboard' className=' hover:bg-slate-100 hover:text-gray-400 border-0 rounded-md p-2 flex flex-row gap-2'><MdOutlineSettings className='text-2xl -mt-1' /> <p className={`duration-500 ${!open && "hidden"}`}>Settings</p></Link>
        <Link to='products' className='hover:bg-slate-100 hover:text-gray-400 border-0 rounded-md p-2 flex flex-row gap-2'><MdOutlineHelpOutline className='text-2xl -mt-1'/> <p className={`duration-500 ${!open && "hidden"}`}>Help</p></Link>
        <Link to='dashboard' className=' hover:bg-slate-100 hover:text-red-400 border-0 rounded-md p-2 flex flex-row gap-2'><MdOutlinePowerSettingsNew className='text-2xl -mt-1' /> <p className={`duration-500 ${!open && "hidden"}`}>Log Out</p></Link>
      </div>

      {/* open and close icon  */}
      <MdKeyboardArrowRight className={`absolute cursor-pointer rounded-full border-2 w-10 h-10 p-2 -right-3 top-[90px] bg-indigo-400 ${open && "rotate-180"}`} onClick={() => setOpen(!open)} />
    </div>
  )
}
 