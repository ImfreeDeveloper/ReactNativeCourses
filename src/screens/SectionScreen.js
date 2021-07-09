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
