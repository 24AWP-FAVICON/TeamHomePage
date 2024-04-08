import {media} from "../../../lib/styleUtils";
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import Textarea from 'react-textarea-autosize';

function UserName({setUserName}) {

    return (
        <Wrapper>
            <StyledTextarea
            minRows={3}
            maxRows={10}
            placeholder="이름을 입력하세요"
            onChange={(e) => setUserName(e.target.value)}
            />
        </Wrapper>
    )
}


const StyledTextarea = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    resize: none;
    outline: none;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    ::placeholder {
        color: ${oc.gray[3]};
    }
    ${media.tablet`
        font-size: 1rem;
    `}
`;


const Wrapper = styled.div`
    width: 768px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 15px;
    margin-bottom: 10px;
    background: ${oc.gray[7]};
    position: relative;
    ${shadow(1)}
    ${media.desktop`
        width: 736px;
    `}
    ${media.tablet`
        width: 100%;
    `}
`;

export default UserName;