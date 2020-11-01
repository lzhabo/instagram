import React from 'react';
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import Stories from './Stories'
import Post from './Post'
import { IPost, IUser, IComment } from '../interfaces';
import { randomInteger } from '../utils';
import { injectGlobal } from 'emotion'
import sfuiBold from "../fonts/SFUIText-Bold.ttf";
import sfui from "../fonts/SFUIText-Regular.ttf";

//todo install normalize.css


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
`

const Root = styled.div`
  display: flex;
  justify-content: center;
  font-family: SF UI Text;
  height: 100vh;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 414px;
  flex: 1;
`

const ScrollContainer = styled.div`
overflow-y: auto;
`

const App: React.FC = () => {
  return (
    <Root>
      <Layout>
        <ScrollContainer >
          <Header />
          <Stories users={users} />
          {posts.map((post, index) => <Post post={post} key={index} />)}
        </ScrollContainer>
        <Footer/>
      </Layout>
    </Root>
  );
}

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

const users: IUser[] = Array.from({ length: randomInteger(1, 20) }, () =>
  ({ avatar: 'https://i.pravatar.cc/300', name: 'name' })
)

const commentsData: IComment[] = Array.from({ length: randomInteger(1, 5) }, () =>
  ({ user: users[randomInteger(1, users.length - 1)], content: loremIpsum })
)

const posts: IPost[] = Array.from({ length: randomInteger(10, 20) },
  () => ({
    user: users[randomInteger(1, users.length - 1)],
    photo: 'https://i.pravatar.cc/300',
    location: "Somewhere",
    likes: Math.random() * 2000,
    description: loremIpsum,
    comments: commentsData
  }))



export default App;
