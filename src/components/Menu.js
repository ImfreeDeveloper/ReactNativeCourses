import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Animated, TouchableOpacity, Dimensions} from 'react-native';
import MenuItem from './MenuItem';

const screenHeight = Dimensions.get('window').height;

const Menu = () => {
  const [top] = useState(new Animated.Value(screenHeight));
  const action = useSelector(state => state.action);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleMenu();
  });

  const toggleMenu = () => {
    if (action === 'openMenu') {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }
    if (action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  const closeMenu = () => {
    dispatch({
      type: 'CLOSE_MENU',
    });
  };

  return (
    <AnimatedContainer style={{top}}>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>Meng To</Title>
        <SubTitle>Design at Design+Code</SubTitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -17,
          zIndex: 1,
        }}>
        <CloseView>
          <Icon size={34} color="#546bfb" name="close" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #fff;
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

const items = [
  {
    icon: 'settings',
    title: 'Account',
    text: 'settings',
  },
  {
    icon: 'card',
    title: 'Billing',
    text: 'payments',
  },
  {
    icon: 'compass',
    title: 'Learn React',
    text: 'start course',
  },
  {
    icon: 'exit',
    title: 'Log out',
    text: 'see you soon!',
  },
];
