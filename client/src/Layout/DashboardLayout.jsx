import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDashboard from '../Components/Dashboard/NavbarDashboard'
import SideNav from '../Components/Dashboard/SideNav'

export default function DashboardLayout() {
  return (
    <div className=' h-screen w-screen flex flex-row overflow-hidden bg-neutral-100 font-mono'>
      <SideNav />
      <div className='flex-1'>
      <NavbarDashboard />
      <Outlet />
      </div>
    </div>
  )
}
