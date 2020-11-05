import styled from "@emotion/styled";
import React from "react";
import Avatar from "./Avatar";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background: #fafafa;
`;

const Text = styled.div`
  font-size: 11px;
  line-height: 18px;
  font-weight: bold;
  letter-spacing: -0.165px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const AvatarContainer = styled.div`
  display: flex;
  overflow-x: auto;

  margin: -9px;
  & > * {
    margin: 9px;
  }
`;

const Stories: React.FC<IProps> = () => {
  const { accountStore } = useStores();
  return useObserver(() => (
    <Root>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text>Stories</Text>
        <Text>
          <Arrow />
          Watch all
        </Text>
      </div>
      <AvatarContainer>
        {accountStore.users.map(({ avatar, name }, index) => (
          <Avatar src={avatar} name={name} key={index} />
        ))}
      </AvatarContainer>
    </Root>
  ));
};

export default Stories;

const Arrow = () => (
  <svg
    style={{ marginRight: 8 }}
    width="7"
    height="10"
    viewBox="0 0 7 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 5L0.25 9.33013L0.25 0.669872L7 5Z" fill="#4F4F4F" />
  </svg>
);
