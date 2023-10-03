import { useState } from 'react';
import { MenuBarSection, SidebarContainer, SidebarElments } from './Sidebar.styled'
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr'
import {motion} from 'framer-motion';

function Sidebar() {
    const [isOpen, setOpen]=useState(false)

    const toggleMenu=()=>{
        setOpen(!isOpen)
    }
  return (
    <SidebarContainer>

        <MenuBarSection>
        <motion.div
          onClick={toggleMenu}
          whileTap={{ scale: 0.9, rotate: isOpen ? 0 : 180 }}
        >
          {isOpen ? <GrClose /> : <BsFillMenuButtonWideFill />}
        </motion.div>
      </MenuBarSection>

        <SidebarElments>
          {isOpen ?
          (
          <div>
            <ul>
              <li>Home</li>
              <li>Contacts</li>
              <li>Portfolio</li>
              <li>History</li>
            </ul>
          </div>
          ): null
        }
     

        </SidebarElments>
    </SidebarContainer>
  )
}


export default Sidebar