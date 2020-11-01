import styled from '@emotion/styled'
import React from 'react'
import { IPost } from '../../interfaces'
import PostHead from './PostHead'
import PostFooter from './PostFooter'

interface IProps {
    post: IPost
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
`
const PostPic = styled.img`
    display: flex;
    flex-direction: column;
    width:414px;
    height:375px;
`

const Post: React.FC<IProps> = ({post: {user, location,photo, comments}}) => {
    return <Root>
        <PostHead user={user} location={location}/>
        <PostPic src={photo}/>
        <PostFooter/>
    </Root>
}

export default Post

const Arrow = () => <svg style={{ marginRight: 8 }} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5L0.25 9.33013L0.25 0.669872L7 5Z" fill="#4F4F4F" />
</svg>

