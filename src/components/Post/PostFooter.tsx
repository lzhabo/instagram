import styled from '@emotion/styled'
import React from 'react'
import { IUser } from '../../interfaces'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import direct from '../../assets/direct.svg'
import favoriets from '../../assets/favoriets.svg'

const Root = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 58px;
padding: 0 13px;
box-sizing: border-box;

`

const Image = styled.img`
  cursor: pointer;
`

const LeftBar = styled.div`
display: flex;
align-items: center;
margin: -8px;
& > * {
  margin: 8px;
}

`

const PostFooter: React.FC = () => <Root>
    <LeftBar>
        <Image src={like} alt="like" />
        <Image src={comment} alt="comment" />
        <Image src={direct} alt="direct" />
    </LeftBar>
    <Image src={favoriets} alt="favoriets" />
</Root>


export default PostFooter