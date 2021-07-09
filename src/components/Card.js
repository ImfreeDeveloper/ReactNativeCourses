import React from 'react';
import styled from 'styled-components';

const Card = ({title, image, logo, caption, subtitle}) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Logo source={logo} />
      <Wrapper>
        <Caption>{caption}</Caption>
        <SubTitle>{subtitle}</SubTitle>
      </Wrapper>
    </Content>
  </Container>
);

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  ${{
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 8,
  }}
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

export default Card;
