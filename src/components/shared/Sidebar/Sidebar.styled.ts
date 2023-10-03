import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";
import { ToggleProps } from "./types";


export const SidebarContainer=styled.div`
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

  }
`;

export const SidebarElments=styled.div`
min-height:83vh;
width:100%;
`;