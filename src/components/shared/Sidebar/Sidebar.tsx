import { MenuBarSection, SidebarContainer, SidebarElments } from './Sidebar.styled'
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr'
import {motion} from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { toggleState } from '../../../store/features/sidebarSlice';

function Sidebar() {
   const {isOpen} = useAppSelector((state)=>state.siderbar) 
   const dispatch = useAppDispatch()

   const handleToggle=()=>{
     dispatch(toggleState())
   } 

  return (
    <SidebarContainer>

        <MenuBarSection>
        <motion.div
          onClick={handleToggle}
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