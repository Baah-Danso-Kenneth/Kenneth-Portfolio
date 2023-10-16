import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";


interface sidebarProps{
  isOpen:boolean
}
export const SidebarContainer=styled.div<sidebarProps>`
   min-height:93vh;
   display:flex;
   flex-direction:column;
   background-color:${({theme})=>theme.colors.contentBgColor};
`;

export const MenuBarSection=styled.div`
  @media ${device.lg}{
    min-height:10vh;
    width:100%;
    background-color:${({theme})=>theme.colors.white};
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom:2px;
    box-shadow:0 2px 5px rgba(0,0,0,0.2);

    .icon{

      color:red;
      background-color:red;
    }

  }
`;

export const SidebarElments=styled.div`
min-height:83vh;
width:100%;
`;

export const SidebarLinks=styled.ul`
 display:flex;
 flex-flow:column;
 align-items:center;
`