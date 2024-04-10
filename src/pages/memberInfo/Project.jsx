import React from 'react';
import { FiArchive } from 'react-icons/fi';
import styled, { css } from "styled-components";
const ListItem = styled.li`
  margin-top: 100px;
`;

const ProjectContainer = styled.div`
  margin-top: 20px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const ImageLink = styled.a`
  display: block;
`;

const getImageStyles = (imageUrl) => {
    if (imageUrl.includes('golfbang')) {
        return css`
            width: 200px;
            height: 400px;
        `;
    } else if (imageUrl.includes('pang')) {
        return css`
            width: 400px;
            height: 200px;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        `;
    } else {
        return css`
            width: 400px;
            height: 300px;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        `;
    }
};


const Image = styled.img`
  ${props => getImageStyles(props.src)}
`;

const Project = ({ projects }) => {
    return (
        <div id='works' style={{ marginTop: "200px" }}>
            <h3> <FiArchive className="mr-3" /> My Projects</h3>
            <ul>
                {projects.map((project, index) => (
                    <ListItem key={index}>
                        <ProjectContainer>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <p>Working Period: {project.workingPeriod}</p>
                            <p>Role: {project.role}</p>
                            <ImageLink href={project.githubLink}>
                                {
                                    project.image.map((image, imageIndex) => (
                                        <ProjectContainer key={imageIndex}><Image src={image} alt={project.title} /></ProjectContainer>
                                    )
                                    )
                                }
                            </ImageLink>
                        </ProjectContainer>
                    </ListItem>
                ))}
            </ul>
        </div>
    );
}

export default Project;
