import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { MdSearch, MdChatBubbleOutline } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";
import { Popover, Transition, Menu } from '@headlessui/react'
import image_1 from '../../assets/hero_6.png'

export default function NavbarDashboard() {
  const ProfileImg = {
    backgroundImage: `url(${image_1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100%"
  }
  return (
    <div className='h-16 bg-white px-4 flex justify-between items-center'>
      <div className='relative flex items-center'>
        <MdSearch className=' text-gray-300 absolute text-2xl left-1'/>
        <input type="text" placeholder='search...' className='h-10 border-b-2 w-1/3 sm:w-[200px] border-gray-300 rounded-md px-6 active:outline-none focus:outline-none'/>
      </div>
      <div className='flex flex-row gap-2'>
          <Popover className="relative">
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of the chevron icon. */
              <>
                <Popover.Button className={`inline-flex items-center text-gray-600 focus:outline-none p-1 rounded-md active:bg-gray-700 ${open ? "bg-gray-200" : ""}`}>
                <MdChatBubbleOutline className='text-2xl'/>
                </Popover.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                <Popover.Panel className="absolute z-10 mt-5 right-0 sm:w-80 w-[250px]">
                  <div className='shadow-sm px-2 py-3 bg-gray-100 rounded-md border border-gray-100'> 
                    <strong className='text-gray-400'>Messages</strong>
                      <div className='mt-3 text-[12px] text-gray-600'>
                        Messages will appear here..
                      </div>
                  </div>
                </Popover.Panel>
                </Transition>
              </>
            )}
        </Popover>

        <Popover className="relative">
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of the chevron icon. */
              <>
                <Popover.Button className={`inline-flex items-center text-gray-600 p-1 focus:outline-none rounded-md active:bg-gray-700 ${open ? "bg-gray-200" : ""}`}>
                <HiOutlineBell className='text-2xl'/>
                </Popover.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                <Popover.Panel className="absolute z-10 mt-5 right-0 sm:w-80 w-[250px]">
                  <div className='shadow-sm px-2 py-3 bg-gray-100 rounded-md border border-gray-100'> 
                    <strong className='text-gray-400'>Notifications</strong>
                      <div className='mt-3 text-[12px] text-gray-600'>
                        Notifications will appear here...
                      </div>
                  </div>
                </Popover.Panel>
                </Transition>
              </>
            )}
        </Popover>

        <Menu as="div" className=" relative">
       
          <Menu.Button className="">
           <div style={{backgroundImage: `url(${image_1})`}} className='bg-indigo-300 bg-no-repeat bg-cover bg-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600'>
            <span className='sr-only'>Arnold Polly</span>
           </div>
          </Menu.Button>
        

        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {/* Mark this component as `static` */}
            <Menu.Items className="shadow-sm absolute origin-top-right z-10 mt-2 right-0 w-25 flex flex-col">
              <Menu.Item className=''>
                <Link to={'/products'} className='text-gray-500 hover:bg-slate-200 rounded-sm p-1'>Profile</Link>
              </Menu.Item>
              <Menu.Item className=''>
                <Link to={'/dashboard'} className='text-gray-500 hover:bg-slate-200 rounded-sm p-1'>Settings</Link>
              </Menu.Item>
              <Menu.Item className=''>
                <Link to={'/'} className='text-gray-500 hover:bg-slate-200 rounded-sm p-1'>Log Out</Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
       </Menu> 
      </div>
    </div>
  )
}
