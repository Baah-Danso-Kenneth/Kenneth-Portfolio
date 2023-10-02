import { useState } from 'react';
import { MenuBarSection, SidebarContainer, SidebarElments } from './Sidebar.styled'
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr'

function Sidebar() {
    const [open, setOpen]=useState(false)

    const toggleMenu=()=>{
        setOpen(!open)
    }
  return (
    <SidebarContainer>

        <MenuBarSection>
            { open ?
                 <GrClose onClick={toggleMenu}/> :
                (<BsFillMenuButtonWideFill onClick={toggleMenu}/>) }    
        </MenuBarSection>

        <SidebarElments>

        </SidebarElments>
    </SidebarContainer>
  )
}


export default Sidebar