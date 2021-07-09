import React from 'react';
import styled from 'styled-components';

const Course = ({title, image, logo, caption, subtitle, avatar, author}) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Logo source={logo} resizeMode="contain" />
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Avatar source={avatar} />
      <Caption>{caption}</Caption>
      <Author>{author}</Author>
    </Content>
  </Container>
);

const Container = styled.View`
  background: white;
  width: 335px;
  height: 335px;
  border-radius: 14px;
  margin: 10px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  ${{
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 8,
  }}
`;

const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const SubTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 14px;
  font-weight: 500;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

export default Course;
