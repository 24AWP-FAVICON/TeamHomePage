import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Sample1 from "./HomeImages/image_1.png";
import Sample2 from "./HomeImages/image_2.png";
import Sample3 from "./HomeImages/image_3.png";
import Sample4 from "./HomeImages/image_4.png";
import Sample5 from "./HomeImages/image_5.png";
import Sample6 from "./HomeImages/image_6.png";
import Sample7 from "./HomeImages/image_7.png";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${Sample2});
  background-position: center;
  background-size: cover;
  filter: brightness(60%);
  z-index: -1;
`;

const Content = styled.div`
  z-index: 1;
  margin-left: 5em;
  margin-top: 8em;
  color: white;
`;

const StyledH1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const StyledP = styled.p`
  font-size: 48px;
  white-space: pre-wrap;
  margin: 5px;
`;

const StyledButton = styled.button`
  position: fixed;
  border-radius: 5px;
  border: none;
  background-color: #008DDA;
  color: white;
  padding: 15px 30px;
  top: 40em;
  transition: background-color 0.3s ease;


  &:hover{
    background-color: #0176b6;
  }

`;

function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const messages = [
    "Our team’s name is Favicon.",
    "Our team consists of six people.",
    "The subject of the project is Travel.",
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const introText = "Hello, Introduce Our Team,";

  const goToTeamMerPage = () => {
    navigate('/teamMember');
  };

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        setTimeout(() => {
          setText((text) => {
            if (messageIndex === 0 && charIndex === 0) {
              return "" + messages[messageIndex][charIndex];
            } else {
              return text + messages[messageIndex][charIndex];
            }
          });
          setCharIndex(charIndex + 1);
        }, 100); 
      } else {
        setTimeout(() => {
          if (messageIndex === messages.length - 1) {

            setMessageIndex(0);
            setCharIndex(0);
            setText("");
          } else {
            setMessageIndex(messageIndex + 1);
            setCharIndex(0);
            setText("");
          }
        }, 2000);
      }
    }
  }, [messageIndex, charIndex, messages, introText]);
  
  

  return (
    <HomeDiv>
      <BackgroundImage />
      <Content>
        <StyledH1>Introduction</StyledH1>
        <StyledP>{introText}</StyledP>
        <StyledP>{text}</StyledP>
        <StyledButton onClick={goToTeamMerPage}>SEE TEAM MEMBER</StyledButton>
      </Content>
    </HomeDiv>
  );
}

export default Home;
