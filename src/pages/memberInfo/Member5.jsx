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

function Member5() {
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
          src={require('./images/jihun_skills/profile.png')}
          alt='Jihun'
        />


        <Card style={{ borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
          <Card.Body style={{ padding: '12px'}}>
            {/* 이곳에 본인의 간단한 소개말 적어주세요 */}
            <p>Hello!! I'm Yang jihun.</p>
            <p>Student of Gachon Univ Finencial mathmethics Dept.</p>
            <p>Working hard to be a frontend developer.</p>
          </Card.Body>
        </Card>

        {/* 이곳에 본인 이름과 학교 적어주세요 */}
        <h3>Yang jihun</h3>
        <div className="info"><p>Student of Gachon Univ</p></div>
        <div>
          <h2 id="tech_stack">
            Tech Stack
          </h2>
          {/* 본인 tech stack 이미지를 적용시켜주세요 */}
          <div>
            <img src={require("./images/jihun_skills/javascript.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/jihun_skills/python.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <img src={require("./images/jihun_skills/react.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          </div>
        </div>
        <h3 id="webSite">
          JiHun On The Web Site
        </h3>
        <ul>
          {/* 본인 관련 웹사이트 링크와 이미지 적용시켜 주세요 */}
          <StyledLink href="https://github.com/yangjihun">
            <span style={{ marginRight: '20px' }}>
              <img src={require("./images/yoonsang_web_icon/github.png")} alt="GitHub Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </span>
          </StyledLink>
        </ul>
        <Container>
          {/* 본인의 올해 목표 적어주세요 */}
          <h3 id="goal">Goals In 2024</h3>
          <ListGroup>
            <ListGroup.Item className="d-flex align-items-center">
              <FiCheckCircle className="mr-3" />
              공모전 수상
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              백준 골드 5
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              백준 300문제
            </ListGroup.Item>
          </ListGroup>

            {/* 본인의 취미를 적어주세요 */}
          <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
            <ul>
              <h3 id="favorites">Favorites</h3>
              <li>
                Music
              </li>
              <li>
                Movie
              </li>
              <li>
                Walking
              </li>
            </ul>
          </div>

          {/* 본인 프로필 적어주세요 */}
          <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
            <ul>
              <h3 id="prof">Profile</h3>
              <li>Born in: 2001</li>
              <li>Middle School in: 2014 ~ 2016</li>
              <li>High School in: 2017 ~ 2019</li>
              <li>Gachon Univ in: 2020 ~ 2021</li>
              <li>The army in: 2022 ~ 2023</li>
              <li>Gachon Univ in: 2024 ~</li>
            </ul>
          </div>
        </Container>

        <div id='works' style={{  marginTop: "100px" }} >
          <h3>
            My Projects
          </h3>

          {/* 본인 프로젝트 소갯말과 github링크 적용시켜 주세요 */}
          <ul>
          </ul>


        </div>
      </div >

    </div >
    </div>

  );
}

export default Member5;
