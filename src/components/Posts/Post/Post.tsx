import styled from "@emotion/styled";
import React from "react";
import { IPost , IComment} from "@src/interfaces";
import PostHead from "./PostHead";
import PostFooter from "./PostFooter";

interface IProps {
  post: IPost;
  comments: IComment[];
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

const Post: React.FC<IProps> = ({ post , comments}) => {
  console.log(comments);
  return (
    <Root>
      <PostHead post={post} />
      <PostPic src={post.photo} />
      <PostFooter post={post} comments={comments} />
    </Root>
  );
};

export default Post;
