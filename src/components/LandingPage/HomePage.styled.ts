import { styled } from "styled-components";
import { device } from "../../utils/BreakPoints";

export const HomePageContainer=styled.div`
  display:grid;
  max-width:95%;
  min-height:93vh;
  overflow-y:auto;
  margin:0 auto;
  border:3px dashed purple;
  grid-template-columns:repeat(5,1fr);
  gap:1rem;
  grid-template-rows:repeat(5, auto);
`;

export const HeroSection=styled.div`

@media ${device.lg}{
    border:1px solid red;
    grid-area:1/1/span 1/-1;
}
`;


export const HeroSectionElement=styled.div`

@media ${device.lg}{
border:5px solid violet;
position:relative;
margin-top:2rem;
height:50vh;
}
`;


export const ExperienceSection = styled.div`
 border:1px solid blue;
 grid-area:2/1/span 1/-1;
`;

export const MainSection= styled.div`
 border:1px solid purple;
 grid-area:3/1/span 1/-1;
`;

export const RecommendationSection=styled.div`
 border:1px solid yellow;
 grid-area:4/1/span 1/-1;
`;

export const FooterSection=styled.div`
 border:1px solid pink;
 grid-area:5/1/span 1/-1;
`;
