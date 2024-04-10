import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/styleUtils';

// 헤더 아래에 위치하도록 상단 패딩
const Wrapper = styled.div`
    padding-left: 5em;
    width: 70vw;
    
    ${media.wide`
        width: 992px;
    `}

    ${media.desktop`
        width: 100%;
    `}
`;

const PageWrapper = ({responsive, children}) => (
    <Wrapper responsive={responsive}>
        {children}
    </Wrapper>
);

export default PageWrapper;