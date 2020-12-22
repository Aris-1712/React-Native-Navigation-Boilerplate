import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../Screens/Settings';


const Stack = createStackNavigator();

const Settingsstack=()=> {
  return (
    <Stack.Navigator initialRouteName={"Settings"}>
      <Stack.Screen options={{headerTitleAlign:"center"}} name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default Settingsstack