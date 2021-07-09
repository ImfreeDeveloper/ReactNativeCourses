import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

import Card from '../components/Card';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';

const HomeScreen = ({navigation}) => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const action = useSelector(state => state.action);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();
  const openMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  useEffect(() => {
    toggleMenu();
  });

  const toggleMenu = () => {
    if (action === 'openMenu') {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle('light-content', true);
    }
    if (action === 'closeMenu') {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle('dark-content', true);
    }
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{transform: [{scale}], opacity}}>
        <SafeAreaView>
          <ScrollView style={{height: '100%'}}>
            <TitleBar>
              <TouchableOpacity
                onPress={openMenu}
                style={{position: 'absolute', top: 0, left: 20}}>
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>{name}</Name>
              <Icon
                size={32}
                color="#4775f2"
                name="notifications"
                style={{position: 'absolute', right: 20, top: 5}}
              />
            </TitleBar>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}>
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <SubTitle>Continue Learning</SubTitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {cards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.push('Section', {
                      section: card,
                    });
                  }}>
                  <Card
                    title={card.title}
                    image={card.image}
                    logo={card.logo}
                    caption={card.caption}
                    subtitle={card.subtitle}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <SubTitle>Popular Courses</SubTitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                title={course.title}
                image={course.image}
                logo={course.logo}
                caption={course.caption}
                subtitle={course.subtitle}
                avatar={course.avatar}
                author={course.author}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

const RootView = styled.View`
  background: #000;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 8px;
  text-transform: uppercase;
`;

export default HomeScreen;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
];
