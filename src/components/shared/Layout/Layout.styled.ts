import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

interface LayoutContainerProps{
  isOpen:boolean;
}

const dynamicLayoutStyles=(isOpen:boolean)=>{
  return `
      --sidebar-width:${isOpen ? "20%" : "5%"};
      --main-content-width:${isOpen ? '60%': '70%'}
  `;
}

export const LayoutContainer=styled.div<LayoutContainerProps>`

${(props)=>dynamicLayoutStyles(props.isOpen)};
  display:grid;
  grid-template-columns:25% 70% 5%;
  grid-template-rows:30vh;

@media ${device.xl}{

}

@media ${device.lg}{
  padding:1rem;
  grid-template-rows:93vh;
}

@media ${device.md}{}

@media ${device.sm}{

}
`;


export const ProfileLayout=styled.div`

@media ${device.xl}{}

@media ${device.lg}{
    box-shadow:0 0 3px rgba(0, 0, 0, 0.2);
}

@media ${device.md}{}

@media ${device.sm}{}
`;

export const SidebarLayout=styled.div`
@media ${device.xl}{}

@media ${device.lg}{
    box-shadow:0 0 3px rgba(0, 0, 0, 0.2);
}

@media ${device.md}{}

@media ${device.sm}{}
`;

export const OutletLayout=styled.div`
@media ${device.xl}{}

@media ${device.lg}{
    border-left:none;
    overflow-y:auto;
    border-right:none;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 -1px 1px rgba(0, 0, 0, 0.2);
}

@media ${device.md}{}

@media ${device.sm}{}
`;