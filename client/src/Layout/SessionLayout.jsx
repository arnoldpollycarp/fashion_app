import React from 'react'
import { Outlet } from 'react-router-dom'
import SessionNavbar from '../Components/SessionNavbar'

export default function SessionLayout() {
  return (
    <>
     <SessionNavbar />
      <Outlet />
    </>
  )
}
