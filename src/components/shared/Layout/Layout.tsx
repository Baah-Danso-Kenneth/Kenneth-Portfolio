import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import ProfileSection from '../ProfileSection/ProfileSection'


function Layout(){
  return (
    <div>
      <ProfileSection/>
      <div>
        <Outlet/>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Layout