import styled from "@emotion/styled";
import React from "react";
import { IPost } from "../../../interfaces";
import menu from "../../../assets/menu.svg";
interface IProps {
  post: IPost;
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 15px 10px;
`;
const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Name = styled.div`
  /* font-family: SF UI Text; */
  font-size: 11px;
  line-height: 11px;
  letter-spacing: -0.165px;
  font-weight: bold;
  color: #000000;
`;
const Location = styled.div`
  /* font-family: SF UI Text; */
  font-size: 10px;
  line-height: 11px;
  letter-spacing: -0.165px;

  color: #000000;
`;

const MenuContainer = styled.img`
  align-self: flex-start;
  padding: 10px 0;
`;

const NameContainer = styled.div`
  align-items: center;
  display: flex;
  margin: -4px;
  & > * {
    margin: 4px;
  }
`;

const PostHead: React.FC<IProps> = ({ post}) => {
  console.log(post);
  return (
    <Root>
      <NameContainer>
        <Img alt="avatar" src={post.user.avatar} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Name>{post.user.name}</Name>
          <Location>{post.location}</Location>
        </div>
      </NameContainer>

      <MenuContainer src={menu} alt="menu" />
    </Root>
  );
};

export default PostHead;
