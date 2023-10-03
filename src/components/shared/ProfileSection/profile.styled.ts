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
   position:relative;
   padding-bottom:5px;
   background-color:#fff;
   box-shadow:0 2px 5px rgba(0, 0, 0, 0.2);
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
     font-family:${({theme})=>theme.fonts.ChilankaFont};
     flex-direction:column;
     text-transform:uppercase;
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
  overflow-y:auto;


  .cv_section{
    max-width:80%;
    margin:0 auto;
  }

  .cv_content{
    display:flex;
    align-items:center;
    gap:1rem;
    >p{
      font-size:15px;
    }
  }
 }
`;

export const ResidenceContainer=styled.div`
  max-width:80%;
  margin:0 auto;
  font-size:14px;

  >div{
    margin-bottom:0;
  }

  .residence{
     display:flex;
     justify-content:space-between;
    >p{
      margin-bottom:0;
    }
    }

   .city{
    display:flex;
    justify-content:space-between;
   }
  .age{
    display:flex;
    justify-content:space-between;
    transform:translateY(-0.5rem);

  } 

  border-bottom:1px solid #ccc;
`;

export const SkillsZone=styled.div`
 @media ${device.lg}{
  >h3{
    text-align:center;
  }
  max-width:80%;
  margin:0 auto;

  .images_layout{
    display:flex;
    gap:1.2rem;
    flex-flow:wrap;
    border-bottom:1px solid #ccc;
  }
  .images_div{
    >img{
      width:2rem;
    }
  }


 }

`;

export const SkillLanguageSection=styled.div``;


export const SocialSection=styled.div`
width:100%;
height:8vh;
  background-color:${({theme})=>theme.colors.white};
   position:relative;
   padding-top:5px;
   background-color:#fff;
   box-shadow:0 -2px 5px rgba(0, 0, 0, 0.2);
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