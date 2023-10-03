import React from 'react'
import { ProfileContainer, ProfilingElement, ProfilingSection, ProflilingSkills, ResidenceContainer, SkillLanguageSection, SkillSection, SkillsZone, SocialSection } from './profile.styled'
import ProfilePicture from '../../../assets/images/face-1.jpg';
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaDribbble} from 'react-icons/fa'
import OopImg from '../../../assets/icons/oop.png';
import PythonImg from '../../../assets/icons/python.png';
import JavaScriptImg from '../../../assets/icons/javascript.png';
import UbuntuImg from '../../../assets/icons/ubuntu.png';
import DjangoImg from '../../../assets/icons/djang.png';
import PostgresImg from '../../../assets/icons/postgres.png';
import GitImg from '../../../assets/icons/git.png';
import DockerImg from '../../../assets/icons/docker.png';
import HerokuImg from '../../../assets/icons/heroku.png';
import AwsImg from '../../../assets/icons/aws.png';
import SassImg from '../../../assets/icons/sass.png';
import ReactImg from '../../../assets/icons/react.png';
import Styled_Componet_Img from '../../../assets/icons/styled_c.png';
import ResponsiveImg from '../../../assets/icons/responsive.png';
import TailwindImg from '../../../assets/icons/tailwind.png';
import APImg from '../../../assets/icons/api.png';

import DRFImg from '../../../assets/icons/drf.png';
import JekinsImg from '../../../assets/icons/jerkins.png';
import FigmaImg from '../../../assets/icons/figma.png';
import PytestImg from '../../../assets/icons/Pytest.png';

import {BiSolidDownload} from 'react-icons/bi'

function ProfileSection() {
  const languages=[
    {icon:OopImg},
    {icon:PythonImg},
    {icon:JavaScriptImg},
    {icon:DockerImg},
    {icon:UbuntuImg},
    {icon:GitImg},
    {icon:DjangoImg},
    {icon:PostgresImg},
    {icon:HerokuImg},
    {icon:AwsImg},
    {icon:SassImg},
    {icon:ReactImg},
    {icon:Styled_Componet_Img},
    {icon:ResponsiveImg},
    {icon:TailwindImg},
    {icon:APImg},
    {icon:JekinsImg},
    {icon:PytestImg},
    {icon:FigmaImg},
    {icon:DRFImg}
  ]
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
        <ResidenceContainer>
          <div className='residence'>
            <p>Residence</p>
            <p>Ghana</p>
          </div>

          <div className='city'>
            <p>City</p>
            <p>Accra</p>
          </div>

          <div className='age'>
            <p>Age</p>
            <p>30</p>
          </div>
        </ResidenceContainer>

        <SkillsZone>
          <h3>My Skills</h3>
          <div className='images_layout'>

            {languages.map(({icon},index)=>(
              <div className='images_div'>
                <img src={icon} alt={`${icon}.jpeg`}/>
                </div>
            ))}

          </div>
        </SkillsZone>

        <div className='cv_section'>
           <div className='cv_content'>
             <p>Download CSV</p>
             <BiSolidDownload/>
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