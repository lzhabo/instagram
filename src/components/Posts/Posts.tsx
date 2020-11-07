import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "@components/Posts/Post";
import { useStores } from "@stores";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Posts: React.FC<IProps> = () => {
  const {postStore, commentStore} = useStores()
  return useObserver(() =><Root>
    {postStore.posts.map((post, index) => (
      <Post post={post} key={index} comments={commentStore.comments} />
    ))}
  </Root>);
}
export default Posts;