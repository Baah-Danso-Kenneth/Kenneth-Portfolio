import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const ProfileContainer=styled.div`

@media ${device.lg}{
    width:100%;
    height:93vh;
    display:flex;
    flex-direction:column;
}
`;

export const ProfilingSection=styled.div`

@media ${device.lg}{
   background-color:${({theme})=>theme.colors.white};
   max-height:40vh;
   width:100%;


   &::before{
   content:"";
   position:absolute;
   bottom:0;
   left:0;
   width:100%;
   height:5px;
   background-color:#000;
   box-shadow:0 2px 5px rgba(0, 0, 0, 0.3);
   z-index:-1
   }
}
`;

export const ProfilingElement=styled.div`

@media ${device.lg}{
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    margin-top:1.5rem;
  >div{
    display:flex;
    >img{
        height:5rem;
        width:5rem;
        object-fit:cover;
        border-radius:50%;
    }

    >span{
        background-color:red;
        width:13px;
        height:13px;
        border-radius:50%;
        transform:translate(-1rem, 4rem);
    }
  }

  >p{
    font-size:14px;
    word-spacing:-3px;
    font-weight:700;
  }

}
`;


export const ProflilingSkills=styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     height:60px;

   >div{
      line-height:-2px;
      margin-bottom:0;
      >p{
        margin-bottom:0;
        color:${({theme})=>theme.colors.baseTxtColor};
        font-size:14px;

      }

      >p:nth-child(2){
        transform:translate(1rem,-0.8rem);
        margin-bottom:2rem;
      }
   }
     
`;

export const  SkillSection=styled.div`

@media ${device.lg}{
    height:52vh;
    border:1px solid blue;
    overflow-y:auto;
}
`;


export const SocialSection=styled.div`
width:100%;
height:8vh;

>div{
    max-width:60%;
    height:8vh;
    margin:0 auto;
    display:flex;
    flex-flow:row;
    justify-content:space-between;
    align-items:center;
}
`;