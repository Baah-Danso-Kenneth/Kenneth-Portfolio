import React from 'react'
import { ProfileContainer, ProfilingElement, ProfilingSection, ProflilingSkills, SkillLanguageSection, SkillSection, SocialSection } from './profile.styled'
import ProfilePicture from '../../../assets/images/face-1.jpg';
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaDribbble} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'

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
           <SkillLanguageSection>
              <h3 className='language_h3'>Languages</h3>
               <div className='python'>
                <TbBrandPython/>
                <p>Python</p>
               </div>

              <div className='javascript'>
                <SiJavascript/>
                <p>JavaScript</p>
               </div>
            </SkillLanguageSection>
            
            <div>
              <h3>FrameWorks</h3>
              <div>
                <h3>#</h3>
                <p>React</p>
              </div>

              <div>
                <h3>#</h3>
                <p>Django</p>
              </div>

              <div>
                <h3>#</h3>
              </div>
            </div>


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