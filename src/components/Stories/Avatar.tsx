import styled from "@emotion/styled";
import React from "react";
import gradient from "../../assets/gradient.svg";

interface IProps {
  src: string;
  name: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  background: url(${gradient});
  min-width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const Name = styled.div`
  /* font-family: SF UI Text; */
  font-size: 10px;
  line-height: 10px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.165px;

  color: #000000;
`;

const Avatar: React.FC<IProps> = ({ src, name }) => {
  return (
    <Root>
      <ImageWrapper>
        <Image src={src} alt="ava" />
      </ImageWrapper>
      <Name>{name}</Name>
    </Root>
  );
};

export default Avatar;
