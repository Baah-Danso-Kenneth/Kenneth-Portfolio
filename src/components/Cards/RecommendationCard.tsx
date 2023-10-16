import { RecommedationCardContainer } from "./Cards.styles";

interface RecommendationCardProps{
  name:string;
  words:string;
  occupation:string;
  src:string;
}

function RecommendationCard({name,words,occupation,src}:RecommendationCardProps) {
  return (
    <RecommedationCardContainer>
      <div className="recommend-info">
        <h3>{name}</h3>
        <h5>{occupation}</h5>
        <p>{words}</p>
      </div>
      <div className='recommend-img'>
        <img src={src} alt="being"/>
      </div>
      </RecommedationCardContainer>
  )
}

export default RecommendationCard