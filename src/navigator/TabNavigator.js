import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const Tab = createBottomTabNavigator();

const activeColor = '#4775f2';
const inActiveColor = '#b8bece';

// HomeStack
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Section"
        component={SectionScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

// CoursesStack
const CoursesStack = createStackNavigator();
const CoursesStackScreen = () => {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{headerShown: false}}
      />
    </CoursesStack.Navigator>
  );
};

// ProjectsStack
const ProjectsStack = createStackNavigator();
const ProjectsStackScreen = () => {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{headerShown: false}}
      />
    </ProjectsStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({route}) => {
          let tabBarVisible = true;
          let routeName = getFocusedRouteNameFromRoute(route);
          if (routeName === 'Section') {
            tabBarVisible = false;
          }
          return {
            tabBarVisible,
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                color={focused ? activeColor : inActiveColor}
                size={26}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="albums"
              color={focused ? activeColor : inActiveColor}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="folder"
              color={focused ? activeColor : inActiveColor}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
