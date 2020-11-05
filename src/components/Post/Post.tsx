import styled from "@emotion/styled";
import React from "react";
import { IPost } from "../../interfaces";
import PostHead from "./PostHead";
import PostFooter from "./PostFooter";

interface IProps {
  post: IPost;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostPic = styled.img`
  display: flex;
  flex-direction: column;
  width: 414px;
  height: 375px;
`;

const Post: React.FC<IProps> = ({ post }) => {
  return (
    <Root>
      <PostHead user={post.user} location={post.location} />
      <PostPic src={post.photo} />
      <PostFooter post={post} />
    </Root>
  );
};

export default Post;
