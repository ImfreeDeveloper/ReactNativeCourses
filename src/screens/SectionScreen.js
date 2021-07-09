import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SectionScreen = ({route, navigation}) => {
  const section = route.params.section;

  return (
    <Container>
      <StatusBar hidden={true} />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo}/>
          <SubTitle>{section.subtitle}</SubTitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        style={{position: 'absolute', top: 20, right: 20}}
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseView>
          <Icon
            name="close"
            size={30}
            color="#4775f2"
            style={{marginTop: -2}}
          />
        </CloseView>
      </TouchableOpacity>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Cover = styled.View`
  height: 375px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  ${{
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 8,
  }}
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
