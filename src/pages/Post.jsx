import React,  { Component } from "react";
import styled from "styled-components";
import PageWrapper from '../components/Base/PageWrapper';
import WritePostContainer from '../containers/Post/WritePostContainer';
import PostListContainer from '../containers/Shared/PostList/PostListContainer';



const PostDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

class Post extends Component {
  render() {
      return (
        <PageWrapper>
            <WritePostContainer/>
            <PostListContainer/>
        </PageWrapper>
      );
  }
}

export default Post;