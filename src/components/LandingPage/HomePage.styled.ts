import { styled } from "styled-components";
import { device } from "../../utils/BreakPoints";
import BannerImage from '../../assets/images/kente_pattern.jpg'

export const HomePageContainer=styled.div`
  display:grid;
  max-width:95%;
  min-height:93vh;
  margin:0 auto;
  grid-template-columns:repeat(5,1fr);
  gap:1rem;
  grid-template-rows:repeat(5, auto);
`;

export const HeroSection=styled.div`

@media ${device.lg}{
    grid-area:1/1/span 1/-1;
}
`;




export const HeroSectionElement=styled.div`

@media ${device.lg}{
position:relative;
margin-top:2rem;
height:50vh;
}
`;

export const HeroSectionInformation=styled.div`

@media ${device.lg}{
 background-image:url(${BannerImage});
 position:absolute;
 width:100%;
 top:0;
}
`;

export const HeroSectionImageDiv=styled.div`
position:relative;
  img{
    width:100%;
    height:50vh;
    object-fit:cover;   
  }

`;

export const HeroSectionInfomationContent=styled.div`
  max-width:80%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;

  >div:nth-child(1){
    transform:translateX(-10%);
    display:flex;
    flex-flow:column;
    justify-content:center;
    flex:0.6;

    >h3{
        font-size:2.5em;
        color:#fff;
        font-family:${({theme})=>theme.fonts.ChilankaFont};
        font-weight:800;
        margin-bottom:0;
    }

    >p{
        transform:translateY(-0.8rem);
    }
    >button{
        width:40%;
        height:3rem;
        text-transform:uppercase;
        font-family:${({theme})=>theme.fonts.ChilankaFont};
        background-color:red;
        font-size:1.3rem;
        text-align:center;
        outline:none;
        border:none;
        transform:translateY(-18%);
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 -1px 1px rgba(0, 0, 0, 0.2);
    }
  }

>div:nth-child(2){
    flex:0.4;
    transform:translateX(3rem);
    width:100%;
  
   >img{ 
    width:100%;
    object-fit:cover; 
   }
}
`;


export const ExperienceSection = styled.div`
 border:1px solid blue;
 grid-area:2/1/span 1/-1;
 display:flex;
 align-items:center;
 justify-content:space-around;

 >div:nth-child(1){
   display:flex;
 }
`;

export const ExperienceDisplayFlex=styled.div`
   display:flex;
`;

export const MainSection= styled.div`
 border:1px solid purple;
 grid-area:3/1/span 1/-1;


 >div{
    max-width:100%;
    margin:0 auto;
    display:flex;
    gap:2rem;
    flex-flow:wrap;
 }
`;

export const RecommendationSection=styled.div`
 border:1px solid yellow;
 grid-area:4/1/span 1/-1;
`;

export const FooterSection=styled.div`
 border:1px solid pink;
 grid-area:5/1/span 1/-1;
`;
