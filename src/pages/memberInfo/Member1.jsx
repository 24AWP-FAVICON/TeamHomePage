// eslint-disable-next-line
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ListGroup } from 'react-bootstrap';
import './css/Member.css'
import './css/Profile.css'
import projectImage1 from './images/yoonsang_project/mingle.png';
import projectImage2 from './images/jaeminProject1.png';
import projectImage3 from './images/jaeminProject2.png';
import Project from "./Project";

const StyledLink = styled(Link)`
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


function Member1() {

  const projects =
    [
      {
        title: 'Mingle:To-Do Web Application Project',
        workingPeriod: '2024.01 ~ 2024.03',
        role: 'Front-End (React Framework)',
        githubLink: 'https://github.com/Todo-WebApp-Project',
        image: [projectImage1],
      },
      {
        title: 'Comlinee (PC Estimate System)',
        workingPeriod: ' 2023.09 ~ 2024.12',
        role: 'Front-End (Vue Framework)',
        githubLink: 'https://github.com/2023h2-pc-estimate-system-architecture/front',
        image: [projectImage2],
      },
      {
        title: 'Garam-E (Chatbot Project)',
        workingPeriod: ' 2023.03 ~ 2024.03',
        role: ' Front-End (Dart & Flutter)',
        githubLink: 'https://github.com/Garam-e/front_end',
        image: [projectImage3],
      }
    ]

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
            src={require("./images/jaemin.png")}
            alt='jaemin'
          />
          <Card style={{ borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
            <Card.Body style={{ padding: '12px' }}>
              {/* 이곳에 본인의 간단한 소개말 적어주세요 */}
              <p>Hello.</p>
              <p>I'm Park jae-min preparing to become a Front-End Developer.</p>
              <p>I'm currently studying React, and I'm also studting several Front-End technologies.</p>
              <p>I look forward to your kind cooperation.</p>
            </Card.Body>
          </Card>

          <h3>Park Jae Min</h3>
          <div className="info"><p>Student of Gachon Univ</p></div><br />
          <div>
            <h2 id="tech_stack">
              Tech Stack
            </h2>
            {/* 본인 tech stack 이미지를 적용시켜주세요 */}
            <div>
              <img alt="" src="data:image/png;base64,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" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt="" src="data:image/png;base64,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" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAolBMVEX///9UxfgBV5sptvZAwPgARJK75fzI6vz5/f9HwvinvNSU2PoBU5Tz+v4AS5Wf2/sAsPUBUI43uvcASJR8zfmO1fqFoMN2lr1+nMEBRn0BP3ABQnYANWEBSoQdjMQdib4ACScAJ0eBlb3f8/4Aq/U3l8p7lbYAN20ANGUALVwAIkcCLlMAGDQDL1ADNVwAd65+iagAQIQANo1ojLi1x9vR3Ono3j6XAAAEBklEQVR4nO2biXbaMBBFKZDElJiEENqwGMd0LyFt0/b/f63eKMbIskYRo5nDvA+Ae4Z3GYml05FIJBKJ5NwSXl2C88E3dJ5w2Adn6hs6TzDtvwFmMPQNnScYwslvAt/UWYLhgOnMQ8bkbHtuYeiNb+g8Yih+QrZtYWyoTc99Q+ex6bkY+rrwNdSm5zRmLobih7GhfHt+Xrc539B5rHpOwlC5zeFHbnP4YbyJ2LaFsaFntYnE0NdFDMWPGIqf8zKUBrnc5vAjhuKH8SZiu/3lNocfvptIDMWPGIofuc3hR86K+BFD8SO3OfzwNVS+m8PPmRlKoueMNxFjcrY957v9xVD08D0rMjZUzoroEUOLB7uCx/rvg05/C52OAZq7qW313BoKfwH71rq7NdSG3H7mDg0NphZjsAR3u4lwF7LL25wFuX3PLdCJGNqBF0bzW2hMQ/PANCViqAU7mZ7/Zzd91uYxWVwN+y4OQabsRDbRQcxebc1ZEd5zR+RmfdecFb1eDdvZqRlaZdc/Pz1D99HvJoqGVtg1DG4Ndf/npOa+UzW0yq7m0Bh634OSOzW0wq6coWZM97e9OxLkalc1hqbkPRi7c0Or7PW+a86KOTmI/aQfO9Vd1fW8IAewn/ijvkNXTciN2R1vIgV7xVW9oT0Y+8kM3WfvapuhIPYTGlplH7S0JaiRG7AjfaRduGrWc0N2hLbs2Pu6s6KCvIUdjTx31bjnBuwoPd8lvAqB5Br2E5wVbaLqeQs7kS+ddOQN7Ig910VtqJb95DvUMC3kCnZUQzVpJT9iZ2BoAzsLQ5XsRAw1aUuNnY2hR+yMDK2xEyE37XmFnZmhFXYi5J3Lj0DyXu+Tb+Yy8KmvZp99Q5eBsq8W0ejBN3SZtnNXjfxLdN2dPJB4h4Gx5+Td7uidb+gy5uyrxTgjT9nf+4YuY9r3tOfXBXraGd/QZczYs7aU5ITmbtKZ1ddovEfvjvi4WpDv0em42taZeD7LyCvodDqjZ18tF+Px4dQJuarrTPwtI6+jdydU5t7MnpLPIgV62nfirsbf57Md+hG7b+gy6r7Hm+WiCZ22q/HmeV70RYVO2dX48Xk5L6Z+rUKn62r8uFnu0I81pexq/JRssqlnjVFhF+xUOlPte5wk2wx9voiUA6fWmT17OvNtsk3Ro2ZsWnPfdSZ+TJIkfWcct4Bnc6d1jkzJt+0D382dym7K2OOnzSLSFJxqZ8L7H88zc+6iM76hywQ/f8HICZ0JgvUIiE7I1fUFlJ2Mq6EFO5XOWLDTcdWi71TmHqwnUHY650hx1UvEVT+x6jtjV6l0xqbvVDoTWry/U5m71TnSN3QZcdVPwvXLBTAvv31Dlwn/vAXnr29oiUQikUja8w8Q037V0XJLfQAAAABJRU5ErkJggg==" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD5+fnk5OSRkZFQUFBxcXHZ2dksLCzExMTu7u7f39/29vZ8fHzo6OjLy8u8vLyzs7NBQUGYmJhKSkpjY2MYGBjT09M5OTmsrKyEhISmpqZcXFwTExOKiopVVVUkJCSS2/+7AAACIElEQVRIiZ2W54KDIAyACVitq+7Rdd77P+UpMiIyes2vpuSDLIKEOISyZJoSRl3rVqmiCyi5RNVn1BTDSeIpiNXXM7bJtfaf5sA46jm1dGOblA6MjX4OYGQ2Lg1hm6RnrvmEA2i+5E5k9SkHcGiH7HMOIEPgLHfL763d+tIwmb1Zc53467opua3leB1+hdadHH3set5C/2jShLEkbR49tLnRH9LZQf5xl1sdLpNS7tJuEAcoj05FcpVsd0HHdPeD6kSIN7XQOXB1MTFiBChW9Ymy5weR4XNVe61aWhgLugb9mjNULT+HswEUd2kWAlFnVijEV4gj5IWC1KkKFGMTXZASbZKEwQS5N6vftzB4U8YzGb8DR1TVf4FA3t/F+CZ6dvuHPJdaGV+JfpeiMBgp4wtqozkM6oEUo03C2UEtFyG34ScE/mjbGmeYX0+PoCu/eafrsUbsFfS+v1f1gfbx3sgBGW6DNEE6tM4EsRnb8WbhLdBHYsPSirLjY81H/p7XdcBlIoa2qzI0kWlWdeaDIpqMX5CB4iieGuzgJKNYStXxcqXHbvYnUE3DBYS3cnId+r02uUUticoyNToP8+5mgqhPUnnk+rJ0T+PbrTC4w9jeu9BeRHrkjI7mCR2t5BEczGWRoOpGCc3d4GJyx1akLvB03iZRGHRMF/3+FHbQ+alMYx8Y+77P88UFLrmLkWi5328k6yUoQxiXyZg9he2j+g9XjBQ+RkOnvAAAAABJRU5ErkJggg==" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <img alt="" src="data:image/png;base64,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" style={{ width: '50px', height: '50px' }} />
              <br />
              <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.codenary.co.kr/framework_logo/styledcomponents.png&w=150&q=90" style={{ width: '50px', height: '50px' }} />
              <img alt="" src="data:image/png;base64,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" style={{ width: '100px', height: '50px' }} />
            </div>
          </div>
          <br />
          <h3 id="webSite">
            Jae min On The Web Site
          </h3>
          <ul>
            <StyledLink href="https://github.com/jamminP">
              <span style={{ marginRight: '20px' }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD5+fnk5OSRkZFQUFBxcXHZ2dksLCzExMTu7u7f39/29vZ8fHzo6OjLy8u8vLyzs7NBQUGYmJhKSkpjY2MYGBjT09M5OTmsrKyEhISmpqZcXFwTExOKiopVVVUkJCSS2/+7AAACIElEQVRIiZ2W54KDIAyACVitq+7Rdd77P+UpMiIyes2vpuSDLIKEOISyZJoSRl3rVqmiCyi5RNVn1BTDSeIpiNXXM7bJtfaf5sA46jm1dGOblA6MjX4OYGQ2Lg1hm6RnrvmEA2i+5E5k9SkHcGiH7HMOIEPgLHfL763d+tIwmb1Zc53467opua3leB1+hdadHH3set5C/2jShLEkbR49tLnRH9LZQf5xl1sdLpNS7tJuEAcoj05FcpVsd0HHdPeD6kSIN7XQOXB1MTFiBChW9Ymy5weR4XNVe61aWhgLugb9mjNULT+HswEUd2kWAlFnVijEV4gj5IWC1KkKFGMTXZASbZKEwQS5N6vftzB4U8YzGb8DR1TVf4FA3t/F+CZ6dvuHPJdaGV+JfpeiMBgp4wtqozkM6oEUo03C2UEtFyG34ScE/mjbGmeYX0+PoCu/eafrsUbsFfS+v1f1gfbx3sgBGW6DNEE6tM4EsRnb8WbhLdBHYsPSirLjY81H/p7XdcBlIoa2qzI0kWlWdeaDIpqMX5CB4iieGuzgJKNYStXxcqXHbvYnUE3DBYS3cnId+r02uUUticoyNToP8+5mgqhPUnnk+rJ0T+PbrTC4w9jeu9BeRHrkjI7mCR2t5BEczGWRoOpGCc3d4GJyx1akLvB03iZRGHRMF/3+FHbQ+alMYx8Y+77P88UFLrmLkWi5328k6yUoQxiXyZg9he2j+g9XjBQ+RkOnvAAAAABJRU5ErkJggg==" alt="GitHub Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              </span>
            </StyledLink>
            <StyledLink href="https://velog.io/@jaeminpark/posts">
              <span style={{ marginRight: '20px' }}>
                <img src={require("./images/yoonsang_web_icon/velog.jpg")} alt="Velog Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              </span>
            </StyledLink>
          </ul>
          <br />
          <Container>
            <h3 id="goal">Goals In 2024</h3>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center">
                정보처리기사
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                AWS Solutions Architect Associate
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                Oracle Cretified Professional
              </ListGroup.Item>
            </ListGroup>

            {/* 본인의 취미를 적어주세요 */}
            <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
              <ul>
                <h3 id="favorites">Favorites</h3>
                <li>
                  RPG Game
                </li>
                <li>
                  Music
                </li>
                <li>
                  Movie
                </li>
                <li>
                  Othello
                </li>
              </ul>
            </div>

            <div className="styledList" style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0", marginTop: "50px" }}>
              <ul>
                <h3 id="prof">Profile</h3>
                <li>Born in: 1998</li>
                <li>Middle School in: 2011 ~ 2013</li>
                <li>High School in: 2014 ~ 2016</li>
                <li>Gachon Univ in: 2018 ~ 2019</li>
                <li>Air Force in: 2019 ~ 2021</li>
                <li>Gachon Univ in: 2022 ~</li>
              </ul>
            </div>
          </Container>
          <Project projects={projects} />
        </div >
      </div >
    </div>
  );
}

export default Member1;