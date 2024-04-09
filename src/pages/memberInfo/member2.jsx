// eslint-disable-next-line

import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Col, Container, ListGroup } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';

import './css/Member.css'
import './css/Profile.css'
const StyledLink = styled(Link)`
  width: calc(33.333% - 20px);
  text-decoration: none;
  color: inherit;

  img {
    width: 300px;
    height: auto;
  }

  p{
    padding-left: 80px;
  }
`;

const StyledTilteText = styled.div`
  h1 {
    font-size: 44px;
    margin-bottom: 50px;
  }
`;

function Member2() {
  return (

    <div>
      <StyledTilteText className="TitleText">
        <h1>MEMBER INFROMATION</h1>
      </StyledTilteText>
      <div className="col-sm-12 col-md-4" id="info">
      <ul className="navi">
        <a href="#info"><li className="href">Intro</li></a>
        <a href="#tech_stack"><li className="href">Tech stack</li></a>
        <a href="#webSite"><li className="href">Web site</li></a>
        <a href="#goal"><li className="href">Goals in 2024</li></a>
        <a href="#favorites"><li className="href">Favorites</li></a>
        <a href="#prof"><li className="href">Profile</li></a>
        <a href="#works"><li className="href">Projects</li></a>
      </ul>
      <div className="item">
        <img
          style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          src={require('./images/yoonsang.jpg')}
          alt='Yoon Sang'
        />


        <Card style={{ borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
          <Card.Body style={{ padding: '12px'}}>
            {/* 이곳에 본인의 간단한 소개말 적어주세요 */}
            <p>Hello!! I'm Jo Yun Sang.</p>
            <p>Student of Gachon Univ Software Dept.</p>
            <p>Working hard to be a backend developer.</p>
          </Card.Body>
        </Card>

        {/* 이곳에 본인 이름과 학교 적어주세요 */}
        <h3>Jo Yun Sang</h3>
        <div className="info"><p>Student of Gachon Univ</p></div>
        <div>
          <h2 id="tech_stack">
            Tech Stack
          </h2>
          {/* 본인 tech stack 이미지를 적용시켜주세요 */}
          <div>
            <img src={require("./images/yoonsang_skills/java.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/yoonsang_skills/javascript.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/yoonsang_skills/python.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/yoonsang_skills/react.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/yoonsang_skills/springboot.png")} style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
        <h3 id="webSite">
          Yoon Sang On The Web Site
        </h3>
        <ul>
          {/* 본인 관련 웹사이트 링크와 이미지 적용시켜 주세요 */}
          <StyledLink href="https://github.com/YoonYn9915">
            <span style={{ marginRight: '20px' }}>
              <img src={require("./images/yoonsang_web_icon/github.png")} alt="GitHub Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </span>
          </StyledLink>
          <StyledLink href="https://velog.io/@jys201811/posts">
            <span style={{ marginRight: '20px' }}>
              <img src={require("./images/yoonsang_web_icon/velog.jpg")} alt="Velog Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </span>
          </StyledLink>
          <StyledLink href="https://blog.naver.com/jsy4407">
            <span style={{ marginRight: '20px' }}>
              <img src={require("./images/yoonsang_web_icon/naverBlog.jpg")} alt="Naver Blog Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </span>
          </StyledLink>
        </ul>
        <Container>
          {/* 본인의 올해 목표 적어주세요 */}
          <h3 id="goal">Goals In 2024</h3>
          <ListGroup>
            <ListGroup.Item className="d-flex align-items-center">
              <FiCheckCircle className="mr-3" />
              정보처리기사
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FiCheckCircle className="mr-3" />
              리눅스 마스터 1급
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              백준 골드 5
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              동아리 프로젝트 배포 & 운영
            </ListGroup.Item>
          </ListGroup>

            {/* 본인의 취미를 적어주세요 */}
          <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
            <ul>
              <h3 id="favorites">Favorites</h3>
              <li>
                Football
              </li>
              <li>
                Music
              </li>
              <li>
                Movie
              </li>
              <li>
                Game
              </li>
            </ul>
          </div>

          {/* 본인 프로필 적어주세요 */}
          <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
            <ul>
              <h3 id="prof">Profile</h3>
              <li>Born in: 1999</li>
              <li>Middle School in: 2012 ~ 2014</li>
              <li>High School in: 2015 ~ 2017</li>
              <li>Gachon Univ in: 2018 ~ 2019</li>
              <li>Air Force in: 2020 ~ 2021</li>
              <li>Gachon Univ in: 2022 ~</li>
            </ul>
          </div>
        </Container>

        <div id='works' style={{  marginTop: "100px" }} >
          <h3>
            My Projects
          </h3>

          {/* 본인 프로젝트 소갯말과 github링크 적용시켜 주세요 */}
          <ul>
            <div style={{  marginTop: "20px" }}>
              <h3>Mingle:To-Do Web Application Project</h3>
              <p>Working Period: 2024.01 ~ 2024.03</p>
              <p>Role: Backend(Spring Framework)</p>
              <a href="https://github.com/Todo-WebApp-Project">
                <li>
                  <div>
                    <img src={require("./images/yoonsang_project/mingle.png")} alt="mingle" style={{ width: '400px', height: '300px' }} />
                  </div>
                </li>
              </a>
              <p style={{color:"red"}}>Click Image to move Github Repository</p>
            </div>
            <div style={{  marginTop: "100px" }}>
              <h3>Sweat:AI Blog Project</h3>
              <p>Working Period: 2024.09 ~ 2024.12</p>
              <p>Role: Frontend & Infra (React)</p>
              <a href="https://github.com/KakaoEnterprise-SWEAT">
                <li>
                  <div>
                  <img src={require("./images/yoonsang_project/sweat.png")} alt="sweat" style={{ width: '400px', height: '300px' }} />
                  </div>
                </li>
              </a>
            </div>
            <div style={{  marginTop: "100px" }}>
              <h3>Anipet:Pet Community System</h3>
              <p>Working Period: 2023.03 ~ 2023.07</p>
              <p>Role: Backend (node & express.js)</p>
              <a href="https://github.com/YoonYn9915/anipet">
                <li>
                  <div>
                  <img src={require("./images/yoonsang_project/anipet.png")} alt="anipet" style={{ width: '400px', height: '300px' }} />
                  </div>
                </li>
              </a>
            </div>
          </ul>


        </div>
      </div >
    </div >

    </div>

  );
}

export default Member2;