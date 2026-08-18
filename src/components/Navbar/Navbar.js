// import React from 'react';
// import styled from 'styled-components';
// import {Link as LinkR } from 'react-router-dom';
// // import {DiCssdeck} from "react-icons/di";
// import DeshLogo from "../../images/deshlogo1.png";
// import { Bio } from '../../data/constants';

// const Nav = styled.nav`
//     background-color: ${({theme}) => theme.card_light};
//     height: 80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.2rem;
//     position: sticky;
//     top: 0;
//     z-index: 11;
//     @media screen and (max-width: 960px) {
//         transition: 0.8s all ease;
//     }
//   `;

// const NavContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     height: 60px;
//     z-index: 1;
//     width: 100%;
//     padding: 0 0px;
//     max-width: 1100px;

//     @media screen and (max-width: 960px) {
//         padding: 0 30px;
//     }

//     @media screen and (max-width: 850px) {
//         padding: 0 30px;
//     }

//     `;

// const NavLogo = styled(LinkR)`
//     width: 80%;
//     padding: 0, 60px;
//     cursor: pointer;
//     display: flex;
//     justify-self: flex-start;
//     text-decoration: none;
//     align-items: center;
//     @media screen and (max-width: 640px) {
//         padding: 0 0px;
//     }    
// `;

// const MobileIcon = styled.div`
//     display: none;
//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 60%);
//         font-size: 1.8rem;
//         cursor: pointer;
//         color: ${({theme}) => theme.text_primary};
//     }
// `;

// const NavItems = styled.ul`
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     align-items: center;
//     gap: 32px;
//     list-style: none;

//     @media screen and (max-width: 960px) {
//         gap: 18px;
//     }

//     @media screen and (max-width: 850px) {
//         gap: 12px;
//     }

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;

// const NavLink = styled.a`
//     color: ${({theme}) => theme.text_primary};
//     font-weight: 500;
//     text-decoration: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     &:hover {
//         color: ${({theme}) => theme.primary};
//     }

//     @media screen and (max-width: 960px) {
//         font-size: 18px;
//     }

//     @media screen and (max-width: 850px) {
//         font-size: 15px;
//     }

// `;

// const GitHubButton = styled.a`
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;
//     :hover {
//       background: ${({ theme }) => theme.primary};
//       color: ${({ theme }) => theme.white};     
//     }
//     @media screen and (max-width: 768px) { 
//     font-size: 14px;
//     }
// `;


// const ButtonContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     width: 80%;
//     padding: 0, 6px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;


// export const Span = styled.div`
//     padding: 0 4px;
//     font-weight: bold;
//     font-size: 18px;
// `;

// const LogoImage = styled.img`
//   width: 1.5rem;
//   height: 1.5rem;
//   object-fit: contain;

//   @media screen and (max-width: 960px) {
//     width: 1.5rem;
//     height: 1.5rem;
//   }

//   @media screen and (max-width: 640px) {
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;



// const Navbar = () => {
    
//   return (
//     <Nav>
//         <NavContainer>
//             <NavLogo to='/'>
//                 <a
//             style={{ 
//                 display: "flex",
//                 alignItems: 'center',
//                 color: "white",
//                 marginBottom: "20",
//                 cursor: "pointer",
//              }}
//             >
//                 <LogoImage src={DeshLogo} alt="Portfolio Logo" />
//     <Span>Portfolio</Span>
//             </a></NavLogo>
//             <MobileIcon></MobileIcon>
//             <NavItems>
//                 <NavLink href='#about'>About</NavLink>
//                 <NavLink href='#skills'>Skills</NavLink>
//                 <NavLink href='#experience'>Experience</NavLink>
//                 <NavLink href='#projects'>Projects</NavLink>
//                 <NavLink href='#education'>Education</NavLink>
//                 <NavLink href='#contact'>Contact</NavLink>
//             </NavItems>
//             <ButtonContainer>
//                 <GitHubButton href={Bio.github} target="_blank">
//                     Github Profile
//                 </GitHubButton>
//             </ButtonContainer>
//         </NavContainer>
//     </Nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import DeshLogo from "../../images/deshlogo1.png";
import { Bio } from '../../data/constants';


/* =========================
   NAVBAR
========================= */

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

/* =========================
   NAV CONTAINER
========================= */

const NavContainer = styled.div`
  display: grid;

  /*
    Left  = Logo
    Center = Navigation
    Right = Github
  */
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  height: 60px;
//   padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 1050px) {
    padding: 0 25px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }

  @media screen and (max-width: 850px) {
    padding: 0 20px;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 18px;
  }
`;


