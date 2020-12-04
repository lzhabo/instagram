import styled from "@emotion/styled";
import React from "react";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import favorites from "../assets/favoriets.svg";
import instLogo from "../assets/instLogo.svg";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {
  
}

const Root = styled.div`
 display:flex;
 flex-direction:column;
`;

const Image = styled.img`
  
`;

const HomePage: React.FC<IProps> = ( ) => {
  const {accountStore} = useStores()
  return useObserver(() => {
    const user = accountStore.activeUser
      return <Root>
          <FlexContainer>
              <div>
              <img src ="" alt="plus"/>
              <img src ="" alt="menu"/>
              </div>
          </FlexContainer>
      </Root>;
    }
  );
}
export default HomePage;
