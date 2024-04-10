// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { Container, ListGroup } from 'react-bootstrap';
import { FiCheckCircle, FiCircle, FiAward, FiBookOpen, FiTool, FiThumbsUp, FiUser, FiTrello }
  from 'react-icons/fi';

import './css/Member.css'
import './css/Profile.css'
import Project from "./Project";

import projectImage1 from './images/minjeong_project/golfbang_main.jpg'
import projectImage2 from './images/minjeong_project/golfbang_event.jpg'
import projectImage3 from './images/yoonsang_project/mingle.png'
import projectImage4 from './images/minjeong_project/ines(1).png'
import projectImage5 from './images/minjeong_project/ines(2).png'
import projectImage6 from './images/minjeong_project/pang.png'


const StyledTilteText = styled.div`
  h1 {
    font-size: 44px;
    margin-bottom: 50px;
  }
`;

function Member3() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([{
      title: 'Golbang: Golf Community Event Project',
      workingPeriod: '2024.02 ~ In progress',
      role: ' UI Design, Backend(Spring Framework), DevOps',
      githubLink: '',
      image: [projectImage1, projectImage2],
    },
    {
      title: 'Mingle:To-Do Web Application Project',
      workingPeriod: '2024.01 ~ 2024.03',
      role: 'Backend(Spring Framework)',
      githubLink: 'https://github.com/Todo-WebApp-Project',
      image: [projectImage3],
    },
    {
      title: 'iNES: Lab Website Project',
      workingPeriod: '2023.06 ~ 2024.12',
      role: 'Full-Stack (Django framework)',
      githubLink: 'https://github.com/Mingguriguri/iNES-lab',
      image: [projectImage4, projectImage5],
    },
    {
      title: 'Pang: AI-based automatic memo classification in mindmap format',
      workingPeriod: '2023.05 ~ 2023.06',
      role: 'Full-Stack (Django framework)',
      githubLink: 'https://github.com/Mingguriguri/pang',
      image: [projectImage6],
    }
    ]
    )


  }, [])




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
            src={require('./images/minjeong.jpg')}
            alt='Min Jeong'
          />


          <Card style={{ borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
            <Card.Body style={{ padding: '12px' }}>
              {/* 이곳에 본인의 간단한 소개말 적어주세요 */}
              <p>Hi, I'm Minjeong Kim</p>
              <p>Student of Gachon Univ Biomedical Engineering(BME) Dept.</p>
              <p>Working hard to be a Backend developer.</p>
            </Card.Body>
          </Card>

          {/* 이곳에 본인 이름과 학교 적어주세요 */}
          <h1>Kim Min Jeong</h1>
          <div className="info"><p>Student of Gachon Univ</p></div>
          <div style={{ marginTop: "50px" }}>
            <h3 id="tech_stack"><FiTool className="mr-3" />
              Tech Stack
            </h3>
            {/* 본인 tech stack 이미지를 적용시켜주세요 */}
            <div>
              <img alt='' src={require("./images/minjeong_skills/python.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt='' src={require("./images/minjeong_skills/django.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt='' src={require("./images/minjeong_skills/java.png")} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt='' src={require("./images/minjeong_skills/springboot.png")} style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h3 id="webSite"><FiBookOpen className="mr-3" />
              Study Log
            </h3>
            <ul>
              {/* 본인 관련 웹사이트 링크와 이미지 적용시켜 주세요 */}
              <a href="https://github.com/Mingguriguri">
                <span style={{ marginRight: '20px' }}>
                  <img src={require("./images/minjeong_web_icon/github.png")} alt="GitHub Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                </span>
              </a>
              <a href="https://minsllogg.tistory.com/">
                <span style={{ marginRight: '20px' }}>
                  <img src={require("./images/minjeong_web_icon/tistory.png")} alt="Tistory Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                </span>
              </a>
              <a href="https://velog.io/@miiingirok/posts">
                <span style={{ marginRight: '20px' }}>
                  <img src={require("./images/minjeong_web_icon/velog.jpg")} alt="Velog Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                </span>
              </a>
              <a href="https://blog.naver.com/rlaalswjd-">
                <span style={{ marginRight: '20px' }}>
                  <img src={require("./images/minjeong_web_icon/naverBlog.jpg")} alt="Naver Blog Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                </span>
              </a>
            </ul>
          </div>
          <Container>
            <div style={{ marginTop: "50px" }}>
              {/* 본인의 올해 목표 적어주세요 */}
              <h3><FiAward className="mr-3" />Certification</h3>
              <ListGroup>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCheckCircle className="mr-3" />
                  SQLD (23.04.14)
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCheckCircle className="mr-3" />
                  정보처리기사 (22.10.03)
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCheckCircle className="mr-3" />
                  네트워크관리사 2급 (20.09.15)
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h3 id="goal"><FiTrello className="mr-3" />Goals In 2024</h3>
              <ListGroup >
                <ListGroup.Item className="d-flex align-items-left">
                  <FiCircle className="mr-3" />
                  TIL, Trouble Shooting 꾸준히 작성하기
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-left">
                  <FiCircle className="mr-3" />
                  블로그에 글 정리해서 올리기
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  연구실 세미나 주제 발표 완료
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  연구실 웹페이지 Ver 2 업그레이드 및 배포
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  골방프로젝트 MVP 개발 및 배포
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  깃허브 1일 1커밋
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  일주일에 4문제 이상 백준 문제 풀기
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  백준 골드 1 달성하기
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FiCircle className="mr-3" />
                  프로젝트 동아리 프로젝트 배포 & 운영
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
              <ul>
                <h3 id="favorites"><FiThumbsUp className="mr-3" />Favorites</h3>
                <li>
                  Running
                </li>
                <li>
                  Watching a Drama
                </li>
                <li>
                  Eating Delicious desserts
                </li>
              </ul>
            </div>

            {/* 본인 프로필 적어주세요 */}
            <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
              <ul>
                <h3 id="prof"><FiUser className="mr-3" />Profile</h3>
                <li>Born in: 2000.09.25</li>
                <li>Middle School in: 2013 ~ 2015</li>
                <li>High School in: 2016 ~ 2018</li>
                <li>Univ in: 2019 ~ </li>
              </ul>
            </div>
          </Container>
          <Project projects={projects} />
        </div>
      </div >
    </div >
  );
}

export default Member3;