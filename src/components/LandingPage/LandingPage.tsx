import { ExperienceSection, FooterSection, 
  HeroSection, HeroSectionElement, HomePageContainer,
   MainSection, RecommendationSection } from './HomePage.styled'


function LandingPage() {
  return (
      <HomePageContainer>
        <HeroSection>
          <HeroSectionElement>
            <div>
              <img/>   
            </div>
          </HeroSectionElement>
        </HeroSection>

        <ExperienceSection>
          experiene
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