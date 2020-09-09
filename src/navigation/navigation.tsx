import React, {FC} from 'react';

//TAB NAVIGATOR
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
//------------------------------navigators-----------------------

import Login from '../navigation/login-navigation/loginStack';
import Favorites from './../navigation/favoritres-navigation/favorites-stack';
import Restaurants from '../navigation/restaurants-navigation/restaurants';
import Search from './../navigation/search-navigation/search-navigation';
import Top5 from '../navigation/top-restaurants-navigation/top5-stack';
//------------------------------ICONS
import {Icon} from 'react-native-elements';
//------------------------------Colors
import Colors from '../assets/colors/constants';
//-------------------------------FUNCTION FOR ICONS
const screenOptions = (route, color) => {
  let iconName: string;

  switch (route.name) {
    case 'Restaurants':
      iconName = 'compass-outline';
      break;
    case 'Favorites':
      iconName = 'heart-outline';
      break;
    case 'Search':
      iconName = 'magnify';
      break;
    case 'Top5':
      iconName = 'star-outline';
      break;
    case 'Account':
      iconName = 'home-outline';
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

//-----------------------------main component---------------------

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: Colors.grey001,
          activeTintColor: Colors.grey001,
        }}
        initialRouteName="Account"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen name="Restaurants" component={Restaurants} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Top5" component={Top5} options={{title: 'top 5'}} />
        <Tab.Screen name="Account" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
