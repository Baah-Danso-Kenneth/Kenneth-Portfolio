import { styled } from "styled-components";
import { device } from "../../utils/BreakPoints";

export const CardForServices=styled.div`

@media ${device.lg}{
    min-height:auto;
    width:30%;
    border:1px solid red;
}
`;

export const CardForServiceContent= styled.div`
`;

export const CardForRecommendation=styled.div`
`;


export const RecommedationCardContainer=styled.div`
position:relative;
border:1px solid red;

.recommendation-info{

}
.recommend-img{
    position:absolute;
    top:0;
    left:0;
    transform:translate(5rem,-1rem);
    >img{
        width:50px;
        border:3px solid #ccc;
        height:50px;
        object-fit:cover;
        border-radius:50%;
    }
}
`;