/* =========================
   LOGO
========================= */

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
`;

/* =========================
   LOGO IMAGE
========================= */

const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;

  @media screen and (max-width: 850px) {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;


/* =========================
   LOGO TEXT
========================= */

const Span = styled.div`
  padding-left: 6px;
  font-weight: bold;
  white-space: nowrap;

  @media screen and (max-width: 850px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;


/* =========================
   DESKTOP NAVIGATION
========================= */

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;


  /* Large tablet / small desktop */
  @media screen and (max-width: 1050px) {
    gap: 24px;
  }


  /* Tablet */
  @media screen and (max-width: 960px) {
    gap: 18px;
  }


  /* Small tablet */
  @media screen and (max-width: 850px) {
    gap: 13px;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


/* =========================
   NAV LINKS
========================= */

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
//   font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }


  /* Large tablet */
  @media screen and (max-width: 1050px) {
    font-size: 18px;
  }


  /* Tablet */
  @media screen and (max-width: 960px) {
    font-size: 18px;
  }


  /* Small tablet */
  @media screen and (max-width: 850px) {
    font-size: 16px;
  }
`;


/* =========================
   GITHUB BUTTON CONTAINER
========================= */

const ButtonContainer = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-end;

  justify-self: end;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;


/* =========================
   GITHUB BUTTON
========================= */

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};

  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 135px;

  height: 42px;

  border-radius: 20px;

  color: ${({ theme }) => theme.primary};

  cursor: pointer;

  padding: 0 18px;

  font-weight: 500;

  text-decoration: none;

  font-size: 16px;

  white-space: nowrap;

  transition: all 0.3s ease-in-out;


  &:hover {
    background: ${({ theme }) => theme.primary};

    color: ${({ theme }) => theme.white};
  }


  /* Large tablet */
  @media screen and (max-width: 1050px) {
    min-width: 125px;

    padding: 0 15px;

    font-size: 15px;
  }


  /* Tablet */
  @media screen and (max-width: 960px) {
    min-width: 120px;

    padding: 0 14px;

    font-size: 14px;
  }


  /* Small tablet */
  @media screen and (max-width: 850px) {
    min-width: 110px;

    padding: 0 12px;

    font-size: 13px;
  }
`;


/* =========================
   MOBILE HAMBURGER
========================= */

const MobileIcon = styled.div`
  display: none;


  @media screen and (max-width: 768px) {
    display: flex;

    flex-direction: column;

    justify-content: space-between;

    width: 30px;

    height: 22px;

    cursor: pointer;

    z-index: 1001;
  }


  @media screen and (max-width: 480px) {
    width: 27px;

    height: 20px;
  }
`;


/* =========================
   HAMBURGER LINES
========================= */

const HamburgerLine = styled.span`
  width: 100%;

  height: 3px;

  background-color: ${({ theme }) => theme.text_primary};

  border-radius: 5px;

  transition: all 0.3s ease;


  &:nth-child(1) {
    transform: ${({ open }) =>
      open
        ? 'rotate(45deg) translate(6px, 6px)'
        : 'none'};
  }


  &:nth-child(2) {
    opacity: ${({ open }) =>
      open ? 0 : 1};
  }


  &:nth-child(3) {
    transform: ${({ open }) =>
      open
        ? 'rotate(-45deg) translate(7px, -7px)'
        : 'none'};
  }
`;


/* =========================
   MOBILE MENU
========================= */

const MobileMenu = styled.div`
  display: none;


  @media screen and (max-width: 768px) {
    display: flex;

    flex-direction: column;

    position: absolute;

    top: 80px;

    left: 0;

    width: 100%;

    background-color: ${({ theme }) => theme.card_light};

    overflow: hidden;


    max-height: ${({ open }) =>
      open ? '600px' : '0'};

    opacity: ${({ open }) =>
      open ? '1' : '0'};


    transition:
      max-height 0.4s ease,
      opacity 0.3s ease;


    box-shadow: ${({ open }) =>
      open
        ? '0 8px 20px rgba(0, 0, 0, 0.2)'
        : 'none'};
  }
`;


/* =========================
   MOBILE NAV LINKS
========================= */

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};

  text-decoration: none;

  font-weight: 500;

  font-size: 16px;

  padding: 18px 30px;

  text-align: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  transition: all 0.2s ease-in-out;


  &:hover {
    color: ${({ theme }) => theme.primary};

    background-color: rgba(255, 255, 255, 0.05);
  }


  @media screen and (max-width: 480px) {
    padding: 16px 20px;

    font-size: 15px;
  }
`;


/* =========================
   NAVBAR COMPONENT
========================= */

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <Nav>

      <NavContainer>


        {/* =====================
            LOGO
        ====================== */}

        <NavLogo
          to="/"
          onClick={closeMenu}
        >
            <a
            style={{ 
                display: "flex",
                alignItems: 'center',
                color: "white",
                marginBottom: "20",
                cursor: "pointer",
             }}
            >
          <LogoImage
            src={DeshLogo}
            alt="Portfolio Logo"
          />

          <Span>
            Portfolio
          </Span>
          </a>
        </NavLogo>



        {/* =====================
            DESKTOP NAVIGATION
        ====================== */}

        <NavItems>

          <li>
            <NavLink href="#about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink href="#skills">
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink href="#experience">
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink href="#projects">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink href="#education">
              Education
            </NavLink>
          </li>

          <li>
            <NavLink href="#contact">
              Contact
            </NavLink>
          </li>

        </NavItems>



        {/* =====================
            GITHUB BUTTON
        ====================== */}

        <ButtonContainer>

          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </GitHubButton>

        </ButtonContainer>



        {/* =====================
            MOBILE HAMBURGER
        ====================== */}

        <MobileIcon
          onClick={() => setIsOpen(!isOpen)}
        >

          <HamburgerLine
            open={isOpen}
          />

          <HamburgerLine
            open={isOpen}
          />

          <HamburgerLine
            open={isOpen}
          />

        </MobileIcon>


      </NavContainer>



      {/* =========================
          MOBILE SLIDE MENU
      ========================= */}

      <MobileMenu open={isOpen}>

        <MobileNavLink
          href="#about"
          onClick={closeMenu}
        >
          About
        </MobileNavLink>


        <MobileNavLink
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </MobileNavLink>


        <MobileNavLink
          href="#experience"
          onClick={closeMenu}
        >
          Experience
        </MobileNavLink>


        <MobileNavLink
          href="#projects"
          onClick={closeMenu}
        >
          Projects
        </MobileNavLink>


        <MobileNavLink
          href="#education"
          onClick={closeMenu}
        >
          Education
        </MobileNavLink>


        <MobileNavLink
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </MobileNavLink>


        <MobileNavLink
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Github Profile
        </MobileNavLink>

      </MobileMenu>

    </Nav>
  );
};


export default Navbar;