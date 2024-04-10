import React from "react";
import styled from 'styled-components';
import NavPage from './Nav';
const HeaderDiv = styled.div`
    position: relative;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #41C9E2;
    background-position: center;
    z-index: -1;
`;

const TextDiv = styled.div`
    font-size: 1.6em;
    font-weight: bold;
    color: #fff;
    z-index: 1;
    margin-left: 3em;

    h1 {
        margin: 0;
    }
`;

function Header() {
    return (
        <HeaderDiv>
            <BackgroundDiv></BackgroundDiv>
            <TextDiv><h1>Favicon</h1></TextDiv>
            <NavPage></NavPage>
        </HeaderDiv>
    );
}

export default Header;
