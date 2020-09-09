import React from 'react';

//Stack Navigation
import {createStackNavigator} from '@react-navigation/stack';
//create the createStacknavigation function into a variable
const Stack = createStackNavigator();

//-------------------------------------screens
import Top5 from '../../screens/top5-screens/top5Screen';
//-------------------------------------RENDER FUNCTION
const Top5Stack: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top 5" component={Top5} />
    </Stack.Navigator>
  );
};

export default Top5Stack;
