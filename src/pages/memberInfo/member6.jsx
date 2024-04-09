// eslint-disable-next-line

import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ListGroup } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";

import "./css/Member.css";
import "./css/Profile.css";
const StyledLink = styled(Link)`
  width: calc(33.333% - 20px);
  text-decoration: none;
  color: inherit;

  img {
    width: 300px;
    height: auto;
  }

  p {
    padding-left: 80px;
  }
`;

function Member6() {
  return (
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
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          src="https://avatars.githubusercontent.com/u/96830595?s=400&v=4"
          alt="Yoon Sang"
        />

        <Card
          style={{
            borderRadius: "12px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          <Card.Body style={{ padding: "12px", backdropFilter: "blur(10px)" }}>
            {/* 이곳에 본인의 간단한 소개말 적어주세요 */}
            <p>Hello!! I'm Kim Min Jae.</p>
            <p>Student of Gachon Univ finance mathematics Dept.</p>
            <p>Working hard to be a frontend developer.</p>
          </Card.Body>
        </Card>

        {/* 이곳에 본인 이름과 학교 적어주세요 */}
        <h3>Kim Min Jae</h3>
        <div className="info">
          <p>Student of Gachon Univ finance mathematics Dept</p>
        </div>
        <div>
          <h2 id="tech_stack">Tech Stack</h2>
          {/* 본인 tech stack 이미지를 적용시켜주세요 */}
          <div>
            <img
              src={require("./images/minjae_skills/node.png")}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <img
              src={require("./images/minjae_skills/javascript.png")}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <img
              src={require("./images/minjae_skills/python.png")}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <img
              src={require("./images/minjae_skills/react.png")}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <img
              src={require("./images/minjae_skills/sql.png")}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
        <h3 id="webSite">Yoon Sang On The Web Site</h3>
        <ul>
          {/* 본인 관련 웹사이트 링크와 이미지 적용시켜 주세요 */}
          <StyledLink href="https://github.com/kareawe">
            <span style={{ marginRight: "20px" }}>
              <img
                src={require("./images/minjae_web_icons/github.png")}
                alt="GitHub Icon"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </span>
          </StyledLink>
          <StyledLink href="https://blog.naver.com/kimminjae1573">
            <span style={{ marginRight: "20px" }}>
              <img
                src={require("./images/minjae_web_icons/naverBlog.jpg")}
                alt="Naver Blog Icon"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </span>
          </StyledLink>
        </ul>
        <Container>
          {/* 본인의 올해 목표 적어주세요 */}
          <h3 id="goal">Goals In 2024</h3>
          <ListGroup>
            <ListGroup.Item className="d-flex align-items-center">
              <FiCheckCircle className="mr-3" />
              SQLD 자격증
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <FiCheckCircle className="mr-3" />
              대외활동 (우체국 예금 서포터즈)
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              ADSP 자격증
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center">
              정보처리기사
            </ListGroup.Item>
          </ListGroup>

          {/* 본인의 취미를 적어주세요 */}
          <div
            id="favorites"
            className="styledList"
            style={{
              listStyleType: "none",
              textAlign: "left",
              paddingLeft: "0",
              marginTop: "50px",
            }}
          >
            <ul>
              <h3>Favorites</h3>
              <li>Football</li>
              <li>Game</li>
              <li>weight training</li>
              <li>movie</li>
            </ul>
          </div>

          {/* 본인 프로필 적어주세요 */}
          <div
            className="styledList"
            style={{
              listStyleType: "none",
              textAlign: "left",
              paddingLeft: "0",
              marginTop: "50px",
            }}
          >
            <ul>
              <h3 id="prof">Profile</h3>
              <li>Born in: 2001</li>
              <li>Middle School in: 2014 ~ 2016</li>
              <li>High School in: 2017 ~ 2019</li>
              <li>Gachon Univ in: 2020 ~ </li>
              <li>Army in: 2021 ~ 2022</li>
            </ul>
          </div>
        </Container>

        <div id="works" style={{ marginTop: "100px" }}>
          <h3>My Projects</h3>

          {/* 본인 프로젝트 소갯말과 github링크 적용시켜 주세요 */}
          <ul>
            <div style={{ marginTop: "20px" }}>
              <h3>Mingle:당근마켓 clone coding</h3>
              <p>Working Period: 2021.11 ~ 2022.02</p>
              <p>Role: front-end</p>
              <li>
                <div>
                  <img
                    src="https://velog.velcdn.com/images/ohmynoon__/post/acc58798-6a23-42d1-a9bf-bda28dfc82f7/image.jpg"
                    alt="mingle"
                    style={{ width: "400px", height: "300px" }}
                  />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Member6;
