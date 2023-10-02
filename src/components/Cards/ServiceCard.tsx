import { CardForServiceContent, CardForServices } from "./Cards.styles"
import { ServiceCardProps } from "./types"


function ServiceCard({name, message}:ServiceCardProps) {

  return (
    <CardForServices>
           <CardForServiceContent>
            <h3>{name}</h3>
            <p>{message}</p>
           </CardForServiceContent>       
    
    </CardForServices>
  )
}

export default ServiceCard