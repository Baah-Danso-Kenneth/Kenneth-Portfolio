import { ExperienceDisplayFlex, ExperienceSection, FooterSection, 
  HeroSection, HeroSectionElement, HeroSectionImageDiv, HeroSectionInfomationContent, HeroSectionInformation, HomePageContainer,
   MainSection, RecommendationSection } from './HomePage.styled'
import FaceImge from '../../assets/images/face-2.png';
import ServiceCard from '../Cards/ServiceCard';
import RecommendationCard from '../Cards/RecommendationCard';
import Peeps from '../../assets/images/face-1.jpg';

function LandingPage() {

    const Services=[
        {name:'Web developement', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.' },
        {name:'Backend development', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
        {name:'API Development', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
        {name:'Responsive design', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
        {name:'Hosting & Deploying ', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
        {name:'Soft-Skills', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}
    ]

    const recommendations=[
      {name:'Ike Sam', occupation:'Accountant', words:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.', src:Peeps},
      {name:'Ike Sam', occupation:'Accountant', words:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',src:Peeps},
      {name:'Ike Sam', occupation:'Accountant', words:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.', src:Peeps},
      {name:'Ike Sam', occupation:'Accountant', words:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.', src:Peeps} 
    ]

  return (
      <HomePageContainer>

        <HeroSection>
          <HeroSectionElement>
            <HeroSectionImageDiv>
              <HeroSectionInformation>
                <HeroSectionInfomationContent>
                <div>
                   <h3>Elevating Web Experiences Through Design & Development</h3>
                   <p>Code i build solid</p>
                   <button>explore</button>
                </div>

                <div>
                   <img src={FaceImge} alt="gee"/>
                </div>
                </HeroSectionInfomationContent>
              </HeroSectionInformation>
            </HeroSectionImageDiv>
          </HeroSectionElement>
        </HeroSection>

        <ExperienceSection>

          <ExperienceDisplayFlex>
            <p>10 <span>+</span></p>
            <p>Years of Experience</p>
          </ExperienceDisplayFlex>

          <ExperienceDisplayFlex>
            <p>30</p>
            <p>Completd Projects</p>
          </ExperienceDisplayFlex>

          <ExperienceDisplayFlex>
           <p>1443</p>
           <p>Happy Clients</p>
           </ExperienceDisplayFlex>

          <ExperienceDisplayFlex>
            <p>20 +</p>
           <p>Honours and awards</p>
          </ExperienceDisplayFlex>

          </ExperienceSection>

        <MainSection>
          <h3>What i bring on the table</h3>
           <div>
            {Services.map(({name, message},index)=>(
             <ServiceCard key={index} name={name} message={message} />
            ))}
             
           </div>
          </MainSection>

        <RecommendationSection>
          {
            recommendations.map(({name,words, occupation,src},index)=>(
              <RecommendationCard key={index} 
              name={name} words={words} 
              occupation={occupation} src={src}/>
            ))
          }  
          </RecommendationSection>

        <FooterSection>
          foote
          </FooterSection>
        
        </HomePageContainer>
  )
}

export default LandingPage