import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import About from '../Screens/About';

const Stack = createStackNavigator();

const Homestack=()=> {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen options={{headerTitleAlign:"center"}} name="Home" component={Home} />
      <Stack.Screen options={{headerTitleAlign:"center"}} name="About" component={About} />
    </Stack.Navigator>
  );
}
export default Homestack