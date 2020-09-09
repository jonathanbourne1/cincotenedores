import React from 'react';

//Stack Navigation
import {createStackNavigator} from '@react-navigation/stack';
//create the createStacknavigation function into a variable
const Stack = createStackNavigator();

//-------------------------------------screens
import Search from '../../screens/search-screens/search-screen';
//-------------------------------------RENDER FUNCTION
const LoginNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
