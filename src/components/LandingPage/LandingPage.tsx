import { ExperienceDisplayFlex, ExperienceSection, FooterSection, 
  HeroSection, HeroSectionElement, HeroSectionImageDiv, HeroSectionInfomationContent, HeroSectionInformation, HomePageContainer,
   MainSection, RecommendationSection } from './HomePage.styled'
import FaceImge from '../../assets/images/face-2.png';

function LandingPage() {
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
          mim
          </MainSection>

        <RecommendationSection>
          recc
          </RecommendationSection>

        <FooterSection>
          foote
          </FooterSection>
        
        </HomePageContainer>
  )
}

export default LandingPage