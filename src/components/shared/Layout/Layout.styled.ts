import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const LayoutContainer=styled.div`

@media ${device.xl}{
  display:grid;
  grid-template-columns:25% 70% 5%;
  grid-template-rows:30vh;
}

@media ${device.lg}{
  padding:1rem;
  display:grid;
  grid-template-columns:20% 75% 5%;
  grid-template-rows:93vh;
}

@media ${device.md}{}

@media ${device.sm}{

}
`;


export const ProfileLayout=styled.div`

@media ${device.xl}{}

@media ${device.lg}{
    border:1px solid red;
}

@media ${device.md}{}

@media ${device.sm}{}
`;

export const SidebarLayout=styled.div`
@media ${device.xl}{}

@media ${device.lg}{
    border:1px solid red;
}

@media ${device.md}{}

@media ${device.sm}{}
`;

export const OutletLayout=styled.div`
@media ${device.xl}{}

@media ${device.lg}{
    border:1px solid red;
}

@media ${device.md}{}

@media ${device.sm}{}
`;