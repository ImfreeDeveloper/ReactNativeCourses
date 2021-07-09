import React from 'react';
import styled from 'styled-components';

const Logo = ({image, text}) => (
  <Container>
    <Image source={image} resizeMode="contain" />
    <Text>{text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 0 8px 8px 8px;
  ${{
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  }}
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
