import React from 'react';

//Stack Navigation
import {createStackNavigator} from '@react-navigation/stack';
//create the createStacknavigation function into a variable
const Stack = createStackNavigator();

//-------------------------------------screens
import Login from '../../screens/login-screens/login-screen';
//-------------------------------------RENDER FUNCTION
const LoginNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
