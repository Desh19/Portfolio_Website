// import React from 'react'
// import styled from 'styled-components'


// const Button = styled.button`
//     display: none;
//     width: 100%;
//     padding: 10px;
//     background-color: ${({ theme }) => theme.white};
//     color: ${({ theme }) => theme.text_black};
//     font-size: 14px;
//     font-weight: 700;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all 0.8s ease-in-out;
// `
// const Card = styled.div`
//     width: 330px;
//     height: 490px;
//     background-color: ${({ theme }) => theme.card};
//     cursor: pointer;
//     border-radius: 10px;
//     box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
//     overflow: hidden;
//     padding: 26px 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//     transition: all 0.5s ease-in-out;
//     &:hover {
//         transform: translateY(-10px);
//         box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
//         filter: brightness(1.1);
//     }
//     &:hover ${Button} {
//         display: block;
//     }
// `

// const Image = styled.img`
//     width: 100%;
//     height: 180px;
//     background-color: ${({ theme }) => theme.white};
//     border-radius: 10px;
//     box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
// `

// const Tags = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 8px;
//     margin-top: 4px;
// `

// const Tag = styled.span`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     background-color: ${({ theme }) => theme.primary + 15};
//     padding: 2px 8px;
//     border-radius: 10px;
// `

// const Details = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 0px;
//     padding: 0px 2px;
// `
// const Title = styled.div`
//     font-size: 20px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_secondary};
//     overflow: hidden;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `

// const Date = styled.div`
//     font-size: 12px;
//     margin-left: 2px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};
//     @media only screen and (max-width: 768px){
//         font-size: 10px;
//     }
// `


// const Description = styled.div`
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 99};
//     overflow: hidden;
//     margin-top: 8px;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     text-overflow: ellipsis;
// `

// const Members = styled.div`
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
// `
// const Avatar = styled.img`
//     width: 38px;
//     height: 38px;
//     border-radius: 50%;
//     margin-left: -10px;
//     background-color: ${({ theme }) => theme.white};
//     box-shadow: 0 0 10px rgba(0,0,0,0.2);
//     border: 3px solid ${({ theme }) => theme.card};
// `

// const ProjectCards = ({project,setOpenModal}) => {
//     return (
//         <Card onClick={() => setOpenModal({state: true, project: project})}>
//             <Image src={project.image}/>
//             <Tags>
//                 {project.tags?.map((tag, index) => (
//                 <Tag>{tag}</Tag>
//                 ))}
//             </Tags>
//             <Details>
//                 <Title>{project.title}</Title>
//                 <Date>{project.date}</Date>
//                 <Description>{project.description}</Description>
//             </Details>
//             <Button>View Code</Button>
//         </Card>
//     )
// }

// export default ProjectCards

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 590px;
  cursor: pointer;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  padding: 18px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  min-height: 30px;
  max-height: 30px;
  overflow: hidden;
`;

const Tag = styled.span`
  padding: 4px 10px;
  font-size: 11px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-height: 48px;
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + "80"};
  margin: 8px 0;
`;

const Description = styled.div`
  height: 160px;
  min-height: 160px;
  max-height: 160px;

  overflow-y: auto;
  overflow-x: hidden;

  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary + 99};

  padding-right: 6px;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.text_secondary + 99} transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary + 99};
    border-radius: 20px;
  }
`;

const Button = styled.a`
  margin-top: auto;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: 100%;

  border-radius: 10px;

  background: ${({ theme }) => theme.primary};
  color: white;

  font-weight: 600;
  font-size: 15px;

  transition: .3s;

  &:hover {
    opacity: .9;
  }
`;

const ProjectCards = ({ project, setOpenModal }) => {
    const openGithub = () => {
    window.open(project.github, "_blank", "noopener,noreferrer");
  };
  return (
    // <Card onClick={() => setOpenModal({ state: true, project })}>
    <Card onClick={openGithub}>
      <Image src={project.image} alt={project.title} />

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>

        <Date>{project.date}</Date>

        <Description>
          {project.description}
        </Description>
      </Details>

      <Button
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCards;