import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-native';

const ProjectsScreen = ({navigation}) => {
  return (
    <Container>
      <Text>Projects screen</Text>
    </Container>
  );
};

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
