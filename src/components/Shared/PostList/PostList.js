import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import Post from './Post';

const Wrapper = styled.div`
    position: relative;
    margin-top: 3rem;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
`

const PostList = ({data}) => {
    return(
        <Wrapper>
            {/* <Masonry options={{gutter: 16}}> */}
                <PostWrapper>
                    {data?.map((item) => 
                    <Post
                    count={item.count}
                    username={item.username}
                    content={item.content}
                    comments={item.comments}
                    likesCount={item.likesCount}
                    createdAt={item.createdAt}
                    />)}
                </PostWrapper>
            {/* </Masonry> */}
        </Wrapper>
    );
}

export default PostList;