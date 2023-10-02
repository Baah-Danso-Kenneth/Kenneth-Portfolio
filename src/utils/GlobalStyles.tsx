import { createGlobalStyle } from "styled-components";
import fontsCss from './fonts.module.css';


export const GlobalStyles = createGlobalStyle`
  ${fontsCss}

  
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }


  body{
    margin: 0;
    padding:0;
    overflow-x: hidden;
    background-color:${({theme})=>theme.colors.lightThemeBgColor};
    min-height: 100vh;
    text-rendering: optimizeSpeed;
        font-family: ${({ theme }) => theme.fonts.JetBrainsFont}, ${({ theme }) => theme.fonts.ChilankaFont}, sans-serif;
  }



`;