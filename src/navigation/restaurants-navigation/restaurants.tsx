import React from 'react';

//Stack Navigation
import {createStackNavigator} from '@react-navigation/stack';
//create the createStacknavigation function into a variable
const Stack = createStackNavigator();

//-------------------------------------screens
import Restaurants from '../../screens/restaurants-screens/restaurants-screen';
//-------------------------------------RENDER FUNCTION
const LoginNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
