import styled from "@emotion/styled";
import React from "react";
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
          </FlexContainer>
      </Root>;
    }
  );
}
export default HomePage;
