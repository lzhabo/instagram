import styled from "@emotion/styled";
import React from "react";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import favorites from "../assets/favoriets.svg";
import instLogo from "../assets/instLogo.svg";
import { IUser } from "../interfaces";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";

interface IProps {
  user?: IUser;
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  align-items: center;
  min-height: 55px;
  padding: 0 13px;
  box-sizing: border-box;
  flex-shrink: 0;
  background: #fafafa;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

const Footer: React.FC<IProps> = ({ user }) => {
  const {accountStore} = useStores()
  return useObserver(() => {
    const user = accountStore.activeUser
      return <Root>
        <Image src={home} alt="camera" />
        <Image src={search} alt="logo" />
        <Image src={instLogo} alt="direct" />
        <Image src={favorites} alt="direct" />
        {user ? (
          <Image src={user.avatar} alt="image" style={{ borderRadius: "50%" }} />
        ) : (
          <Image src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_account-512.png" />
        )}
      </Root>;
    }
  );
}
export default Footer;
