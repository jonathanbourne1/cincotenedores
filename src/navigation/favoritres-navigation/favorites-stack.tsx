import React from 'react';

//Stack Navigation
import {createStackNavigator} from '@react-navigation/stack';
//create the createStacknavigation function into a variable
const Stack = createStackNavigator();

//-------------------------------------screens
import Favorites from '../../screens/favoritres-screens/favorites-screen';
//-------------------------------------RENDER FUNCTION
const LoginNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
