import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/ProfImage.JPG'
import HeroBgAnimation from '../../HeroBgAnimation'

const HeroContainer = styled.div`
  backgroun-color: ${({theme}) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80 30px;

  @media screen and (max-width: 960px) {
    padding: 32px 16;
  }

  z-index: 1;
`;


const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
width: 100%;
display: flex;
order: 2;
justify-content: end;
gap: 12px;
@media (max-width: 960px) {
  order: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}

@media (max-width: 640px) {
  margin-bottom: 30px;
}
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;


const ResumeButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 95%;
max-width: 300px;
text-align: center;
padding: 16px;
color:${({ theme }) => theme.white};
border-radius: 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
&:hover {
    transform: scale(1.05);
transition: all 0.4s ease-in-out;
box-shadow:  20px 20px 60px #1F2634,
filter: brightness(1);
}    


@media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
} 

`;



const index = () => {
  return (
    <div id="about">
      <HeroContainer>
          <HeroBg>
              <HeroBgAnimation />
          </HeroBg>
          <HeroInnerContainer >
              <HeroLeftContainer id="Left">
                  <Title>Hi, I am <br /> {Bio.name}</Title>
                  <TextLoop>
                      I am a
                      <Span>
                          <Typewriter
                              options={{
                                  strings: Bio.roles,
                                  autoStart: true,
                                  loop: true,
                              }}
                          />
                      </Span>
                  </TextLoop>
                  <SubTitle>{Bio.description}</SubTitle>
                  <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
              </HeroLeftContainer>

              <HeroRightContainer id="Right">

                  <Img src={HeroImg} alt="hero-image" />
              </HeroRightContainer>
          </HeroInnerContainer>

      </HeroContainer>
  </div>
  )
}

export default index