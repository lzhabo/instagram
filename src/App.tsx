import React from "react";
import styled from "@emotion/styled";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Stories from "@components/Stories";
import { injectGlobal } from "emotion";
import sfuiBold from "./fonts/SFUIText-Bold.ttf";
import sfui from "./fonts/SFUIText-Regular.ttf";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import Loading from "@components/Loading";
import Posts from "@components/Posts";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "SF UI Text";
    font-weight: bold;
    src: url(${sfuiBold});
  }
  @font-face {
    font-family: "SF UI Text";
    src: url(${sfui});
  }
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
  font-family: SF UI Text;
  height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 414px;
  flex: 1;
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
`;

const App: React.FC = () => {
  const rootStore = useStores();
  const initialized = useObserver(() => rootStore.initialized);
  console.log(initialized);
  if (!initialized) return <Root><Loading /></Root>;
  return (
    <Root>
      <Layout>
        <ScrollContainer>
          <Header />
          <Stories />
          <Posts />
        </ScrollContainer>
        <Footer />
      </Layout>
    </Root>
  );
};

export default App;
