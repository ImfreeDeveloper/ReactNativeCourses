import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-native';

const CoursesScreen = ({navigation}) => {
  return (
    <Container>
      <Text>Courses screen</Text>
    </Container>
  );
};

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
