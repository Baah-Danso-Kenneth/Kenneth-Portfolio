import { MenuBarSection, SidebarContainer, SidebarElments, SidebarLinks } from './Sidebar.styled'
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr'
import {motion} from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { toggleState } from '../../../store/features/sidebarSlice';
import { Link } from 'react-router-dom';

function Sidebar() {
   const {isOpen} = useAppSelector((state)=>state.siderbar) 
   const dispatch = useAppDispatch()

   const handleToggle=()=>{
     dispatch(toggleState())
   } 

  return (
    <SidebarContainer isOpen={isOpen}>

        <MenuBarSection>
        <motion.div
          onClick={handleToggle}
          whileTap={{ scale: 0.9, rotate: isOpen ? 0 : 180 }}
        >
          {isOpen ? <GrClose /> : <BsFillMenuButtonWideFill/>}
        </motion.div>
      </MenuBarSection>

        <SidebarElments>
          {isOpen ?
          (
          <div>
            <SidebarLinks>
              <Link to="/">Home</Link>
              <Link to="/contact">Contacts</Link>
              <Link to='/portfolio'>Portfolio</Link>
              <Link to="/history">History</Link>
            </SidebarLinks>
          </div>
          ): null
        }
     

        </SidebarElments>
    </SidebarContainer>
  )
}


export default Sidebar