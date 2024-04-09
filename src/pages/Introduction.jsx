import React from "react";
import styled from "styled-components";
import ImgFile from "./HomeImages/Introduction_Image.png";
const IntroductionDiv = styled.div`
  padding-left: 5em;
  display: flex;
  h1 {
    font-size: 44px;
    margin-bottom: 50px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const IntroductionContentDiv = styled.div`
  width: 50%;
  height: auto;
  margin-right: 50px;
`;

function Introduction() {
  return (
    <IntroductionDiv>
      <IntroductionContentDiv>
        <h1>Introduction</h1>
        <p>
          Hello, we are the "Favicon" team! In the web, a favicon is more than
          just an icon for a webpage. it's a small but powerful symbol that
          represents the identity of the site. Our team also aspires to be like
          a favicon, small but with a powerful influence. <br/><br/>
        </p>
        <p>
          It aims to be a platform that provides the communities necessary for
          making travel plans and manages travel schedules, tourist
          destinations, and accommodation information. Furthermore, we intend to
          enrich travel plans by providing location information, reviews, and
          photos of travel destinations using Google Maps API.<br/><br/>
        </p>
        <p>
          The 'Favicon' team would like to proceed with the project to make the
          trip more special for the users.
        </p>
      </IntroductionContentDiv>
      <div>
        <img
          style={{ width: "40vw", height: "65vh", marginTop: "8em" }}
          src={ImgFile}
        ></img>
      </div>
    </IntroductionDiv>
  );
}

export default Introduction;
