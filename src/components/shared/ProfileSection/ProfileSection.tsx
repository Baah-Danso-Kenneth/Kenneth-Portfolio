import React from 'react'
import { ProfileContainer, ProfilingElement, ProfilingSection, ProflilingSkills, SkillSection, SocialSection } from './profile.styled'
import ProfilePicture from '../../../assets/images/face-1.jpg';
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaDribbble} from 'react-icons/fa'

function ProfileSection() {
  return (
    <ProfileContainer>
        <ProfilingSection>
              <ProfilingElement>
                <div>
                  <img src={ProfilePicture} alt=""/>
                  <span/>
                </div>
                <p>Baah Danso Kenneth </p>
            </ProfilingElement>

            <ProflilingSkills>
                <div>
                <p>Front-end Developer</p>
                <p>Python Devloper</p>
                </div>
            </ProflilingSkills>
        </ProfilingSection>

        <SkillSection>
            <p>geee</p>
            <p>gee</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ratione dolorem! Perferendis adipisci dolorem, incidunt neque culpa eius ullam pariatur dolorum fugit? Blanditiis exercitationem, alias voluptatibus sint tenetur molestias, laborum libero nisi nobis possimus dolores aut sapiente voluptas 
                sit ex quos ipsum doloribus voluptatem earum corporis quam!
                 Ad eligendi nobis mollitia doloribus aliquam fugiat facilis odit dolorum. Natus, ab quae.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem, similique unde temporibus dignissimos enim veniam at nemo vel odit voluptate quos eos atque illum quibusdam molestiae obcaecati aperiam deserunt quidem ab sint voluptas. Saepe at hic, cumque laudantium nisi error delectus assumenda molestiae, iure vel distinctio quisquam dolore eius odio deserunt dolor. Odio temporibus alias quae provident perferendis aliquam!</p>
        </SkillSection>

        <SocialSection>
          <div>
           <AiFillLinkedin/>
           <FaTiktok/>  
           <AiOutlineTwitter/>
           <BsGithub/>  
           <FaDribbble/>  
           </div>
        </SocialSection>

    </ProfileContainer>
  )
}

export default ProfileSection