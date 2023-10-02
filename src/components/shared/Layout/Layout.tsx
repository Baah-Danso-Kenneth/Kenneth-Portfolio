import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import ProfileSection from '../ProfileSection/ProfileSection'
import { LayoutContainer, OutletLayout, ProfileLayout, SidebarLayout } from './Layout.styled'


function Layout(){
  return (
    <LayoutContainer>
      
      <ProfileLayout>
        <ProfileSection/>
      </ProfileLayout>

      <OutletLayout> 
       <Outlet/>
      </OutletLayout>
    
    <SidebarLayout>
      <Sidebar/>
    </SidebarLayout>
    
    </LayoutContainer>
  )
}

export default Layout