import styled from '@emotion/styled';
import React from 'react';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import direct from '../assets/direct.svg';

const Root = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 58px;
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding: 0 13px;
box-sizing: border-box;
background: #fafafa;

`


const Image = styled.img`
  cursor: pointer;
`


const Header: React.FC = () => <Root>
    <Image src={camera} alt="camera" />
    <Image src={logo} alt="logo" />
    <Image src={direct} alt="direct" />
</Root>


export default Header