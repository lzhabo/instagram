import styled from '@emotion/styled';
import React from 'react';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import favoriets from '../assets/favoriets.svg';
import instLogo from '../assets/instLogo.svg';


const Root = styled.div`
display: flex;
justify-content: space-between;
border-top: 1px solid rgba(0, 0, 0, 0.15);
align-items: center;
min-height: 55px;
padding: 0 13px;
box-sizing: border-box;
flex-shrink: 0;
`


const Image = styled.img`
  cursor: pointer;
`


const Footer: React.FC = () => <Root>
    <Image src={home} alt="camera" />
    <Image src={search} alt="logo" />
    <Image src={instLogo} alt="direct" />
    <Image src={favoriets} alt="direct" />
    <Image src={favoriets} alt="direct" />
</Root>


export default Footer